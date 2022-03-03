const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const Users = db.users;
const ChatGroups = db.chat_groups;
const ChatGroupsMembers = db.chat_groups_members;

const GroupsMessages = require('../../mongoose_chat/group_chat_messages');
const moment = require('moment');

const to = require('../../helpers/getPromiseResult');
const nl2br = require('../../helpers/nl2br');

const showIfErrors = require('../../helpers/showIfErrors');
const groupChatNotificationsController = require('../notifications/groupChatNotificationsController');


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

    let chatGroupsResult = await ChatGroupsMembers.findAll({
        where: {member_id: user_id, confirmed: 1}, attributes: ['group_id']
    });

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
                attributes: ['id', 'avatar', 'username', 'first_name', 'last_name'],
                // where: sequelize.where(sequelize.col(`chat_group_members->chat_groups_members.confirmed`), 1)
                // through: {attributes: ['confirmed']}
            },
        ]
    });

    // Gets messages from MongoDb
    let messages = await GroupsMessages.find({
        group_id: chatGroups
    }).sort({'created_at': 1});

    // console.log("MESSAGES", messages)

    let result = JSON.parse(JSON.stringify(groupsMessages)).map(uc => {
        let group_id = uc.id;
        uc.group_messages = messages.filter(msg => msg.toObject().group_id === group_id);
        return uc;
    });

    if (req.return) {
        return result;
    } else {
        res.json(result)
    }

};

exports.createGroup = async (req, res) => {
    if (!showIfErrors(req, res)) {
        let data = req.body;
        let group = await ChatGroups.create(data);
        console.log(data)
        await to(ChatGroupsMembers.create({group_id: group.id, member_id: data.creator_id, accepted: 1, confirmed: 1}));
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

    let groupMembers = await ChatGroups.findOne({
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

    console.log(JSON.parse(JSON.stringify(groupMembers)))

    if (groupMembers) {

        groupMembers = JSON.parse(JSON.stringify(groupMembers));

        // Gets messages from MongoDb
        let messages = await GroupsMessages.find({
            group_id
        }).sort({'created_at': 1});

        groupMembers.group_messages = messages;
    }


    if (req.return) {
        return JSON.parse(JSON.stringify(groupMembers));
    } else {

        res.json(groupMembers);
    }
};

exports.addGroupMembers = async (req, res) => {
    const {group_id, member_ids} = req.body;
    let list = member_ids?.map(async (member_id) => {
        await to(ChatGroupsMembers.create({group_id, member_id, ...{accepted: 0, confirmed: 0}}));
    });

    await Promise.all(list);
    req.query.group_id = group_id;
    this.getGroupMembers(req, res);
};

exports.removeGroupMember = async (req, res) => {
    const {group_id, member_id} = req.query;
    await ChatGroupsMembers.destroy({where: {group_id, member_id}});
    let invitationNotif = await groupChatNotificationsController.getNotificationByTypeUser(
        {return: true, group_id, to_id: member_id}
    );
    console.log("NOTIFICATION ID:", invitationNotif)
    if (invitationNotif) {
        await groupChatNotificationsController.removeNotification({return: true, id: invitationNotif._id});
    }
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
    await ChatGroupsMembers.update({accepted: 1}, {where: {group_id, member_id}});
    req.query.user_id = member_id;
    this.getGroupsMessages(req, res);
};

exports.declineGroupJoin = async (req, res) => {
    const {group_id, member_id} = req.body;
    await ChatGroupsMembers.destroy({where: {group_id, member_id}});
    req.query.user_id = member_id;
    this.getGroupsMessages(req, res);
};

exports.confirmJoinGroup = async (req, res) => {
    const {group_id, member_id} = req.body;
    await ChatGroupsMembers.update({confirmed: 1}, {where: {group_id, member_id}});
    req.query.user_id = member_id;
    this.getGroupsMessages(req, res);
}

exports.ignoreJoinGroup = async (req, res) => {
    const {group_id, member_id} = req.body;
    await ChatGroupsMembers.destroy({where: {group_id, member_id}});
    let group = await ChatGroups.findOne({where: {id: group_id}});
    console.log(group)
    req.query.user_id = group.creator_id;
    this.getGroupsMessages(req, res);
}

exports.changeGroupAvatar = async (req, res) => {

    uploadGroupAvatar(req, res, async (err) => {

        const {avatar, group_id, member_id} = req.body;
        let t = await to(ChatGroups.update({avatar: avatar}, {where: {id: group_id}}));
        req.query.user_id = member_id;
        this.getGroupsMessages(req, res);
    })
};


exports.saveGroupMessage = async (data) => {
    // data.seen_at = '';
    data.message = nl2br(data.message, false);
    console.log(data)
    let newMsg = new GroupsMessages({
        ...data,
        seen: []
    });
    let result = await to(newMsg.save());
    console.log("RESULT", result)
    let messages = await GroupsMessages.find({
        group_id: data.group_id
    }).sort({'created_at': 1});
    return messages;
};

exports.getGroupMessages = async (req, res) => {

    let {group_id} = req || req.query;
    let messages = await GroupsMessages.find({
        group_id
    }).populate({path: 'seen'}).sort({'created_at': 1});

    if (req.return) {
        return messages
    } else {
        res.json(messages);
    }
};

exports.updateSeen = async (data) => {

    let {message_id, seen_at, from_id, group_id} = data;
    let seen_by = {
        id: from_id,
        first_name: data.from_first_name,
        last_name: data.from_last_name,
        avatar: data.from_avatar
    };
    console.log('update seen!!!', data)
    let foundMessage = await GroupsMessages.findById(message_id);

    if (!foundMessage.seen.find(s => s.seen_by.id === seen_by.id)) {
        foundMessage.seen.push({
            seen_by, seen_at
        });
    }
    let updated = await to(foundMessage.save());


    // updated = await to(GroupsMessages.updateMany(
    //    {
    //        "$and": [
    //            {group_id}
    //        ],
    //    }, {$set: {seen: true, seen_at}}));

    let notOwnedMessages = await to(GroupsMessages.find({
        "$and": [
            {group_id},
            {
                from_id: {"$ne": from_id}
                // "$ne": [
                //     {from_id}
                // ]
            }
        ],
    }));


    let groupUnseenMessages = notOwnedMessages.filter(gm => !gm.seen.find(g => g.seen_by.id === from_id));

    await Promise.all(groupUnseenMessages.map(async (gum) => {
        gum.seen.push({
            seen_by, seen_at
        });
        await to(gum.save());
    }))

    console.log('!!!!!')
    console.log(groupUnseenMessages)
    console.log('!!!!!')

    return updated;
};