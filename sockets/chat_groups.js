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
            let theSocket = io.sockets.sockets.get(invitedMemberSocketId);
            theSocket?.join(groupName);

            let notification = await h.saveGroupNotification({
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

exports.acceptJoinChatGroup = async (data, usersGroups, io) => {
    console.log('joining group!!!');

    let {from_user, group} = data;
    let groupName = group.name;

    // let socketId = getSocketId(user.username); //socket.id
    // let theSocket = io.sockets.sockets.get(socketId);
    // theSocket.join(groupName);

    // console.log(usersGroups)
    Object.values(usersGroups).map(gu => {
        // console.log('aaaa', gu, gu.chat_groups.find(g => g === groupName))
        if (gu.username === from_user.username && !gu.chat_groups.find(g => g === groupName)) {
            gu.chat_groups.push(groupName);
        }
    })


    let notification = {
        group_id: group.id,
        group_name: groupName,
        from_user: from_user,
        // to_user: member,
        // to_id: member.id,
        msg: data.msg,
        link: data.link,
        type: 'accept_chat_group_invitation'
    };
    // console.log(notification)

    let savedNotification = await groupChatNotificationsController.saveNotification(notification);

    notification._id = savedNotification._id;

    await groupChatNotificationsController.removeNotification({return: true, id: data.notification_id});

    data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});
    // console.log(await io.in(groupName).allSockets());
    console.log('accepted!!!', from_user.id, data.group)

    io.sockets.in(group.name).emit('acceptedJoinChatGroup', {
        rest: data,
        notification
    });

    let groupUsernames = h.getGroupUsernames(groupName, usersGroups);
    io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})


    // socket.broadcast.to(groupName).emit('acceptedJoinGroup', {
    //     ...data,
    //     ...notification
    // });
}

exports.declineJoinChatGroup = async (data, usersGroups, io) => {
    console.log('decline joining group!!!');

    let {group} = data;
    let socketId = h.getSocketId(user.username, usersGroups);
    data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});


    let notification = await h.saveGroupNotification({
        ...data,
        type: 'decline_chat_group_invitation'
    });

    await groupChatNotificationsController.removeNotification({return: true, id: data.notification_id});

    console.log(await io.in(group.name).allSockets());
    io.sockets.in(group.name).emit('getDeclinedJoinChatGroup', {
        ...data,
        ...notification,
    });
    // io.to(socketId).emit('getDeclinedJoinGroup', {
    //     ...data, initiator_id: user.id
    // })
}

exports.leaveChatGroup = async (data, usersGroups, socket, io) => {
    console.log('leave group!!!')
    let {from_user, group} = data;
    let groupName = group.name;

    Object.values(usersGroups).map(gu => {

        if (gu.username === from_user.username && gu.chat_groups.find(g => g === groupName)) {
            console.log(gu.chat_groups.filter(g => g !== groupName))
            gu.chat_groups = gu.chat_groups.filter(g => g !== groupName);
        }
    })
    console.log(usersGroups)
    console.log(await io.in(groupName).allSockets());


    let groupMembers = await groupChatController.getGroupMembers({return: true, group_id: group.id});
    data.group.chat_group_members = groupMembers?.chat_group_members;

    let notification = {
        group_id: group.id,
        from_user,
        // to_user: member,
        // to_id: member.id,
        msg: `<strong>${from_user.first_name + ' ' + from_user.last_name}</strong> has left the <strong>${group.name}</strong> group`,
        type: 'left_chat_group'
    };

    let savedNotification = await groupChatNotificationsController.saveNotification(notification);

    notification._id = savedNotification._id;

    console.log(await io.in(groupName).allSockets());
    io.sockets.in(group.name).emit('leaveChatGroupNotify', {
        ...data,
        ...notification,
    });

    socket.leave(groupName);
}

exports.removeFromChatGroup = async (data, usersGroups, socket, io) => {
    let {initiator, member, group} = data;
    let groupName = group.name;
    console.log('remove from group!!!');

    Object.values(usersGroups).map(gu => {

        if (gu.username === member.username && gu.chat_groups.find(g => g === groupName)) {
            gu.chat_groups = gu.chat_groups.filter(g => g !== groupName);
        }
    })

    let socketId = h.getSocketId(member.username, usersGroups); //socket.id
    let theSocket = io.sockets.sockets.get(socketId);
    // console.log(await io.in(groupName).allSockets());


    data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});
    data.leftGroups = await groupChatController.getGroupsMessages({return: true, user_id: member.id});

    let notification = {
        group_id: group.id,
        from_user: initiator,
        // to_user: member,
        // to_id: member.id,
        msg: `<strong>${initiator.first_name + ' ' + initiator.last_name}</strong> removed  <strong>${member.first_name + ' ' + member.last_name}</strong>
                       from <strong>${groupName}</strong> group`,
        type: 'remove_from_chat_group'
    };

    let savedNotification = await groupChatNotificationsController.saveNotification(notification);

    notification._id = savedNotification._id;

    let currentUserNotifications = await notificationsController.get({return: true, user_id: member.id});


    console.log(currentUserNotifications);
    socket.broadcast.to(groupName).emit('removeFromChatGroupNotify', {
        ...data,
        currentUserNotifications
    });

    theSocket.leave(groupName);
}