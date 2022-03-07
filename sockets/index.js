let usersGroups = [];

let usersController = require('../controllers/usersController');

let directChatController = require('../controllers/chat_mongo/directChatController');
let groupChatController = require('../controllers/chat_mongo/groupChatController');

let usersConnectionNotificationsController = require('../controllers/notifications/directChatNotificationsController');
let groupChatNotificationsController = require('../controllers/notifications/groupChatNotificationsController');
let notificationsController = require('../controllers/notificationsController');

const to = require('../helpers/getPromiseResult');

let h = require('./helpers');
let users = require('./users');
let directChat = require('./direct_chat');
let groupChat = require('./group_chat');


let socket = (io) => {
    io.on('connection', async (socket) => {
        console.log('new connection made');

        socket.on('newUser', (data) => {
            users.newUser(data, usersGroups, socket, io)
        })

        socket.on('getConnectedUsers', (data) => {
            users.getConnectedUsers(data, usersGroups, io);
        });

        socket.on('connectWithUser', async (data) => {
            await users.connectWithUser(data, usersGroups, io);
        });

        socket.on('cancelUsersConnection', async (data) => {
            await users.cancelUsersConnection(data, io);
        });

        socket.on('acceptConnection', async (data) => {
            await users.acceptConnection(data, io);
        });

        socket.on('declineConnection', async (data) => {
            await users.declineConnection(data, io);
        });

        socket.on('disconnectUsers', async (data) => {
            await users.disconnectUsers(data, io);
        });

        socket.on('blockUnblockUser', async (data) => {
            await users.blockUnblockUser(data, io);
        });

        socket.on('unreadLastMessages', async (data) => {
            await directChat.unreadLastMessages(data, io);
        });

        socket.on('setSeen', async (data) => {
            if (!data.group_name) {
                await directChat.setSeen(data, io);
            } else {
                await groupChat.setSeen(data, io);
            }
        });

        socket.on('setTyping', async (data) => {
            if (!data.group_name) {
                await directChat.setTyping(data, io);
            } else {
                await groupChat.setTyping(data, io);
            }

        });

        socket.on('sendMessage', async (data) => {
            if (!data.group_name) {
                await directChat.sendMessage(data, io);
            } else {
                await groupChat.sendMessage(data, io);
            }
        });

        socket.on('getConnectedGroupMembers', async ({group_name, username}) => {
            let onlineMembers = [];
            Object.values(usersGroups).map(uGroups => {
                if (uGroups.chat_groups.find(cg => cg === group_name)) {
                    onlineMembers.push(uGroups.username);
                }
            });
            let socketId = getSocketId(username);
            console.log(socketId, onlineMembers)
            // console.log(await io.in(group_name).allSockets());
            // console.log("online", getConnectedUserNames(usersGroups))
            io.to(group_name).emit('onGetOnlineMembers', {group: group_name, members: onlineMembers})
        });

        socket.on('setNewGroup', async ({username, ...data}) => {
            let userGroups = usersGroups[username]?.chat_groups || [];
            console.log(username, usersGroups, userGroups)
            console.log('set new group', data, userGroups)
            let newGroupName = data.name;

            if (!userGroups?.find(g => g === newGroupName)) {
                userGroups?.push(newGroupName);
                socket.join(newGroupName);
            }

            let groupUsernames = getGroupUsernames(newGroupName);
            io.to(newGroupName).emit('onGetOnlineMembers', {members: groupUsernames, group: newGroupName})
        });

        socket.on('removeGroup', async (data) => {
            let {initiator, group} = data;
            let inviterUsername = initiator.username;
            let groupName = group.name;
            console.log('remove group!!!', initiator.username)

            let userGroups = usersGroups[inviterUsername];

            // console.log(usersGroups)
            let filteredUserGroups = userGroups.chat_groups.filter(ug => ug !== groupName);
            usersGroups[inviterUsername].chat_groups = filteredUserGroups;
            // console.log(usersGroups)

            data.groupsUsers = await groupChatController.getGroupsMessages({
                return: true,
                user_id: initiator.id
            });
            console.log(data.groupsUsers)

            io.sockets.in(groupName).emit('removeGroupNotify', data);
            console.log(await io.in(groupName).allSockets());
            io.in(groupName).socketsLeave(groupName);
            console.log('sockets left the group!!!')
            console.log(await io.in(groupName).allSockets());
        });

        socket.on('inviteToNewGroup', async (data) => {

            console.log('invite to new group!!!');

            let {from_user, invited_members, group} = data;
            let inviterName = from_user.first_name + ' ' + from_user.last_name;
            let groupName = data.group.name;


            if (groupName) {
                await Promise.all(invited_members.map(async (member) => {
                    let username = member.username;
                    let invitedMemberSocketId = getSocketId(username);
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

                    let groupUsernames = getGroupUsernames(groupName);
                    console.log(usersGroups)
                    io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
                }))
            }
        });

        socket.on('joinGroup', async (data) => {
            let {user, group} = data;
            let groupName = group.name;

            let memberSocketId = getSocketId(user.username);
            let theSocket = io.sockets.sockets.get(memberSocketId);
            let groupSockets = await getGroupSockets(io, groupName);
            let gSockets = [...groupSockets];
            if (!gSockets.includes(theSocket)) {
                theSocket?.join(groupName);
                groupSockets = await getGroupSockets(io, groupName);
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

        })

        socket.on('acceptJoinGroup', async (data) => {
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

            let groupUsernames = getGroupUsernames(groupName);
            io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})


            // socket.broadcast.to(groupName).emit('acceptedJoinGroup', {
            //     ...data,
            //     ...notification
            // });
        });

        socket.on('declineJoinGroup', async (data) => {
            console.log('decline joining group!!!');

            let {user, group} = data;
            let socketId = getSocketId(user.username);
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
        });

        socket.on('confirmJoinGroup', async (data) => {
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

            let groupUsernames = getGroupUsernames(groupName);
            io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
        });

        socket.on('ignoreJoinGroup', async (data) => {
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

            let groupUsernames = getGroupUsernames(groupName);
            io.to(groupName).emit('onGetOnlineMembers', {members: groupUsernames, group: groupName})
        });


        socket.on('leaveGroup', async (data) => {
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
        });

        socket.on('removeFromGroup', async (data) => {
            let {initiator, member, group} = data;
            let groupName = group.name;
            console.log('remove from group!!!');

            Object.values(usersGroups).map(gu => {

                if (gu.username === member.username && gu.chat_groups.find(g => g === groupName)) {
                    gu.chat_groups = gu.chat_groups.filter(g => g !== groupName);
                }
            })

            let socketId = getSocketId(member.username); //socket.id
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
        });


        socket.on('forceDisconnect', async (user) => {
            console.log('force disconnect!!!');
            // console.log(usersGroups)
            delete usersGroups[user.username];
            // usersGroups = Object.values(usersGroups).filter(u => u.username !== user.username);
            let contacts = await usersController.getContacts({return: true, user_id: user.id});
            let groups = await groupChatController.getGroupsMessages({return: true, user_id: user.id});
            // console.log('GROUPS:', groups)

            contacts.map(contact => {
                // console.log('aaa', contact.username, getSocketId(contact.username))
                let theSocket = io.sockets.sockets.get(getSocketId(contact.username));
                theSocket?.emit('onLogout', user)
            })

            if (groups) {
                groups.map(group => {
                    io.sockets.in(group.name).emit('onLogout', user)
                })
            }

            socket.leave();
        });


        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    })


}


module.exports = {
    socket
};