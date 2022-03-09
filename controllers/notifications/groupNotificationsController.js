const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const GroupNotifications = require('../../mongoose_chat/group_notifications');
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

        let newNot = new GroupNotifications({
            ...data, type_id: createdNotificationType.id
        });
        savedNotification = await newNot.save();

    } else {
        let newNot = new GroupNotifications({
            ...data, type_id: foundNotificationType.id
        });
        savedNotification = await newNot.save();
    }

    return savedNotification;
}