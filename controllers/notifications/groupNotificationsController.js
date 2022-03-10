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

exports.getCurrentGroupNotifications = async (data) => {
    // console.log(data)
    data.group_ids = data.group_members.map(group => group.id);
    // console.log('group_ids!!!', data.group_ids)
    let notifications = await GroupNotifications.find({
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
    let currentNotification = await GroupNotifications.findOne({id});
    let t = await GroupNotifications.deleteOne({_id: id});
    return currentNotification?.to_id;
};