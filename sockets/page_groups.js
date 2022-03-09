let h = require('./helpers');
const to = require('../helpers/getPromiseResult');

let notificationsController = require('../controllers/notificationsController');
let groupsController = require('../controllers/groupsController');

exports.inviteToNewGroup = async (data, usersGroups, io) => {
    console.log('invite to new page group!!!', data);

    let {invited_members, group} = data;
    let groupName = group.name;

    if (groupName) {
        await Promise.all(invited_members.map(async (member) => {
            let username = member.username;
            let invitedMemberSocketId = h.getSocketId(username, usersGroups);

            let notification = await h.saveGroupNotification({
                ...data, ...{member},
                type: 'page_group_join_request'
            });

            io.to(invitedMemberSocketId).emit('inviteToGroupSent', {
                group_id: group.id,
                ...notification,
                group_details: group
            })

            let groupUsernames = h.getGroupUsernames(groupName, usersGroups);
            io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
        }))
    }
}

exports.joinGroup = async (data, usersGroups, io) => {
    let {from_user, group} = data;
    let groupName = group.name;

    let newUserSocketId = h.getSocketId(from_user.username, usersGroups);
    let theSocket = io.sockets.sockets.get(newUserSocketId);
    let groupSockets = await h.getGroupSockets(io, groupName);
    let gSockets = [...groupSockets];
    if (!gSockets.includes(theSocket)) {
        theSocket?.join(groupName);
        groupSockets = await h.getGroupSockets(io, groupName);
        console.log('joined', groupSockets)
        console.log('groupName:', groupName, usersGroups)
    }

    let notification = await h.saveGroupNotification({
        ...data,
        type: 'join_group_invitation'
    });

    data.group = await groupsController.getGroupMembers({return: true, group_id: group.id});

    io.sockets.in(groupName).emit('getJoinGroup', {
        rest: data,
        notification
    });
}

exports.confirmJoinGroup = async (data, usersGroups, io) => {
    console.log('confirmed joining group!!!');

    let {from_user, group, member} = data;
    let groupName = group.name;

    Object.values(usersGroups).map((gu, index) => {
        if (gu.username === member.username && !gu.page_groups.find(g => g === groupName)) {
            gu.page_groups.push(groupName);

        }
    })


    let notification = await h.saveGroupNotification({
        ...data,
        type: 'confirm_group_invitation'
    });

    data.group = await groupsController.getGroupMembers({return: true, group_id: group.id});


    console.log('confirmed!!!')
    console.log(await io.in(group.name).allSockets())
    // console.log(usersGroups)
    io.sockets.in(group.name).emit('confirmedJoinGroup', {
        rest: data,
        notification
    });


    let groupUsernames = h.getGroupUsernames(groupName, usersGroups);
    io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
}