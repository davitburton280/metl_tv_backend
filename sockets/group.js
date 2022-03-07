let h = require('./helpers');
const to = require('../helpers/getPromiseResult');

let groupChatController = require('../controllers/chat_mongo/groupChatController');
let groupChatNotificationsController = require('../controllers/notifications/groupChatNotificationsController');
let notificationsController = require('../controllers/notificationsController');

exports.inviteToNewGroup = async (data, usersGroups, io) => {
    console.log('invite to new group!!!');

    let {from_user, invited_members, group} = data;
    let inviterName = from_user.first_name + ' ' + from_user.last_name;
    let groupName = data.group.name;

    if (groupName) {
        await Promise.all(invited_members.map(async (member) => {
            let username = member.username;
            let invitedMemberSocketId = h.getSocketId(username);
            let theSocket = io.sockets.sockets.get(invitedMemberSocketId);
            theSocket?.join(groupName);

            let notification = {
                group_id: group.id,
                group_name: groupName,
                from_user,
                to_user: member,
                to_id: member.id,
                msg: data.msg,
                type: 'group_join_invitation'
            };

            let savedNotification = await groupChatNotificationsController.saveNotification(notification);

            notification._id = savedNotification._id;

            // let userGroups = await groupChatController.getGroupsMessages({return: true, user_id: data.to_user_id});
            console.log(username);
            console.log(invitedMemberSocketId)

            io.to(invitedMemberSocketId).emit('inviteToGroupSent', {
                group_id: group.id,
                ...notification,
                group_details: group
            })

            let groupUsernames = h.getGroupUsernames(groupName);
            console.log(usersGroups)
            io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
        }))
    }
}

exports.joinGroup = async (data, usersGroups, io) => {
    let {user, group} = data;
    let groupName = group.name;

    let memberSocketId = h.getSocketId(user.username);
    let theSocket = io.sockets.sockets.get(memberSocketId);
    let groupSockets = await h.getGroupSockets(io, groupName);
    let gSockets = [...groupSockets];
    if (!gSockets.includes(theSocket)) {
        theSocket?.join(groupName);
        groupSockets = await h.getGroupSockets(io, groupName);
    }

    data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});

    let notification = {
        group_id: group.id,
        group_name: groupName,
        from_user: user,
        msg: data.msg,
        link: data.link,
        type: 'join_group_invitation'
    };

    let savedNotification = await groupChatNotificationsController.saveNotification(notification);

    notification._id = savedNotification._id;

    io.sockets.in(groupName).emit('getJoinGroup', {
        rest: data,
        notification
    });
}

exports.acceptJoinGroup = async (data, usersGroups, io) => {
    console.log('joining group!!!');

    let {user, group} = data;
    let groupName = group.name;

    // let socketId = getSocketId(user.username); //socket.id
    // let theSocket = io.sockets.sockets.get(socketId);
    // theSocket.join(groupName);

    // console.log(usersGroups)
    Object.values(usersGroups).map(gu => {
        // console.log('aaaa', gu, gu.chat_groups.find(g => g === groupName))
        if (gu.username === user.username && !gu.chat_groups.find(g => g === groupName)) {
            gu.chat_groups.push(groupName);
        }
    })


    let notification = {
        group_id: group.id,
        group_name: groupName,
        from_user: user,
        // to_user: member,
        // to_id: member.id,
        msg: data.msg,
        link: data.link,
        type: 'accept_group_invitation'
    };
    // console.log(notification)

    let savedNotification = await groupChatNotificationsController.saveNotification(notification);

    notification._id = savedNotification._id;

    await groupChatNotificationsController.removeNotification({return: true, id: data.notification_id});

    data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});
    // console.log(await io.in(groupName).allSockets());
    console.log('accepted!!!', user.id, data.group)

    io.sockets.in(group.name).emit('acceptedJoinGroup', {
        rest: data,
        notification
    });

    let groupUsernames = h.getGroupUsernames(groupName);
    io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})


    // socket.broadcast.to(groupName).emit('acceptedJoinGroup', {
    //     ...data,
    //     ...notification
    // });
}

exports.declineJoinGroup = async (data, usersGroups, io) => {
    console.log('decline joining group!!!');

    let {user, group} = data;
    let socketId = h.getSocketId(user.username);
    data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});

    let notification = {
        group_id: group.id,
        from_user: user,
        // to_user: member,
        // to_id: member.id,
        msg: `<strong>${user.first_name + ' ' + user.last_name}</strong> has declined joining the <strong>${group.name}</strong> group`,
        type: 'decline_group_invitation'
    };

    let savedNotification = await groupChatNotificationsController.saveNotification(notification);

    notification._id = savedNotification._id;

    await groupChatNotificationsController.removeNotification({return: true, id: data.notification_id});

    console.log(await io.in(group.name).allSockets());
    io.sockets.in(group.name).emit('getDeclinedJoinGroup', {
        ...data,
        ...notification,
    });
    // io.to(socketId).emit('getDeclinedJoinGroup', {
    //     ...data, initiator_id: user.id
    // })
}

exports.confirmJoinGroup = async (data, usersGroups, io) => {
    console.log('confirmed joining group!!!');

    let {user, group, member} = data;
    let groupName = group.name;

    // // console.log(usersGroups)
    // Object.values(usersGroups).map(gu => {
    //     if (gu.username === user.username && !gu.chat_groups.find(g => g === groupName)) {
    //         gu.chat_groups.push(groupName);
    //     }
    // })

    let notification = {
        group_id: group.id,
        group_name: groupName,
        from_user: user,
        // to_user: member,
        // to_id: member.id,
        msg: data.msg,
        link: data.link,
        type: 'confirm_group_invitation'
    };
    console.log(notification)

    let savedNotification = await groupChatNotificationsController.saveNotification(notification);

    notification._id = savedNotification._id;

    data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});


    console.log('confirmed!!!')
    console.log(await io.in(group.name).allSockets())
    console.log(usersGroups)
    io.sockets.in(group.name).emit('confirmedJoinGroup', {
        rest: data,
        notification
    });

    let groupUsernames = h.getGroupUsernames(groupName);
    io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
}

exports.ignoreJoinGroup = async (data, usersGroups, io) => {
    console.log('ignored joining group!!!');

    let {user, group, member} = data;
    let groupName = group.name;

    let notification = {
        group_id: group.id,
        group_name: groupName,
        from_user: user,
        // to_user: member,
        // to_id: member.id,
        msg: data.msg,
        link: data.link,
        type: 'ignore_group_invitation'
    };

    let savedNotification = await groupChatNotificationsController.saveNotification(notification);

    notification._id = savedNotification._id;

    data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});
    data.leftGroups = await groupChatController.getGroupsMessages({return: true, user_id: member.id});
    console.log(await io.in(groupName).allSockets());
    console.log('ignored!!!')
    console.log(io.in(group.name).allSockets())
    console.log(usersGroups)
    io.sockets.in(group.name).emit('ignoredJoinGroup', {
        rest: data,
        notification
    });

    let groupUsernames = h.getGroupUsernames(groupName);
    io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
}

exports.leaveGroup = async (data, usersGroups, socket, io) =>{
    console.log('leave group!!!')
    let {user, group} = data;
    let groupName = group.name;

    Object.values(usersGroups).map(gu => {

        if (gu.username === user.username && gu.chat_groups.find(g => g === groupName)) {
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
        from_user: user,
        // to_user: member,
        // to_id: member.id,
        msg: `<strong>${user.first_name + ' ' + user.last_name}</strong> has left the <strong>${group.name}</strong> group`,
        type: 'left_group'
    };

    let savedNotification = await groupChatNotificationsController.saveNotification(notification);

    notification._id = savedNotification._id;

    console.log(await io.in(groupName).allSockets());
    io.sockets.in(group.name).emit('leaveGroupNotify', {
        ...data,
        ...notification,
    });

    socket.leave(groupName);
}

exports.removeFromGroup = async (data,usersGroups, socket,io) =>{
    let {initiator, member, group} = data;
    let groupName = group.name;
    console.log('remove from group!!!');

    Object.values(usersGroups).map(gu => {

        if (gu.username === member.username && gu.chat_groups.find(g => g === groupName)) {
            gu.chat_groups = gu.chat_groups.filter(g => g !== groupName);
        }
    })

    let socketId = h.getSocketId(member.username); //socket.id
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
        type: 'remove_from_group'
    };

    let savedNotification = await groupChatNotificationsController.saveNotification(notification);

    notification._id = savedNotification._id;

    let currentUserNotifications = await notificationsController.get({return: true, user_id: member.id});


    console.log(currentUserNotifications);
    socket.broadcast.to(groupName).emit('removeFromGroupNotify', {
        ...data,
        currentUserNotifications
    });

    theSocket.leave(groupName);
}