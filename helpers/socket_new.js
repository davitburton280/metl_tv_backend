let usersGroups = [];

let usersController = require('../controllers/usersController');

let directChatController = require('../controllers/chat_mongo/directChatController');
let groupChatController = require('../controllers/chat_mongo/groupChatController');

let usersConnectionNotificationsController = require('../controllers/notifications/directChatNotificationsController');
let groupChatNotificationsController = require('../controllers/notifications/groupChatNotificationsController');

const to = require('../helpers/getPromiseResult');


getGroupSockets = async (io, group) => {
    return await io.in(group).allSockets();
}

getConnectedUserNames = (usersGroups) => {
    return Object.keys(usersGroups);
}

getSocketId = (username) => {
    return usersGroups[username]?.socket_id;
}

// getUserGroupsByUsername = (username) => {
//     return usersGroups[username];
// }


let socket = (io) => {
    io.on('connection', async (socket) => {
        console.log('new connection made');

        socket.on('newUser', async ({username, chat_groups}) => {
            console.log("USERNAME!!!!", username)
            usersGroups[username] = {username, socket_id: socket.id, chat_groups};
            chat_groups.map(group => {
                socket.join(group);
            })
            io.emit('onGetOnlineUsers', getConnectedUserNames(usersGroups))
            console.log('USERS CONNECTED!!!')
            console.log(usersGroups)
            // console.log(await getGroupSockets(io, chat_groups[0]))
        })

        socket.on('getConnectedUsers', ({username}) => {
            let socketId = getSocketId(username);
            // console.log("online", getConnectedUserNames(usersGroups))
            io.to(socketId).emit('onGetOnlineUsers', getConnectedUserNames(usersGroups))
        });

        socket.on('connectWithUser', async (data) => {
            let {authUser, channelUser} = data;

            let channelUserSocketId = getSocketId(channelUser.username);
            let authUserSocketId = getSocketId(authUser.username);

            let connection = await to(usersController.createUsersConnection(data));

            let notification = {
                from_user: authUser,
                to_user: channelUser,
                connection_id: connection?.id,
                read: false,
                read_at: '',
                type: 'users_connection_request',
                msg: `<strong>${authUser.first_name + ' ' + authUser.last_name}</strong> has sent a connection request to you`
            };

            await usersConnectionNotificationsController.saveNotification(notification);

            // console.log('connect!!!', username, socketId)
            // console.log('users!!!', usersGroups, channelUserSocketId, usersGroups[authUserSocketId])
            console.log('connection!!!', connection)

            console.log("connection request from " + authUser.username + '=>', `${authUserSocketId}`, ' to ' + channelUser.username + '=>' + `${channelUserSocketId}`)
            io.to(channelUserSocketId).emit('getConnectWithUser', {notification});
            io.to(authUserSocketId).emit('getConnectWithUser', {connection, notification})
        });

        socket.on('cancelUsersConnection', async ({authUser, channelUser, connection_id}) => {
            let authUserSocketId = getSocketId(authUser.username);
            let channelUserSocketId = getSocketId(channelUser.username);

            let connection = await to(usersController.cancelUsersConnection(connection_id));

            io.to(channelUserSocketId).emit('cancelledUsersConnection', connection)
            io.to(authUserSocketId).emit('cancelledUsersConnection', connection)
        });

        socket.on('acceptConnection', async (data) => {

            let {from_user, to_user} = data;
            let toUserSocketId = getSocketId(data.to_user.username);
            let fromUserSocketId = getSocketId(from_user.username);


            let confirmedConnection = await usersController.confirmConnection(data);
            let fromUserMessages = await directChatController.getDirectMessages({
                return: true,
                user_id: from_user.id
            });
            let toUserMessages = await directChatController.getDirectMessages({return: true, user_id: to_user.id});

            let notification = {
                from_user, to_user,
                connection_id: data.connection_id,
                read: false,
                read_at: '',
                type: 'accept_connection_request',
                msg: `<strong>${from_user.first_name + ' ' + from_user.last_name}</strong> has accepted your connection request`
            };

            await usersConnectionNotificationsController.removeNotification({return: true, id: data.notification_id});

            let n = await usersConnectionNotificationsController.saveNotification(notification);

            console.log('accept from ' + from_user.username + '=>' + fromUserSocketId, to_user.username + '=>', toUserSocketId)

            io.to(fromUserSocketId).emit('acceptedConnection', {
                ...notification,
                users_messages: fromUserMessages
            });
            io.to(toUserSocketId).emit('acceptedConnection', {
                ...notification, ...JSON.parse(JSON.stringify(n)),
                users_messages: toUserMessages
            })
        });

        socket.on('declineConnection', async (data) => {

            let {from_user, to_user} = data;
            let toUserSocketId = getSocketId(to_user.username);

            await usersController.declineConnection(data);

            let notification = {
                from_user, to_user,
                connection_id: data.connection_id,
                read: false,
                read_at: '',
                type: 'decline_connection_request',
                msg: `<strong>${from_user.first_name + ' ' + from_user.last_name}</strong> has declined your connection request`
            };

            await usersConnectionNotificationsController.removeNotification({return: true, id: data.notification_id});


            let n = await usersConnectionNotificationsController.saveNotification(notification);

            io.to(toUserSocketId).emit('declinedConnection', {
                ...notification, from_user,
                to_user,
                notification_type: {name: 'declined_connection_request'}
            })
        });

        socket.on('disconnectUsers', async (data) => {

            let {from_id, to_id, from_username, to_username} = data;
            let fromUserSocketId = getSocketId(from_username);
            let toUserSocketId = getSocketId(to_username);


            await to(usersController.disconnectUsers(data));
            let toUserMessages = await directChatController.getDirectMessages({return: true, user_id: to_id});
            let fromUserMessages = await directChatController.getDirectMessages({return: true, user_id: from_id});

            let notificationData = {
                connection_id: data.connection_id,
                initiator_id: from_id,
                receiver_id: to_id,
                msg: data.msg,
            };

            let n = await usersConnectionNotificationsController.saveNotification({
                ...notificationData,
                type: 'break_connection'
            });

            console.log('disconnect from ' + from_username + '=>' + fromUserSocketId, to_username + '=>', toUserSocketId)
            console.log(toUserMessages, toUserSocketId, fromUserSocketId, fromUserMessages)
            io.to(toUserSocketId).emit('getDisconnectUsers', {
                ...notificationData, ...JSON.parse(JSON.stringify(n)),
                users_messages: toUserMessages
            });

            io.to(fromUserSocketId).emit('getDisconnectUsers', {
                ...notificationData, ...JSON.parse(JSON.stringify(n)),
                users_messages: fromUserMessages
            });
        });

        socket.on('blockUnblockUser', async (data) => {

            let {from_id, to_id, from_username, contact_username} = data;
            let fromUserSocketId = getSocketId(from_username);
            let toUserSocketId = getSocketId(contact_username);

            console.log('block/unblock user!!!', contact_username, toUserSocketId)
            // console.log(data)

            let fromUserMessages = await directChatController.getDirectMessages({return: true, user_id: from_id});
            let toUserMessages = await directChatController.getDirectMessages({return: true, user_id: to_id});
            // console.log(fromUserMessages, toUserMessages)

            let notificationData = {
                connection_id: data.connection_id,
                initiator_id: data.from_id,
                receiver_id: data.to_id,
                msg: data.msg,
            };


            let n = await usersConnectionNotificationsController.saveNotification({
                ...notificationData,
                type: 'block_connection'
            });
            // console.log(JSON.parse(JSON.stringify(n))
            io.to(toUserSocketId).emit('getBlockUnblockUser', {
                ...notificationData, ...JSON.parse(JSON.stringify(n)),
                users_messages: toUserMessages
            });
            io.to(fromUserSocketId).emit('getBlockUnblockUser', {
                ...notificationData,
                users_messages: fromUserMessages
            })
        });

        socket.on('unreadLastMessages', async (data) => {
            console.log('unread messages!!!')
            let {from_username, to_username} = data;
            if (!data.group) {

                let toUserSocketId = getSocketId(to_username);
                let fromUserSocketId = getSocketId(from_username);

                await directChatController.unreadMessages(data);
                data.direct_messages = await directChatController.getConnectionMessages(
                    {return: true, connection_id: data.connection_id}
                );

                console.log(toUserSocketId, fromUserSocketId)
                io.to(toUserSocketId).emit('getSeen', data)
                io.to(fromUserSocketId).emit('getSeen', data)

            }
        });

        socket.on('setSeen', async (data) => {
            console.log('set seen', data)

            let {from_username, to_username, connection_id, group_name} = data;

            if (!group_name) {
                console.log('direct seen!!!')
                let fromUserSocketId = getSocketId(from_username);
                let toUserSocketId = getSocketId(to_username);

                await directChatController.updateSeen(data);
                data.direct_messages = await directChatController.getConnectionMessages(
                    {return: true, connection_id}
                );
                io.to(toUserSocketId).emit('getSeen', data)
                io.to(fromUserSocketId).emit('getSeen', data)
            } else {
                console.log('group seen!!!', group_name)
                await to(groupChatController.updateSeen(data));
                data.group_messages = await groupChatController.getGroupMessages(
                    {return: true, group_id: data.group_id}
                );
                io.sockets.in(group_name).emit('getSeen', data)
            }

        });

        socket.on('setTyping', async (data) => {

            let {from_username, to_username, group_name} = data;

            if (!group_name) {

                let fromUserSocketId = getSocketId(from_username);
                let toUserSocketId = getSocketId(to_username);

                // console.log('typing', to_username + '=>' + toUserSocketId, fromUserSocketId, data.message)
                io.to(toUserSocketId).emit('getTyping', data)
                io.to(fromUserSocketId).emit('getTyping', data)
            } else {
                // console.log('typing', groupsUsers)
                // console.log(await io.in(group_name).allSockets());
                // io.to(group_name).emit('getTyping', data)
                io.sockets.in(group_name).emit('getTyping', data)
            }
        });

        socket.on('sendMessage', async (data) => {

            let {from_username, to_username, group_name, group_id} = data;
            // console.log(data)
            if (!group_id) {

                let fromUserSocketId = getSocketId(from_username);
                let toUserSocketId = getSocketId(to_username);

                data.direct_messages = await directChatController.saveDirectMessage(data)
                console.log('DIRECT MESSAGE!!!', toUserSocketId, fromUserSocketId)
                io.to(toUserSocketId).emit('newMessage', data)
                io.to(fromUserSocketId).emit('newMessage', data)

            } else {
                data.group_messages = await groupChatController.saveGroupMessage(data);
                console.log('GROUP MESSAGE!!!', group_name)
                io.to(group_name).emit('newMessage', data)
            }
        });

        socket.on('setNewGroup', async ({username, ...data}) => {
            console.log('set new group', data)
            let userGroups = usersGroups[username];
            // console.log(userGroups.chat_groups.find(g => g === data.name))
            if (!userGroups.chat_groups.find(g => g === data.name)) {
                userGroups.chat_groups.push(data.name);
            }
            socket.join(data.name);

            console.log(userGroups, usersGroups)
            data.groupsUsers = await groupChatController.getGroupsMessages({return: true, user_id: data.creator_id});
            io.to(data.name).emit('chatNotification', {...data, group: data.name})
        });

        socket.on('removeGroup', async (data) => {
            let {initiator, group} = data;
            console.log('remove group!!!', initiator.username)

            let userGroups = usersGroups[initiator.username];

            // console.log(usersGroups)
            let filteredUserGroups = userGroups.chat_groups.filter(u => u !== group.name);
            usersGroups[initiator.username].chat_groups = filteredUserGroups;
            // console.log(usersGroups)

            data.groupsUsers = await groupChatController.getGroupsMessages({return: true, user_id: data.initiator.id});


            io.sockets.in(group.name).emit('removeGroupNotify', data);
            console.log(await io.in(group.name).allSockets());
            io.in(group).socketsLeave(group.name);
            console.log('sockets leaved the group!!!')
            console.log(await io.in(group.name).allSockets());
        });

        socket.on('inviteToNewGroup', async (data) => {

            console.log('invite to new group!!!');

            let {inviter, invited_members, group} = data;
            let inviterName = inviter.first_name + ' ' + inviter.last_name;
            let groupName = data.group.name;


            if (groupName) {
                await Promise.all(invited_members.map(async (member) => {
                    let username = member.username;
                    let invitedMemberSocketId = getSocketId(username);
                    let theSocket = io.sockets.sockets.get(invitedMemberSocketId);
                    theSocket?.join(groupName);

                    let notificationData = {
                        group_id: group.id,
                        from_id: inviter.id,
                        from_avatar: inviter.avatar,
                        from_first_name: inviter.first_name,
                        from_last_name: inviter.last_name,
                        to_id: member.id,
                        msg: `<strong>${inviterName}</strong> has sent an invitation to join the <strong>${groupName}</strong> group`,
                    };

                    let n = await groupChatNotificationsController.saveNotification({
                        ...notificationData,
                        type: 'group_join_invitation'
                    });

                    // let userGroups = await groupChatController.getGroupsMessages({return: true, user_id: data.to_user_id});
                    console.log(username);
                    console.log(invitedMemberSocketId)

                    io.to(invitedMemberSocketId).emit('inviteToGroupSent', {
                        group_id: group.id,
                        ...notificationData,
                        ...n,
                        group_details: group
                    })
                }))
            }
        });

        socket.on('acceptJoinGroup', async (data) => {
            console.log('joining group!!!');

            let {user, group} = data;
            let groupName = group.name;

            // let socketId = getSocketId(user.username); //socket.id
            // let theSocket = io.sockets.sockets.get(socketId);
            // theSocket.join(groupName);

            // console.log(usersGroups)
            Object.values(usersGroups).map(gu => {
                console.log('aaaa', gu, gu.chat_groups.find(g => g === groupName))
                if (gu.username === user.username && !gu.chat_groups.find(g => g === groupName)) {
                    gu.chat_groups.push(groupName);
                }
            })

            console.log(usersGroups)

            let notificationData = {
                group_id: group.id,
                initiator_id: user.id,
                msg: `<strong>${user.first_name + ' ' + user.last_name}</strong> has accepted to join the <strong>${group.name}</strong> group`,
            };

            let n = await groupChatNotificationsController.saveNotification({
                ...notificationData,
                type: 'accept_group_invitation'
            });

            data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});
            console.log(await io.in(groupName).allSockets());

            io.sockets.in(groupName).emit('acceptedJoinGroup', {
                ...data,
                ...notificationData,
                ...n,
            });
        });

        socket.on('declineJoinGroup', async (data) => {
            console.log('decline joining group!!!');

            let {user, group} = data;
            let socketId = getSocketId(user.username);
            data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});

            let notificationData = {
                group_id: group.id,
                initiator_id: user.id,
                msg: `<strong>${user.first_name + ' ' + user.last_name}</strong> has declined joining the <strong>${group.name}</strong> group`,
            };

            let n = await groupChatNotificationsController.saveNotification({
                ...notificationData,
                type: 'decline_group_invitation'
            });
            console.log(await io.in(group.name).allSockets());
            io.sockets.in(group.name).emit('getDeclinedJoinGroup', {
                ...data,
                ...notificationData,
                ...n,
            });
            io.to(socketId).emit('getDeclinedJoinGroup', {
                ...data, initiator_id: user.id
            })
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
            socket.leave(groupName);


            data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});

            let notificationData = {
                group_id: group.id,
                initiator_id: user.id,
                msg: `<strong>${user.first_name + ' ' + user.last_name}</strong> has left the <strong>${group.name}</strong> group`,
            };

            let n = await groupChatNotificationsController.saveNotification({
                ...notificationData,
                type: 'left_group'
            });

            console.log(await io.in(groupName).allSockets());
            io.sockets.in(group.name).emit('leaveGroupNotify', {
                ...data,
                ...notificationData,
                ...n,
            });
        });

        socket.on('removeFromGroup', async (data) => {
            let {initiator, member, group} = data;
            let groupName = group.name;
            console.log('remove from group!!!');

            Object.values(usersGroups).map(gu => {

                if (gu.username === member.username && gu.chat_groups.find(g => g === groupName)) {
                    console.log(gu.chat_groups.filter(g => g !== groupName))
                    gu.chat_groups = gu.chat_groups.filter(g => g !== groupName);
                }
            })

            let socketId = getSocketId(member.username); //socket.id
            let theSocket = io.sockets.sockets.get(socketId);
            console.log(await io.in(groupName).allSockets());
            // theSocket.leave(groupName);


            data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});
            data.leftGroups = await groupChatController.getGroupsMessages({return: true, user_id: member.id});

            let notificationData = {
                group_id: group.id,
                initiator_id: initiator.id,
                msg: `<strong>${initiator.first_name + ' ' + initiator.last_name}</strong> removed  <strong>${member.name}</strong>
                       from <strong>${groupName}</strong> group`,
            };

            let n = await groupChatNotificationsController.saveNotification({
                ...notificationData,
                type: 'remove_from_group'
            });
            console.log(await io.in(groupName).allSockets());
            io.sockets.in(groupName).emit('removeFromGroupNotify', {
                ...data,
                ...notificationData,
                ...n,
            });

            theSocket.leave(groupName);
        });


        socket.on('forceDisconnect', async (user) => {
            console.log('force disconnect!!!');
            // console.log(usersGroups)
            delete usersGroups[user.username];
            // usersGroups = Object.values(usersGroups).filter(u => u.username !== user.username);
            let contacts = await usersController.getContacts({return: true, user_id: user.id});

            contacts.map(contact => {
                console.log('aaa', contact.username, getSocketId(contact.username))
                let theSocket = io.sockets.sockets.get(getSocketId(contact.username));
                theSocket?.emit('onLogout', user)
            })
            // console.log('CONTACTS:', contacts)
            console.log(Object.values(usersGroups))
            //
            // delete users[data.username];
            //
            // // if (data.leavingGroup) {
            //
            //
            // let disconnectedUserGroups = groupsUsers.filter(u => u.username === data.username)
            //
            // filteredGroupsUsers = groupsUsers.filter(u => u.username !== data.username);
            //
            // disconnectedUserGroups.map(u => {
            //     data.msg = `${data.username} has left the chat`;
            //     data.groupsUsers = filteredGroupsUsers;
            //
            //     data.group = u.group;
            //     io.sockets.in(u.group).emit('chatNotification', data);
            // });
            //
            // groupsUsers = filteredGroupsUsers;
            //
            // console.log('DISCONNECTED USER GROUPS!!!')
            // console.log(disconnectedUserGroups)
            // console.log('DISCONNECTED USER GROUPS!!!')
            //
            // // } else {
            // //
            // // }
            //
            //
            // // console.log('LEFT!!! GROUP USERS:')
            // // console.log(groupsUsers)
            // // console.log('FILTERED GROUP USERS:')
            // // console.log(filteredGroupsUsers)
            // // console.log('END OF LEFT!!!')
            // data.users = Object.keys(users);
            // io.sockets.emit('chatNotification', data);
            socket.disconnect();
        });


        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    })


}


module.exports = {
    socket
};