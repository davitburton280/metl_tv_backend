let h = require('./helpers');
const to = require('../helpers/getPromiseResult');

let notificationsController = require('../controllers/notificationsController');
let groupsController = require('../controllers/groupsController');
let groupNotificationsController = require('../controllers/notifications/groupNotificationsController');

exports.setNewGroup = async ({username, ...data}, usersGroups, socket, io) => {
    let userGroups = usersGroups[username]?.page_groups || [];
    console.log(username, usersGroups, userGroups)
    console.log('set new page group', data, userGroups)
    let newGroupName = data.name;

    if (!userGroups?.find(g => g === newGroupName)) {
        userGroups?.push(newGroupName);
        socket.join(newGroupName);
    }

    let groupUsernames = h.getGroupUsernames(newGroupName, usersGroups);
    io.to(newGroupName).emit('onGetOnlineMembers', {members: groupUsernames, group: newGroupName})
}

exports.inviteToNewGroup = async (data, usersGroups, io) => {
    console.log('invite to new page group!!!');

    let {invited_members, group} = data;
    let groupName = group.name;

    if (groupName) {
        await Promise.all(invited_members.map(async (member) => {
            let username = member.username;
            let invitedMemberSocketId = h.getSocketId(username, usersGroups);

            let notification = await h.saveGroupNotification({
                ...data, ...{member},
                type: 'page_group_join_invitation'
            });

            io.to(invitedMemberSocketId).emit('inviteToPageGroupSent', {
                group_id: group.id,
                ...notification,
                group_details: group
            })

            let groupUsernames = h.getGroupUsernames(groupName, usersGroups);
            io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
        }))
    }
}

exports.acceptJoinPageGroup = async (data, usersGroups, socket, io) => {
    console.log('accept joining group!!!');

    let {from_user, group} = data;
    let groupName = group.name;

    await h.joinToSocketRoom(io, groupName, from_user, usersGroups, h);
    console.log(await h.getGroupSockets(io, groupName))

    let notification = await h.saveGroupNotification({
        ...data,
        type: 'accept_page_group_invitation'
    });

    await groupNotificationsController.removeNotification({return: true, id: data.notification_id});

    data.group = await groupsController.getGroupMembers({return: true, group_id: group.id});

    let groupUsernames = h.getGroupUsernames(groupName, usersGroups);
    io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})

    socket.broadcast.to(groupName).emit('acceptedJoinPageGroup', {
        rest: data,
        notification
    });
}

exports.declineJoinPageGroup = async (data, usersGroups, io) => {
    console.log('decline joining page group!!!');

    let {group} = data;
    data.group = await groupsController.getGroupMembers({return: true, group_id: group.id});

    let notification = await h.saveGroupNotification({
        ...data,
        type: 'decline_page_group_invitation'
    });

    await groupNotificationsController.removeNotification({return: true, id: data.notification_id});

    io.sockets.in(group.name).emit('getDeclinedJoinPageGroup', {
        ...data,
        notification,
    });
}

exports.joinGroup = async (data, usersGroups, io) => {
    let {from_user, group} = data;
    let groupName = group.name;

    await h.joinToSocketRoom(io, groupName, from_user, usersGroups, h);

    let notification = await h.saveGroupNotification({...data, type: 'join_page_group_invitation'});

    data.group = await groupsController.getGroupMembers({return: true, group_id: group.id});

    io.sockets.in(groupName).emit('getJoinGroup', {
        rest: data,
        notification
    });
}

exports.confirmJoinGroup = async (data, usersGroups, io) => {
    console.log('confirmed joining group!!!');

    let {group, member} = data;
    let groupName = group.name;

    h.addUserToGroup(member, groupName, 'page_groups', usersGroups);

    let notification = await h.saveGroupNotification({...data, type: 'confirm_group_invitation'});

    data.group = await groupsController.getGroupMembers({return: true, group_id: group.id});

    io.sockets.in(group.name).emit('confirmedJoinGroup', {
        rest: data,
        notification
    });

    let groupUsernames = h.getGroupUsernames(groupName, usersGroups);
    io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
}

exports.ignoreJoinGroup = async (data, usersGroups, io) => {
    console.log('ignored joining group!!!');

    let {group, member} = data;
    let groupName = group.name;

    let notification = await h.saveGroupNotification({
        ...data,
        type: 'ignore_group_invitation'
    });

    data.group = await groupsController.getGroupMembers({return: true, group_id: group.id});
    data.leftGroups = await groupsController.get({return: true, user_id: member.id});

    io.sockets.in(groupName).emit('ignoredJoinGroup', {
        rest: data,
        notification
    });

    let groupUsernames = h.getGroupUsernames(groupName, usersGroups);
    io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
}

exports.leavePageGroup = async (data, usersGroups, socket, io) => {
    console.log('leave page group!!!')
    let {from_user, group} = data;
    let groupName = group.name;

    h.removeUserFromGroup(from_user, groupName, 'page_groups', usersGroups)

    let groupMembers = await groupsController.getGroupMembers({return: true, group_id: group.id});
    data.group.group_members = groupMembers?.group_members;

    let notification = await h.saveGroupNotification({...data, type: 'left_page_group'});

    io.sockets.in(group.name).emit('leavePageGroupNotify', {
        ...data,
        ...notification,
    });

    socket.leave(groupName);
}


exports.removeFromPageGroup = async (data, usersGroups, socket, io) => {
    let {member, group} = data;
    let groupName = group.name;
    console.log('remove from page group!!!');

    h.removeUserFromGroup(member, groupName, 'page_groups', usersGroups);

    let socketId = h.getSocketId(member.username, usersGroups); //socket.id
    let theSocket = io.sockets.sockets.get(socketId);

    let notification = await h.saveGroupNotification({
        ...data,
        type: 'remove_from_page_group'
    });

    data.group = await groupsController.getGroupMembers({return: true, group_id: group.id});
    data.leftGroups = await groupsController.get({return: true, user_id: member.id});

    let currentUserNotifications = await notificationsController.get({return: true, user_id: member.id});

    socket.broadcast.to(groupName).emit('removeFromPageGroupNotify', {
        ...data,
        currentUserNotifications
    });
    io.to(socketId).emit('removeFromPageGroupNotify', {
        ...data,
        currentUserNotifications
    })

    theSocket?.leave(groupName);
}