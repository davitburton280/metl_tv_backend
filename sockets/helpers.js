const usersConnectionNotificationsController = require('../controllers/notifications/directChatNotificationsController')
const groupChatNotificationsController = require('../controllers/notifications/groupChatNotificationsController');
const groupNotificationsController = require('../controllers/notifications/groupNotificationsController')

exports.getGroupSockets = async (io, group) => {
    return await io.in(group).allSockets();
}

exports.getGroupUsernames = (groupName, usersGroups) => {
    let groupUsernames = [];
    // console.log(Object.values(usersGroups))
    Object.values(usersGroups).map(gu => {
        if (gu.chat_groups.find(g => g === groupName)) {
            groupUsernames.push(gu.username)
        }
    })

    return groupUsernames;
}

exports.getConnectedUserNames = (usersGroups) => {
    return Object.keys(usersGroups);
}

exports.getSocketId = (username, usersGroups) => {
    return usersGroups[username]?.socket_id;
}

exports.saveDirectChatNotification = async ({from_user, to_user, connection_id, msg, type}) => {
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

exports.saveGroupChatNotification = async ({from_user, to_user, group_id, msg, type}) => {
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

exports.saveGroupNotification = async ({from_user, to_user, member, group, msg, type, link}) => {

    let notification = {
        group_id: group.id,
        group_name: group.name,
        from_user,
        msg,
        type,
        link,
    };

    if (member) {
        notification.to_user = member;
        notification.to_id = member.id
    }

    let savedNotification = await groupNotificationsController.saveNotification(notification);
    notification._id = savedNotification._id;
    return notification;
}


exports.joinToSocketRoom = async (io, groupName, user, usersGroups, h) => {
    let newUserSocketId = h.getSocketId(user.username, usersGroups);
    let newUserSocket = io.sockets.sockets.get(newUserSocketId);
    let groupSockets = await h.getGroupSockets(io, groupName);
    let gSockets = [...groupSockets];
    if (!gSockets.includes(newUserSocket)) {
        newUserSocket?.join(groupName);
        gSockets = await h.getGroupSockets(io, groupName);
    }

    return gSockets;
}

exports.addUserToGroup = (user, groupName, usersGroups) => {
    Object.values(usersGroups).map((gu, index) => {
        if (gu.username === user.username && !gu.page_groups.find(g => g === groupName)) {
            gu.page_groups.push(groupName);
        }
    })
    return usersGroups;
}

exports.removeUserFromGroup = (user, groupName, usersGroups) => {
    Object.values(usersGroups).map(gu => {
        if (gu.username === user.username && gu.page_groups.find(g => g === groupName)) {
            gu.page_groups = gu.page_groups.filter(g => g !== groupName);
        }
    })
    return usersGroups;
}