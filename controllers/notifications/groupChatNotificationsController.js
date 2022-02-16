const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const Users = db.users;
const GroupChatNotifications = require('../../mongoose_chat/group_chat_notifications');
const NotificationTypes = db.notification_types;

exports.saveNotification = async (data) => {
    // console.log('aaa', data)
    // let fields = {
    //     from_id: data.initiator_id,
    //     to_id: data.receiver_id,
    //     group_id: data.group_id,
    //     msg: data.msg
    // };

    let foundNotificationType = await NotificationTypes.findOne({
        where: {name: data.type}
    });


    //
    let savedNotification;

    if (!foundNotificationType) {
        let createdNotificationType = await NotificationTypes.create({
            name: data.type
        });

        let newNot = new GroupChatNotifications({
            ...data, type_id: createdNotificationType.id
        });
        savedNotification = await newNot.save();

    } else {
        let newNot = new GroupChatNotifications({
            ...data, type_id: foundNotificationType.id
        });
        savedNotification = await newNot.save();
    }

    return savedNotification;

    // console.log(savedNotification)
    //
    // let notification = await GroupChatNots.findOne({
    //     include: [
    //         {model: Users, as: 'from_user', attributes: ['id', 'username', 'avatar', 'first_name', 'last_name']},
    //         {model: Users, as: 'to_user', attributes: ['id', 'username', 'avatar', 'first_name', 'last_name']},
    //         {model: NotificationTypes, as: 'notification_type'}
    //     ],
    //     where: {id: savedNotification.id},
    // });
    //
    // if(notification){
    //     return JSON.parse(JSON.stringify(notification))
    // }
    // else {
    //     return '';
    // }
};

exports.getCurrentGroupUsersNotifications = async (data) => {
    data.group_ids = data.chat_group_members.map(group => group.id);
    // console.log('group_ids!!!', data.group_ids)
    let notifications = await GroupChatNotifications.find({

        group_id: {'$in': data.group_ids}

    }).sort({'created_at': 1});


    // let notifications = await GroupChatNots.findAll({
    //     include: [
    //         {model: Users, as: 'from_user', attributes: ['id', 'username', 'avatar', 'first_name', 'last_name']},
    //         {model: Users, as: 'to_user', attributes: ['id', 'username', 'avatar', 'first_name', 'last_name']},
    //         {model: NotificationTypes, as: 'notification_type'}
    //     ],
    //     where: {
    //         group_id: {[Op.in]: data.group_ids},
    //     },
    //     order: ['created_at']
    // });

    // console.log(JSON.parse(JSON.stringify(notifications)))

    // return JSON.parse(JSON.stringify(notifications));

    return notifications;
    //
    // let notifications = JSON.parse(JSON.stringify(t)).map(n => {
    //     n.type = 'group_chat_notifications';
    //     return n;
    // });
    // return notifications;
};

exports.removeNotification = async (req, res) => {
    let id;
    if (req.return) {
        id = req.id;
    } else {
        id = req.query.id;
    }
    console.log('notification id!!!', req)
    let currentNotification = await GroupChatNotifications.findOne({id});
    let t = await GroupChatNotifications.deleteOne({_id: id});
    return currentNotification?.to_id;
};

exports.removeAllNotifications = async (user_id) => {
    await GroupChatNotifications.deleteMany({"to_user.id": user_id});
};