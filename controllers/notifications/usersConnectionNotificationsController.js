const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const Users = db.users;
const UserConnNotifications = require('../../mongoose_chat/users_conn_notifications.js');
const NotificationTypes = db.notification_types;

exports.saveNotification = async (data) => {

    let foundNotificationType = await NotificationTypes.findOne({
        where: {name: data.type}
    });

    let savedNotification;

    if (!foundNotificationType) {
        let createdNotificationType = await NotificationTypes.create({
            name: data.type
        });

        let newNot = new UserConnNotifications({
            ...data, type_id: createdNotificationType.id
        });
        savedNotification = await newNot.save();

    } else {
        let newNot = new UserConnNotifications({
            ...data, type_id: foundNotificationType.id
        });
        savedNotification = await newNot.save();
    }

    return savedNotification;
};

exports.getCurrentUserNotifications = async (user_id) => {

    let notifications = await UserConnNotifications.find({

        "to_user.id": user_id

        // order: ['created_at']
    }).sort({'created_at': 1});
    return notifications;
};

exports.getRequestByConnectionId = async (connection_id) => {
    let foundInvitation = await UserConnNotifications.findOne({
        connection_id
    });

    return foundInvitation;
}

exports.removeNotification = async (req, res) => {
    let id;
    if (req.return) {
        id = req.id;
    } else {
        id = req.query.id;
    }

    let currentNotification = await UserConnNotifications.findOne({id});
    let t = await UserConnNotifications.deleteOne({_id: id});
    return currentNotification?.to_id;
};
