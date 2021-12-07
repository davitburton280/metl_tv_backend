const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const Users = db.users;
const UserConnectionNots = db.users_connection_notifications;
const NotificationTypes = db.notification_types;

exports.saveNotification = async (data) => {
    // console.log(data)
    let fields = {
        from_id: data.initiator_id,
        to_id: data.receiver_id,
        connection_id: data.connection_id,
        msg: data.msg
    };

    let foundNotificationType = await NotificationTypes.findOne({
        where: {name: data.type}
    });

    let savedNotification;

    if (!foundNotificationType) {
        let createdNotificationType = await NotificationTypes.create({
            name: data.type
        });

        savedNotification = await UserConnectionNots.create({...fields, type_id: createdNotificationType.id});
    } else {
        savedNotification = await UserConnectionNots.create({...fields, type_id: foundNotificationType.id});
    }


    let notification = await UserConnectionNots.findOne({
        include: [
            {model: Users, as: 'from_user', attributes: ['id', 'username', 'avatar', 'first_name', 'last_name']},
            {model: Users, as: 'to_user', attributes: ['id', 'username', 'avatar', 'first_name', 'last_name']},
            {model: NotificationTypes, as: 'notification_type'}
        ],
        where: {id: savedNotification.id},
    });


    return notification;
};

exports.getCurrentUserNotifications = async (data) => {
    let notifications = await UserConnectionNots.findAll({
        include: [
            {model: Users, as: 'from_user', attributes: ['id', 'username', 'avatar', 'first_name', 'last_name']},
            {model: Users, as: 'to_user', attributes: ['id', 'username', 'avatar', 'first_name', 'last_name']},
            {model: NotificationTypes, as: 'notification_type'}
        ],
        where: {to_id: data.user_id},
        order: ['created_at']
    });

    return notifications;
};


exports.removeNotification = async (req, res) => {
    // await UserConnectionNots.destroy({id: data.notification_id});
};

exports.read = async (req, res) => {
    let {id} = req.body;
    console.log(id)
    await UserConnectionNots.update({read: '1'}, {where: {id}});

    let currentNotification = await UserConnectionNots.findOne({where: {id}, attributes: ['to_id']});

    return currentNotification.to_id;

};