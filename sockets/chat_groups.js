let h = require('./helpers');
const to = require('../helpers/getPromiseResult');

let groupChatController = require('../controllers/chat_mongo/groupChatController');
let groupChatNotificationsController = require('../controllers/notifications/groupChatNotificationsController');
let notificationsController = require('../controllers/notificationsController');

exports.inviteToNewGroup = async (data, usersGroups, io) => {
    console.log('invite to new group!!!');

    let {invited_members, group} = data;
    let groupName = group.name;

    if (groupName) {
        await Promise.all(invited_members.map(async (member) => {
            let username = member.username;

            let invitedMemberSocketId = h.getSocketId(username, usersGroups);


            let notification = await h.saveGroupChatNotification({
                ...data, ...{member},
                type: 'chat_group_join_invitation'
            });

            io.to(invitedMemberSocketId).emit('inviteToChatGroupSent', {
                group_id: group.id,
                ...notification,
                group_details: group
            })

            let groupUsernames = h.getGroupUsernames(groupName, usersGroups);
            io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
        }))
    }
}

exports.acceptJoinToChatGroup = async (data, usersGroups, io) => {
    console.log('accept joining group!!!');

    let {from_user, group} = data;
    let groupName = group.name;

    await h.joinToSocketRoom(io, groupName, from_user, usersGroups, h);

    h.addUserToGroup(from_user, groupName, 'chat_groups', usersGroups)

    let notification = await h.saveGroupChatNotification({
        ...data,
        type: 'accept_chat_group_invitation'
    });

    await groupChatNotificationsController.removeNotification({return: true, id: data.notification_id});

    data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});

    io.sockets.in(group.name).emit('acceptedJoinChatGroup', {
        rest: data,
        notification
    });

    let groupUsernames = h.getGroupUsernames(groupName, usersGroups);
    io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
}

exports.declineJoinChatGroup = async (data, usersGroups, io) => {
    console.log('decline joining group!!!');

    let {group} = data;
    data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});


    let notification = await h.saveGroupChatNotification({
        ...data,
        type: 'decline_chat_group_invitation'
    });

    await groupChatNotificationsController.removeNotification({return: true, id: data.notification_id});

    io.sockets.in(group.name).emit('getDeclinedJoinChatGroup', {
        ...data,
        notification,
    });
}

exports.leaveChatGroup = async (data, usersGroups, socket, io) => {
    console.log('leave group!!!')
    let {from_user, group} = data;
    let groupName = group.name;

    h.removeUserFromGroup(from_user, groupName, 'chat_groups', usersGroups)

    let groupMembers = await groupChatController.getGroupMembers({return: true, group_id: group.id});
    data.group.chat_group_members = groupMembers?.chat_group_members;

    let notification = await h.saveGroupChatNotification({
        ...data,
        type: 'left_chat_group'
    });

    io.sockets.in(group.name).emit('leaveChatGroupNotify', {
        ...data,
        ...notification,
    });

    socket.leave(groupName);
}

exports.removeFromChatGroup = async (data, usersGroups, socket, io) => {
    let {from_user, member, group} = data;
    let groupName = group.name;
    console.log('remove from group!!!');

    h.removeUserFromGroup(from_user, groupName, 'chat_groups', usersGroups)

    let socketId = h.getSocketId(member.username, usersGroups); //socket.id
    let theSocket = io.sockets.sockets.get(socketId);
    // console.log(await io.in(groupName).allSockets());


    data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});
    data.leftGroups = await groupChatController.getGroupsMessages({return: true, user_id: member.id});

    let notification = await h.saveGroupChatNotification({
        ...data,
        type: 'remove_from_chat_group'
    });

    let currentUserNotifications = await notificationsController.get({return: true, user_id: member.id});


    io.sockets.in(groupName).emit('removeFromChatGroupNotify', {
        ...data,
        currentUserNotifications,
        notification
    });

    let groupUsernames = h.getGroupUsernames(groupName, usersGroups);
    io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})

    theSocket?.leave(groupName);
}