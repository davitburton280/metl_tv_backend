const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const PostNotifications = require('../../mongoose/post_notifications');
const NotificationTypes = db.notification_types;

const moment = require('moment');


exports.saveNotification = async (data) => {
    let foundNotificationType = await NotificationTypes.findOne({
        where: {name: data.type}
    });

    let savedNotification;

    if (!foundNotificationType) {
        let createdNotificationType = await NotificationTypes.create({
            name: data.type
        });

        let newNot = new PostNotifications({
            ...data, type_id: createdNotificationType.id
        });
        savedNotification = await newNot.save();

    } else {
        let newNot = new PostNotifications({
            ...data, type_id: foundNotificationType.id
        });
        savedNotification = await newNot.save();
    }
    return savedNotification;
}

exports.getPostNotifications = async (data) => {
    data.group_ids = data.group_members.map(group => group.id);
    console.log('group_ids!!!', data.group_ids)
    let notifications = await PostNotifications.find({
        "$and": [
            {
                group_id: {'$in': data.group_ids}
            },
            {
                "from_user.id": {'$ne': data.id}
            },
        ],

    }).sort({'created_at': 1});

    let ret = [];

    notifications.map(n => {
        let found = !!n.read.find(r => r.read_by.id === data.id)
        delete n.read;
        if (n.type === 'page_group_join_invitation' && n.to_user.id === data.id) {
            return;
        }
        ret.push({...n.toObject(), read: found});
    })

    return ret;
};

exports.read = async (req, res) => {
    let {id, read_by} = req.body;
    console.log('read!!!!', read_by, id)

    let notification = await PostNotifications.findById(id);
    if (notification) {

        if (!notification?.read.find(r => r.read_by.id === read_by.id)) {
            notification?.read.push({read_by, read_at: moment().format('YYYY-MM-DD, h:mm:ss a')});
        }
        await notification.save();
    }

    let currentNotification = await PostNotifications.findById(id);
    return currentNotification;
};

exports.markAllAsRead = async (req, res) => {
    let {notifications, read_by} = req.body;
    console.log('mark all post notifs as read!!!')
    let result = await Promise.all(notifications.map(async ({id}) => {
        let notification = await PostNotifications.findById(id);
        if (notification) {

            // console.log('check to find!!!', !notification.read.find(r => r.read_by.id === read_by.id))
            if (!notification.read.find(r => r.read_by.id === read_by.id)) {
                notification.read.push({read_by, read_at: moment().format('YYYY-MM-DD, h:mm:ss a')});
            }
            await notification.save();
        }
    }));

    return 'OK';


};