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

module.exports = {
    getGroupSockets,
    getGroupUsernames,
    getConnectedUserNames,
    getSocketId,
    saveDirectChatNotification
}