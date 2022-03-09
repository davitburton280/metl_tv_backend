let h = require('./helpers');
const to = require('../helpers/getPromiseResult');

let notificationsController = require('../controllers/notificationsController');

exports.inviteToNewGroup = async (data, usersGroups, io) => {
    console.log('invite to new page group!!!', data);

    let {from_user, invited_members, group} = data;
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