const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../models');
const Groups = db.groups;
const GroupsMembers = db.groups_members;

const Users = db.users;
const UserRoles = db.users_roles;
const Roles = db.roles;
const UserPageGroups = db.users_page_groups;
const showIfErrors = require('../helpers/showIfErrors');

const to = require('../helpers/getPromiseResult');
const nl2br = require('../helpers/nl2br');

exports.getList = async (req, res) => {
    const { search, onlyMy, isPrivate } = req.body
    const user = req.decoded.id
    let where = {}

    if (search) {
        where.name = { [Op.like]: `%${search}%` }
    }

    if (onlyMy) {
        where.creator_id = user
    }

    if (isPrivate === 0 || isPrivate === 1) {
        where.privacy = isPrivate
    }

    const list = await Groups.findAll({
        where,
        attributes: ['id', 'name', 'avatar', 'creator_id', 'privacy'],
        include: [
            {
                model: Users,
                as: 'group_members',
                attributes: ['id', 'avatar', 'username', 'first_name', 'last_name'],
            }
        ]
    })

    return res.send({ message: 'ok', data: list })
}

exports.get = async (req, res) => {
    console.log('get only page groups!!!')
    let user_id;
    if (req.return) {
        user_id = req.user_id;
    } else {
        let data = req.query;
        user_id = data.user_id;
    }

    let groupsResult = await GroupsMembers.findAll({
        where: { member_id: user_id, confirmed: 1 }, attributes: ['group_id']
    });

    let groupIds = JSON.parse(JSON.stringify(groupsResult)).map(t => t.group_id);

    let where = [
        { id: { [Op.in]: groupIds } },
        // sequelize.where(sequelize.col('group_members->page_group_roles.group_id'), user_id),
    ];

    let groups = await Groups.findAll({
        where,
        attributes: ['id', 'name', 'avatar', 'creator_id', 'privacy'],
        include: [
            {
                model: Users,
                as: 'group_members',
                attributes: ['id', 'avatar', 'username', 'first_name', 'last_name'],
            }
        ]
    });

    if (req.return) {
        return groups;
    } else {
        res.json(groups)
    }
}

exports.getGroupByCustomName = async (req, res) => {
    let { custom_name } = req.query;

    let groupMembers = await Groups.findOne({
        where: { custom_name },
        attributes: ['id', 'name', 'custom_name', 'avatar', 'cover', 'description', 'creator_id', 'privacy'],
        include: [
            {
                model: Users,
                as: 'group_members',
                attributes: ['id', 'avatar', 'username', 'first_name', 'last_name'],

            },
        ]
    });

    res.json(groupMembers);
}


exports.getById = async (req, res) => {
    const { id } = req.params

    const groupMembers = await Groups.findOne({
        where: { id },
        attributes: ['id', 'name', 'custom_name', 'avatar', 'description', 'cover', 'creator_id', 'privacy'],
        include: [
            {
                model: Users,
                as: 'group_members',
                attributes: ['id', 'avatar', 'username', 'first_name', 'last_name'],
            },
        ]
    });

    res.send(groupMembers)
}

const GROUP_REMOVING_TYPES = {
    irrevocably: 1,
    switchAdmin: 2,
    removeMembers: 3
}

exports.deleteGroup = async (req, res) => {
    const { id, type } = req.params

    switch (+type) {
        case GROUP_REMOVING_TYPES.irrevocably:
            await this.removePrimary(id)
            break;
        case GROUP_REMOVING_TYPES.switchAdmin:
            await this.switchAdminInGroup(id)
            break;
        case GROUP_REMOVING_TYPES.removeMembers:
            await this.switchAdminInGroup(id)
            break;
        default:
            break;
    }

    res.send({ message: 'ok' })
}

exports.removePrimary = async (id) => {
    await Groups.destroy({ where: { id } })
}

exports.switchAdminInGroup = async (id) => {
    return null
}

exports.removeMembers = async (group_id) => {
    await GroupsMembers.destroy({ where: { group_id } })
}

exports.getGroupById = async (req, res) => {
    let { group_id } = req.query;

    let groupMembers = await Groups.findOne({
        where: { id: group_id },
        attributes: ['id', 'name', 'custom_name', 'avatar', 'creator_id', 'privacy'],
        include: [
            {
                model: Users,
                as: 'group_members',
                attributes: ['id', 'avatar', 'username', 'first_name', 'last_name'],
            },
        ]
    });

    res.json(groupMembers);
}

exports.updateGroup = async (req, res) => {
    const id = req.params.id
    const { name, description, avatar, cover } = req.body

    const group = await Groups.findOne({
        where: { id }
    })

    if (!group) return res.send({ message: 'wrong group' })

    let updateBody = {
        name, description, avatar, cover, updated_at: new Date()
    }

    if (!name) delete updateBody.name
    if (!description) delete updateBody.description
    if (!avatar) delete updateBody.avatar
    if (!cover) delete updateBody.cover

    await Groups.update(updateBody, { where: { id } })
    return res.send({ message: 'Group, updated' })
}

exports.createGroup = async (req, res) => {
    if (!showIfErrors(req, res)) {
        let data = req.body;
        console.log(data, 'data');
        let group = await Groups.create(data);
        console.log(data)
        await to(GroupsMembers.create({
            group_id: group.id,
            is_admin: 1,
            member_id: data.creator_id,
            accepted: 1,
            confirmed: 1
        }));

        let role = await to(Roles.findOne({
            where: {
                name: 'Chat group creator'
            }
        }))

        req.query.user_id = data.creator_id;
        // let token = await usersController.changeJwt({id: data.creator_id}, res, true);
        this.get(req, res);
    }

};

exports.removeGroup = async (req, res) => {
    const { group_id } = req.query;
    let group = await Groups.findOne({ where: { id: group_id }, attributes: ['creator_id'] });
    req.query.user_id = group.creator_id;
    await GroupsMembers.destroy({ where: { group_id } });
    await Groups.destroy({ where: { id: group_id } });
    this.get(req, res);
};

exports.getGroupMembers = async (req, res) => {
    console.log('get group members!!!');
    let group_id;
    if (req.return) {
        group_id = req.group_id;
    } else {
        group_id = req.query.group_id;
    }

    let groupMembers = await Groups.findOne({
        include: [
            {
                model: Users,
                as: 'group_members',
                attributes: ['id', 'avatar', 'first_name', 'last_name', 'username'],
                // through: {attributes: ['confirmed']}
            }
        ],
        where: { id: group_id }
    });

    if (req.return) {
        return JSON.parse(JSON.stringify(groupMembers));
    } else {
        res.json(groupMembers);
    }
};

exports.addGroupMembers = async (req, res) => {
    const { group_id, member_ids, accepted } = req.body;
    let list = member_ids?.map(async (member_id) => {
        await to(GroupsMembers.create({ group_id, member_id, ...{ accepted, confirmed: 0 } }));
    });

    await Promise.all(list);
    req.query.group_id = group_id;
    await this.getGroupById(req, res);
};

exports.removeGroupMember = async (req, res) => {
    const { group_id, member_id } = req.query;
    console.log('remove group member', req.query)
    await GroupsMembers.destroy({ where: { group_id, member_id } });

    req.query.group_id = group_id;
    await this.getGroupById(req, res);
};

exports.leaveGroup = async (req, res) => {
    const { group_id, member_id } = req.query;
    let group = await Groups.findOne({ where: { id: group_id }, attributes: ['creator_id'] });
    if (+member_id !== group.creator_id) {
        await GroupsMembers.destroy({ where: { group_id, member_id } });
        req.query.user_id = member_id;
        this.get(req, res);
    } else {
        res.status(500).json({ msg: 'The group owner cannot leave the group' });
    }
};

exports.acceptGroupJoin = async (req, res) => {
    const { group_id, member_id } = req.body;
    await GroupsMembers.update({ accepted: 1 }, { where: { group_id, member_id } });
    req.query.user_id = member_id;
    this.get(req, res);
};

exports.declineGroupJoin = async (req, res) => {
    const { group_id, member_id } = req.body;
    await GroupsMembers.destroy({ where: { group_id, member_id } });
    req.query.user_id = member_id;
    this.get(req, res);
};

exports.confirmJoinGroup = async (req, res) => {
    const { group_id, member_id } = req.body;
    await GroupsMembers.update({ confirmed: 1 }, { where: { group_id, member_id } });
    req.query.user_id = member_id;
    this.get(req, res);
}

exports.ignoreJoinGroup = async (req, res) => {
    const { group_id, member_id } = req.body;
    await GroupsMembers.destroy({ where: { group_id, member_id } });
    let group = await Groups.findOne({ where: { id: group_id } });
    console.log(group)
    req.query.user_id = group.creator_id;
    this.get(req, res);
}

exports.makeMemberAdmin = async (req, res) => {
    const { group_id, member_id, type } = req.body;
    let is_admin = +(type === 'admin');
    let is_moderator = +(type === 'moderator');
    console.log('making', is_admin, is_moderator, member_id)
    await GroupsMembers.update({ is_admin, is_moderator }, { where: { group_id, member_id } });
    res.json('OK');
}

exports.declineMakeAdmin = async (req, res) => {
    const { group_id, member_id } = req.body;
}

exports.removeAdminPrivileges = async (req, res) => {
    const { group_id, member_id } = req.body;
    await GroupsMembers.update({ is_admin: 0, is_moderator: 0 }, { where: { group_id, member_id } });
    req.query.group_id = group_id;
    this.getGroupMembers(req, res)
}