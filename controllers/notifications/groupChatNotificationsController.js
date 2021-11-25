const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const GroupChatNots = db.group_chat_notifications;

exports.saveNotification = async (data) => {
    console.log(data)
    let fields = {
        from_id: data.initiator_id,
        group_id: data.group_id,
        text: data.msg
    };
    console.log(fields)
    await GroupChatNots.create(fields);

    return 'OK';
};

exports.getCurrentGroupUsersNotifications = async (data) => {
    data.group_ids = data.chat_group_members.map(group => group.id);
    console.log('group_ids!!!', data.group_ids)
    let t = await GroupChatNots.findAll({
        where: {
            group_id: {[Op.in]: data.group_ids},
        },
        order: ['created_at']
    });
    let notifications = JSON.parse(JSON.stringify(t)).map(n => {
        n.type = 'group_chat_notifications';
        return n;
    });
    return notifications;
};