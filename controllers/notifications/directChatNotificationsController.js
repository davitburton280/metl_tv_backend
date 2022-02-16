const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const Users = db.users;
const DirectChatNotifications = require('../../mongoose_chat/direct_chat_notifications');
const NotificationTypes = db.notification_types;

exports.saveNotification = async (data) => {
    // console.log(data)

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

        "to_user.id": data.user_id

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
    console.log('notification id!!!', req)
    let currentNotification = await DirectChatNotifications.findOne({id});
    let t = await DirectChatNotifications.deleteOne({_id: id});
    return currentNotification?.to_id;
};

exports.removeAllNotifications = async (user_id) => {
    console.log('remove all', user_id)
    await DirectChatNotifications.deleteMany({"to_user.id": user_id});
};

exports.read = async (req, res) => {
    let {id} = req.body;

    let notification = await DirectChatNotifications.findById(id);
    notification.read = true;
    await notification.save();

    let currentNotification = await DirectChatNotifications.findById(id);
    return currentNotification.to_user.id;
};

exports.markAllAsRead = async (req, res) => {
    let {ids} = req.body;
    console.log('ids!!!', ids)
    let result = await Promise.all(ids.map(async (_id) => {
        let notification = await DirectChatNotifications.findById(_id);
            console.log(_id, notification?._id)
        if (notification) {
            notification.read = true;
            await notification.save();
        }
    }));

    return 'OK';


};