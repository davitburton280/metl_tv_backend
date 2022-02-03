const usersConnectionNotificationsController = require('./notifications/usersConnectionNotificationsController');
const groupChatNotificationsController = require('./notifications/groupChatNotificationsController');

const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../models');
const Users = db.users;
const Channels = db.channels;
const ChatGroups = db.chat_groups;
const ChatGroupsMembers = db.chat_groups_members;

const c = require('../config/constants');

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
    res.json(ret);
};

exports.read = async (req, res) => {
    let {type, id} = req.body;
    let userNotificationsResult;
    console.log(c.USER_CONNECTION_NOTIFICATION_TYPES, type, c.USER_CONNECTION_NOTIFICATION_TYPES.includes(type))
    if (c.USER_CONNECTION_NOTIFICATION_TYPES.includes(type)) {
        userNotificationsResult = await usersConnectionNotificationsController.read(req, res);
        req.query.user_id = userNotificationsResult;
    }

    this.get(req, res);
    // console.log(req.body)
};

exports.markAllAsRead = async (req, res) => {
    let {user_id} = req.body;
    await usersConnectionNotificationsController.markAllAsRead(req, res);
    req.query.user_id = user_id;
    console.log(req.query)
    this.get(req, res);
};

exports.remove = async (req, res) => {
    let {type, id} = req.query;
    console.log(req.query)
    let userNotificationsResult;

    if (c.USER_CONNECTION_NOTIFICATION_TYPES.includes(type)) {
        userNotificationsResult = await usersConnectionNotificationsController.removeNotification(req, res);
        console.log(userNotificationsResult)
        req.query.user_id = userNotificationsResult;
    }


    this.get(req, res);
    // console.log(req.body)
};

exports.removeAll = async (req, res) => {
    let {user_id} = req.query;
    await usersConnectionNotificationsController.removeAllNotifications(user_id);
    await groupChatNotificationsController.removeAllNotifications(user_id);
    this.get(req, res);
};