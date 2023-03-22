const directChatNotificationsController = require('./notifications/directChatNotificationsController');
const usersConnNotificationsController = require('./notifications/usersConnectionNotificationsController');
const groupChatNotificationsController = require('./notifications/groupChatNotificationsController');
const groupNotificationsController = require('./notifications/groupNotificationsController');
const postsNotificationsController = require('./notifications/postsNotificationsController');

const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../models');
const Users = db.users;
const Channels = db.channels;
const ChatGroups = db.chat_groups;
const PageGroups = db.groups;
const ChatGroupsMembers = db.chat_groups_members;

const c = require('../config/constants');

exports.get = async (req, res) => {
    let user_id;
    if (req.return) {
        user_id = req.user_id;
    } else {
        let data = req.query;
        user_id = data.user_id
    }
    let ret = [];
    if (user_id) {
        let user = await Users.findOne({
            attributes: {exclude: ['password']},
            where: {id: user_id},
            include: [
                {model: Channels, as: 'channel'},
                {model: ChatGroups, as: 'chat_group_members'},
                {model: PageGroups, as: 'group_members'}
            ]
        });

        let usersConnectionNotifs = await usersConnNotificationsController.getCurrentUserNotifications(user_id);
        let directChatNotifs = await directChatNotificationsController.getCurrentUserNotifications(user_id);
        let groupChatNotifs = await groupChatNotificationsController.getCurrentGroupUsersNotifications(user.toJSON());
        let groupNotifs = await groupNotificationsController.getCurrentGroupNotifications(user.toJSON());
        ret = [...new Set([...usersConnectionNotifs, ...directChatNotifs, ...groupChatNotifs, ...groupNotifs])];

    }


    if (req.return) {
        return ret;
    } else {
        res.json(ret);
    }
};

exports.read = async (req, res) => {
    let {type, id, read_by} = req.body;
    let userNotificationsResult;

    if (c.USER_CONNECTION_NOTIFICATION_TYPES.includes(type)) {
        console.log(1);
        userNotificationsResult = await directChatNotificationsController.read(req, res);
        req.query.user_id = userNotificationsResult;
    } else if (c.GROUP_CHAT_NOTIFICATION_TYPES.includes(type)) {
        console.log(2);
        userNotificationsResult = await groupChatNotificationsController.read(req, res);
        req.query.user_id = read_by.id;
    } else if (c.GROUP_NOTIFICATION_TYPES.includes(type)) {
        console.log(3);
        userNotificationsResult = await groupNotificationsController.read(req, res);
        req.query.user_id = read_by.id;
    } else if (c.POST_NOTIFICATION_TYPES.includes(type)) {
        console.log(4);
        userNotificationsResult = await postsNotificationsController.read(req, res);
        req.query.user_id = read_by.id;
    }
    console.log('mark as read', req.query)
    this.get(req, res);
    // console.log(req.body)
};

exports.markAllAsRead = async (req, res) => {
    let {user_id, read_by, notifications} = req.body;
    let userNotificationsResult;

    await Promise.all(notifications.map(async (n) => {
        if (c.USER_CONNECTION_NOTIFICATION_TYPES.includes(n.type)) {
            userNotificationsResult = await directChatNotificationsController.markAllAsRead(req, res);
            req.query.user_id = userNotificationsResult;
        } else if (c.GROUP_CHAT_NOTIFICATION_TYPES.includes(n.type)) {
            userNotificationsResult = await groupChatNotificationsController.markAllAsRead(req, res);
            req.query.user_id = read_by.id;
        } else if (c.GROUP_NOTIFICATION_TYPES.includes(n.type)) {
            userNotificationsResult = await groupNotificationsController.markAllAsRead(req, res);
            req.query.user_id = read_by.id;
        } else if (c.POST_NOTIFICATION_TYPES.includes(type)) {
            userNotificationsResult = await postsNotificationsController.markAllAsRead(req, res);
            req.query.user_id = read_by.id;
        }
    }))


    req.query.user_id = user_id;
    console.log('mark all as read', req.query)
    this.get(req, res);
};

exports.remove = async (req, res) => {
    let {type, id} = req.query;
    console.log(req.query)
    let userNotificationsResult;

    if (c.USER_CONNECTION_NOTIFICATION_TYPES.includes(type)) {
        userNotificationsResult = await directChatNotificationsController.removeNotification(req, res);
        console.log(userNotificationsResult)
        req.query.user_id = userNotificationsResult;
    }


    this.get(req, res);
    // console.log(req.body)
};

exports.removeAll = async (req, res) => {
    let {user_id} = req.query;
    await directChatNotificationsController.removeAllNotifications(user_id);
    // await groupChatNotificationsController.removeAllNotifications(user_id);
    this.get(req, res);
};