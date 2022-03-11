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

exports.saveGroupChatNotification = async ({from_user, member, group, msg, type}) => {

    let notification = {
        from_user,
        group_id: group.id,
        group_name: group.name,
        read: [],
        read_at: '',
        type,
        msg: msg
    };

    if (member) {
        notification.to_user = member;
        notification.to_id = member.id
    }

    return await groupChatNotificationsController.saveNotification(notification);
}

exports.saveGroupNotification = async ({from_user, member, group, msg, type, link}) => {

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

exports.addUserToGroup = (user, groupName, groupTypeKey, usersGroups) => {
    Object.values(usersGroups).map((gu, index) => {
        let group = gu[groupTypeKey];
        if (gu.username === user.username && !group.find(g => g === groupName)) {
            group.push(groupName);
        }
    })
    return usersGroups;
}

exports.removeUserFromGroup = (user, groupName, groupTypeKey, usersGroups) => {
    Object.values(usersGroups).map(gu => {
        let group = gu[groupTypeKey];
        if (gu.username === user.username && group.find(g => g === groupName)) {
            gu[groupTypeKey] = group.filter(g => g !== groupName);
        }
    })
    return usersGroups;
}