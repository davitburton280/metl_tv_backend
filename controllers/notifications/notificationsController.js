const usersConnectionNotificationsController = require('./usersConnectionNotificationsController');
const groupChatNotificationsController = require('./groupChatNotificationsController');

const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const Users = db.users;
const Channels = db.channels;
const ChatGroups = db.chat_groups;
const ChatGroupsMembers = db.chat_groups_members;

const c = require('../../config/constants');

exports.get = async (req, res) => {
    let data = req.query;
    let user = await Users.findOne({
        where: {id: data.user_id},
        include: [
            {model: Channels, as: 'channel'},
            {model: ChatGroups, as: 'chat_group_members'}
        ]
    });

    let usersConnectionNotifs = await usersConnectionNotificationsController.getCurrentUserNotifications(data);
    let groupChatNotifs = await groupChatNotificationsController.getCurrentGroupUsersNotifications(user.toJSON());
    let ret = [...new Set([...usersConnectionNotifs, ...groupChatNotifs])];
    //
    res.json(usersConnectionNotifs);
};

exports.read = async (req, res) => {
    let {type, id} = req.body;
    console.log(c.USER_CONNECTION_NOTIFICATION_TYPES, type, c.USER_CONNECTION_NOTIFICATION_TYPES.includes(type))
    if (c.USER_CONNECTION_NOTIFICATION_TYPES.includes(type)) {
        await usersConnectionNotificationsController.read(req, res);
    }
    // console.log(req.body)
};