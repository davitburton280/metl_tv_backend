const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const Users = db.users;
const ChatGroups = db.chat_groups;
const ChatGroupsMembers = db.chat_groups_members;

const GroupMessages = require('../../mongoose_chat/group_chat_messages');
const moment = require('moment');

const to = require('../../helpers/getPromiseResult');
const nl2br = require('../../helpers/nl2br');

const showIfErrors = require('../../helpers/showIfErrors');


exports.getGroupsMessages = async (req, res) => {

    let user_id;
    if (req.return) {
        user_id = req.user_id;
        // console.log("USER ID:"+user_id)
    } else {
        let data = req.query;
        user_id = data.user_id;
    }

    console.log('get groups messages!!!')

    let chatGroupsResult = await ChatGroupsMembers.findAll({where: {member_id: user_id}, attributes: ['group_id']});

    let chatGroups = JSON.parse(JSON.stringify(chatGroupsResult)).map(t => t.group_id);

    let where = {
        id: {[Op.in]: chatGroups}
    };

    let groupsMessages = await ChatGroups.findAll({
        where,
        attributes: ['id', 'name', 'avatar', 'creator_id'],
        include: [
            {
                model: Users,
                as: 'chat_group_members',
                attributes: ['id', 'avatar', 'username',
                    [
                        sequelize.fn('concat', sequelize.col('`chat_group_members.first_name`'), ' ', sequelize.col('`chat_group_members.last_name`')), 'name'
                    ]
                ],
                // through: {attributes: ['confirmed']}
            },
        ]
    });

    if (req.return) {
        return groupsMessages;
    } else {
        res.json(groupsMessages)
    }

};

exports.createGroup = async (req, res) => {
    if (!showIfErrors(req, res)) {
        let data = req.body;
        let group = await ChatGroups.create(data);
        console.log(data)
        await to(ChatGroupsMembers.create({group_id: group.id, member_id: data.creator_id, confirmed: 1}));
        req.query.user_id = data.creator_id;
        // this.getChatGroups(req, res);
        this.getGroupsMessages(req, res);
    }

};

exports.removeGroup = async (req, res) => {
    const {group_id} = req.query;
    let group = await ChatGroups.findOne({where: {id: group_id}, attributes: ['creator_id']});
    req.query.user_id = group.creator_id;
    await ChatGroupsMembers.destroy({where: {group_id}});
    await ChatGroups.destroy({where: {id: group_id}});
    this.getGroupsMessages(req, res);
};


exports.getGroupMembers = async (req, res) => {
    console.log('get group members!!!');
    let group_id;
    if (req.return) {
        group_id = req.group_id;
    } else {
        group_id = req.query.group_id;
    }

    let members = await ChatGroups.findOne({
        include: [
            {
                model: Users,
                as: 'chat_group_members',
                attributes: ['id', 'avatar', [sequelize.fn('concat', sequelize.col('first_name'), ' ', sequelize.col('last_name')), 'name'], 'username'],
                // through: {attributes: ['confirmed']}
            }
        ],
        where: {id: group_id}
    });

    if (req.return) {
        return members;
    } else {

        res.json(members);
    }
};

exports.addGroupMembers = async (req, res) => {
    const {group_id, member_ids} = req.body;
    let list = member_ids?.map(async (member) => {
        await to(ChatGroupsMembers.create({group_id, member_id: member.id, ...{confirmed: 0}}));
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

exports.leaveGroup = async (req, res) => {
    const {group_id, member_id} = req.query;
    let group = await ChatGroups.findOne({where: {id: group_id}, attributes: ['creator_id']});
    if (+member_id !== group.creator_id) {
        // await ChatGroups.destroy({where: {id: group_id}});
        await ChatGroupsMembers.destroy({where: {group_id, member_id}});
        req.query.user_id = member_id;
        this.getGroupsMessages(req, res);
    } else {
        res.status(500).json({msg: 'The group owner cannot leave the group'});
    }

};

exports.acceptGroupJoin = async (req, res) => {
    const {group_id, member_id} = req.body;
    await ChatGroupsMembers.update({confirmed: 1}, {where: {group_id, member_id}});
    req.query.user_id = member_id;
    this.getGroupsMessages(req, res);
};

exports.declineGroupJoin = async (req, res) => {
    const {group_id, member_id} = req.body;
    await ChatGroupsMembers.destroy({where: {group_id, member_id}});
    req.query.user_id = member_id;
    this.getGroupsMessages(req, res);
    // req.query.group_id = group_id;
    // this.getGroupMembers(req, res);
};