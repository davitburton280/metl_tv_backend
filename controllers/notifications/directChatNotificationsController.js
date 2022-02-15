const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const Users = db.users;
const DirectChatNotifications = require('../../mongoose_chat/direct_chat_notifications');
const NotificationTypes = db.notification_types;

exports.saveNotification = async (data) => {
    console.log(data)

    let foundNotificationType = await NotificationTypes.findOne({
        where: {name: data.type}
    });

    let savedNotification;

    if (!foundNotificationType) {
        let createdNotificationType = await NotificationTypes.create({
            name: data.type
        });

        let newNot = new DirectChatNotifications({
            ...data, type_id: createdNotificationType.id
        });
        savedNotification = await newNot.save();

    } else {
        let newNot = new DirectChatNotifications({
            ...data, type_id: foundNotificationType.id
        });
        savedNotification = await newNot.save();
    }


    // let notification = await UserConnectionNots.findOne({
    //     include: [
    //         {model: Users, as: 'from_user', attributes: ['id', 'username', 'avatar', 'first_name', 'last_name']},
    //         {model: Users, as: 'to_user', attributes: ['id', 'username', 'avatar', 'first_name', 'last_name']},
    //         {model: NotificationTypes, as: 'notification_type'}
    //     ],
    //     where: {id: savedNotification.id},
    // });


    return savedNotification;
};

exports.getCurrentUserNotifications = async (data) => {
    // let notifications = await UserConnectionNots.findAll({
    //     include: [
    //         {model: Users, as: 'from_user', attributes: ['id', 'username', 'avatar', 'first_name', 'last_name']},
    //         {model: Users, as: 'to_user', attributes: ['id', 'username', 'avatar', 'first_name', 'last_name']},
    //         {model: NotificationTypes, as: 'notification_type'}
    //     ],
    //     where: {to_id: data.user_id},
    //     order: ['created_at']
    // });

    let notifications = await DirectChatNotifications.find({

        to_id: data.user_id

        // order: ['created_at']
    }).sort({'created_at': 1});

    return notifications;
};


exports.removeNotification = async (req, res) => {
    let id;
    if (req.return) {
        id = req.id;
    } else {
        id = req.query.id;
    }
    let currentNotification = await UserConnectionNots.findOne({where: {id}, attributes: ['to_id']});
    console.log('notification id!!!', currentNotification)
    let t = await UserConnectionNots.destroy({where: {id}});
    return currentNotification?.to_id;
};

exports.removeAllNotifications = async (user_id) => {
    await UserConnectionNots.destroy({where: {to_id: user_id}});
};

exports.read = async (req, res) => {
    let {id} = req.body;
    console.log(id)
    await UserConnectionNots.update({read: '1'}, {where: {id}});

    let currentNotification = await UserConnectionNots.findOne({where: {id}, attributes: ['to_id']});
    return currentNotification.to_id;
};

exports.markAllAsRead = async (req, res) => {
    let {ids} = req.body;
    let result = ids.map(async (id) => {
        await UserConnectionNots.update({read: '1'}, {where: {id}});
    });

    await Promise.all(result);

    return 'OK';


};