const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const Users = db.users;
const GroupChatNotifications = require('../../mongoose_chat/group_chat_notifications');
const NotificationTypes = db.notification_types;

const moment = require('moment');

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
    // console.log(data)
    data.group_ids = data.chat_group_members.map(group => group.id);
    // console.log('group_ids!!!', data.group_ids)
    let notifications = await GroupChatNotifications.find({
        "$and": [
            {
                group_id: {'$in': data.group_ids}
            },
            {
                "from_user.id": {'$ne': data.id}
            }
        ],

    }).sort({'created_at': 1});

    let ret = [];

    notifications.map(n => {
        let found = !!n.read.find(r => r.read_by.id === data.id)
        delete n.read;
        ret.push({...n.toObject(), read: found});
    })

    return ret;
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


exports.read = async (req, res) => {
    let {id, read_by} = req.body;
    console.log('read!!!!')

    let notification = await GroupChatNotifications.findById(id);
    if (!notification.read.find(r => r.read_by.id === read_by.id)) {
        notification.read.push({read_by, read_at: moment().format('YYYY-MM-DD, h:mm:ss a')});
    }
    await notification.save();

    let currentNotification = await GroupChatNotifications.findById(id);
    return currentNotification;
};

exports.markAllAsRead = async (req, res) => {
    let {notifications, read_by} = req.body;
    // console.log('ids!!!', ids)
    let result = await Promise.all(notifications.map(async ({id}) => {
        let notification = await GroupChatNotifications.findById(id);
        console.log('check to find!!!', !notification.read.find(r => r.read_by.id === read_by.id))
        if (!notification.read.find(r => r.read_by.id === read_by.id)) {
            notification.read.push({read_by, read_at: moment().format('YYYY-MM-DD, h:mm:ss a')});
        }
        await notification.save();
    }));

    return 'OK';


};