const usersConnectionNotificationsController = require('../controllers/notifications/directChatNotificationsController')
const groupChatNotificationsController = require('../controllers/notifications/groupChatNotificationsController');
const groupNotificationsController = require('../controllers/notifications/groupNotificationsController')

getGroupSockets = async (io, group) => {
    return await io.in(group).allSockets();
}

getGroupUsernames = (groupName, usersGroups) => {
    let groupUsernames = [];
    // console.log(Object.values(usersGroups))
    Object.values(usersGroups).map(gu => {
        if (gu.chat_groups.find(g => g === groupName)) {
            groupUsernames.push(gu.username)
        }
    })

    return groupUsernames;
}

getConnectedUserNames = (usersGroups) => {
    return Object.keys(usersGroups);
}

getSocketId = (username, usersGroups) => {
    return usersGroups[username]?.socket_id;
}

saveDirectChatNotification = async ({from_user, to_user, connection_id, msg, type}) => {
    let notification = {
        from_user,
        to_user,
        connection_id,
        read: false,
        read_at: '',
        type,
        msg: msg
    };

    let savedNotification = await usersConnectionNotificationsController.saveNotification(notification);

    notification._id = savedNotification._id;
    return notification;
}

saveGroupChatNotification = async ({from_user, to_user, group_id, msg, type}) => {
    let notification = {
        from_user,
        to_user,
        group_id,
        read: false,
        read_at: '',
        type,
        msg: msg
    };

    let n = await groupChatNotificationsController.saveNotification(notification);
}

saveGroupNotification = async ({from_user, to_user, member, group, msg, type}) => {
    console.log(member)
    let notification = {
        group_id: group.id,
        group_name: group.name,
        from_user,
        to_user: member,
        to_id: member.id,
        msg: msg,
        type: 'group_join_invitation'
    };

    console.log(notification)

    let savedNotification = await groupNotificationsController.saveNotification(notification);
    notification._id = savedNotification._id;
    return notification;
}

module.exports = {
    getGroupSockets,
    getGroupUsernames,
    getConnectedUserNames,
    getSocketId,
    saveDirectChatNotification,
    saveGroupNotification
}