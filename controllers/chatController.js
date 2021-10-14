const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../models');
const ChatMessages = db.chat_messages;
const ChatGroups = db.chat_groups;
const ChatGroupsMembers = db.chat_groups_members;
const Videos = db.videos;
const Users = db.users;
const to = require('../helpers/getPromiseResult');

const usersController = require('./usersController');

exports.getVideoMessages = async (req, res) => {
    const {video_id} = req.query;
    console.log('get video chat messages!!!!')

    let ms = await ChatMessages.findAll({
        where: {video_id: video_id},
        include: [
            {model: Videos, as: 'video'},
            {model: Users, as: 'from_user', attributes: [['username', 'from'], 'avatar']}
        ]
    });
    res.json(ms);
};

exports.saveMessage = async (req, res) => {
    let data = req.body;
    data.to_id = data.to_id ? data.to_id : 0;
    await to(ChatMessages.create(data));
    if (!data.video_id) {
        await to(usersController.createUsersConnection(data))
    }
    req.query.video_id = data.video_id;

    if (!data.video_id) {
        req.query.to_id = data.to_id;
        req.query.from_id = data.from_id;
        req.query.personal = data.personal;
        this.getChatMessages(req, res);
    } else {
        await this.getVideoMessages(req, res);
    }

};


exports.getChatMessages = async (req, res) => {
    const {from_id, to_id, personal} = req.query;
    // console.log(req.query)
    // let whereIds = ;

    let where = to_id ? {from_id: to_id} : {};

    let arr = [
        to_id ? {from_id, to_id} : {from_id},
        {

            to_id: from_id,
            ...where
        }
    ];

    let ms = await ChatMessages.findAll({
        // attributes : [{exclude: 'video_id'}],
        where: {
            video_id: null,
            [Op.or]: arr
        },
        include: [
            {
                model: Users,
                as: 'from_user',
                attributes: [['username', 'from'], 'id', 'avatar', 'first_name', 'last_name']
            },
            {
                model: Users,
                as: 'to_user',
                attributes: [['username', 'from'], 'id', 'avatar', 'first_name', 'last_name'],
            }
        ],
        order: [
            [sequelize.col('`chat_messages`.`created_at`'), 'asc']
        ]

    });


    if (personal) {

        let usersFiltered = {};
        let blockedUsers = await usersController.getBlockedContactsIds(from_id, 1);
        console.log(blockedUsers)

        // // console.log(ms.toJSON())
        ms.map(m => {
            // console.log('!!!!!!!!')
            // console.log(m.to_user.id, +from_id)
            // console.log('!!!!!!!!')
            let user = m.from_user.id === +from_id ? m.to_user : (m.to_user.id === +from_id ? m.from_user : m.from_user)

            // console.log('BLOCKED USER!!!')
            // console.log(user)
            let msg = m.toJSON();
            // console.log(blockedUsers.connection_id, user.id)
            // console.log(blockedUsers.user_id, user.id)
            if (user) {
                // console.log(user.toJSON())
                let user_id = user.id;
                if (!usersFiltered[user_id]) {
                    usersFiltered[user_id] = {messages: [], user: ''}
                    usersFiltered[user_id]['messages'] = [msg];
                    let foundInBlocked = blockedUsers.find(bUser => user.id === bUser.user_id || user.id === bUser.connection_id)
                    usersFiltered[user_id]['user'] = foundInBlocked ? {blocked: 1, ...user.dataValues} : user;
                } else {
                    if (!usersFiltered[user_id]['messages']) {
                        usersFiltered[user_id]['messages'] = []
                    }
                    usersFiltered[user_id]['messages'].push(msg);
                }
            }

        });

        // console.log("USERS FILTERED!!!! ", Object.values(usersFiltered))
        res.json(Object.values(usersFiltered));
    } else {
        // console.log(ms)
        res.json(ms);
    }
};

exports.updateSeen = async (data) => {
    let {seen, from_id, to_id} = data;

    let arr = [
        {
            to_id: from_id,
            from_id: to_id
        },
        {from_id, to_id}
    ];
    console.log("FROM ID" + data.from_id)
    let updated = await to(ChatMessages.update({seen}, {
        where: {
            [Op.or]: arr
        },
    }));
    console.log(!!updated)
    return !!updated;
};

exports.getChatGroups = async (req, res) => {
    let {user_id} = req.query;

    let arr = [
        sequelize.where(sequelize.col('`chat_group_members->chat_groups_members.member_id`'), user_id),
        {creator_id: user_id}
    ];
    console.log('get chat groups!!!')

    let groups = await ChatGroups.findAll({
        include: [
            {
                model: Users,
                as: 'chat_group_members',
                attributes: ['id', 'avatar', [sequelize.fn('concat', sequelize.col('first_name'), ' ', sequelize.col('last_name')), 'name']]
            }
        ],
        where: {
            [Op.or]: arr
        },
    });
    res.json(groups);
};

exports.createGroup = async (req, res) => {
    let data = req.body;
    let group = await ChatGroups.create(data);
    console.log(data)
    await to(ChatGroupsMembers.create({group_id: group.id, member_id: data.creator_id}));
    req.query.user_id = data.creator_id;
    this.getChatGroups(req, res);
};

exports.getGroupMembers = async (req, res) => {
    console.log('get group members!!!')
    const {group_id} = req.query;
    let members = await ChatGroupsMembers.findAll({
        include: [
            {
                model: Users, as: 'member', attributes:
                    ['id', 'avatar', [sequelize.fn('concat', sequelize.col('first_name'), ' ', sequelize.col('last_name')), 'name']]
            }], where: {group_id}
    });
    res.json(members);
};

exports.addGroupMembers = async (req, res) => {
    const {group_id, member_ids} = req.body;
    let list = member_ids.map(async (member_id) => {
        await to(ChatGroupsMembers.create({group_id, member_id}));
    });

    await Promise.all(list);
    req.query.group_id = group_id;
    this.getGroupMembers(req, res);
};

exports.removeGroupMember = async (req, res) => {
    const {group_id, member_id} = req.query;
    await ChatGroupsMembers.destroy({where: {group_id, member_id}});
    this.getGroupMembers(req, res);
};


exports.removeGroup = async (req, res) => {
    const {group_id} = req.query;
    await ChatGroups.destroy({where: {id: group_id}});
    await ChatGroupsMembers.destroy({where: {group_id}});
    this.getChatGroups(req, res);
};

exports.leaveGroup = async (req, res) => {
    const {group_id, member_id} = req.query;
    let group = await ChatGroups.findOne({where: {id: group_id}, attributes: ['creator_id']});
    if (+member_id !== group.creator_id) {
        await ChatGroups.destroy({where: {id: group_id}});
        await ChatGroupsMembers.destroy({where: {group_id, member_id}});
        req.query.user_id = member_id;
        this.getChatGroups(req, res);
    } else {
        res.status(500).json({msg: 'The group owner cannot leave the group'});
    }

};

