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

getGroupUsernames = (groupName) => {
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

getSocketId = (username) => {
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


let socket = (io) => {
    io.on('connection', async (socket) => {
        console.log('new connection made');

        socket.on('newUser', async ({username, chat_groups}) => {
            console.log("USERNAME!!!!", username)
            if (username) {
                usersGroups[username] = {username, socket_id: socket.id, chat_groups};
                chat_groups.map((group) => {
                    socket.join(group);
                    let groupUsernames = getGroupUsernames(group)
                    console.log('group usernames ', group, ' => ', groupUsernames)
                    io.sockets.in(group).emit('onGetOnlineMembers', {group, members: groupUsernames})
                });

                console.log('USERS CONNECTED!!!')
                console.log(getConnectedUserNames(usersGroups))
                io.emit('onGetOnlineUsers', getConnectedUserNames(usersGroups))
                // console.log(usersGroups)
                // console.log(await getGroupSockets(io, chat_groups[0]))
            }

        })

        socket.on('getConnectedUsers', ({username}) => {
            let socketId = getSocketId(username);
            // console.log("online", getConnectedUserNames(usersGroups))
            io.to(socketId).emit('onGetOnlineUsers', getConnectedUserNames(usersGroups))
        });

        socket.on('connectWithUser', async (data) => {
            let {from_user, to_user} = data;

            let channelUserSocketId = getSocketId(to_user.username);
            let authUserSocketId = getSocketId(from_user.username);

            let connection = await to(usersController.createUsersConnection(data));
            let notification = await saveDirectChatNotification({
                ...data, ...connection,
                type: 'users_connection_request'
            });

            console.log("connection request from " + from_user.username + '=>', `${authUserSocketId}`, ' to ' + to_user.username + '=>' + `${channelUserSocketId}`)
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
            await usersConnectionNotificationsController.removeNotification({return: true, id: data.notification_id});

            let notification = await saveDirectChatNotification({...data, type: 'accept_connection_request'});
            console.log('accept from ' + from_user.username + '=>' + fromUserSocketId, to_user.username + '=>', toUserSocketId)

            io.to(fromUserSocketId).emit('acceptedConnection', {
                notification,
                users_messages: fromUserMessages
            });
            io.to(toUserSocketId).emit('acceptedConnection', {
                notification,
                users_messages: toUserMessages
            })
        });

        socket.on('declineConnection', async (data) => {

            let {from_user, to_user} = data;
            let toUserSocketId = getSocketId(to_user.username);

            await usersController.declineConnection(data);

            let notification = await saveDirectChatNotification({...data, type: 'decline_connection_request'});

            await usersConnectionNotificationsController.removeNotification({return: true, id: data.notification_id});
            io.to(toUserSocketId).emit('declinedConnection', {
                ...notification, from_user,
                to_user,
                notification_type: {name: 'declined_connection_request'}
            })
        });

        socket.on('disconnectUsers', async (data) => {

            let {from_user, to_user} = data;
            let fromUserSocketId = getSocketId(from_user.username);
            let toUserSocketId = getSocketId(to_user.username);


            await to(usersController.disconnectUsers(data));
            let toUserMessages = await directChatController.getDirectMessages({return: true, user_id: to_user.id});
            let fromUserMessages = await directChatController.getDirectMessages({return: true, user_id: from_user.id});


            let notification = await saveDirectChatNotification({...data, type: 'break_connection'});

            console.log('disconnect from ' + from_user.username + '=>' + fromUserSocketId, to_user.username + '=>', toUserSocketId)
            // console.log(toUserMessages, toUserSocketId, fromUserSocketId, fromUserMessages)
            io.to(toUserSocketId).emit('getDisconnectUsers', {
                ...notification,
                users_messages: toUserMessages
            });

            io.to(fromUserSocketId).emit('getDisconnectUsers', {
                ...notification,
                users_messages: fromUserMessages
            });
        });

        socket.on('blockUnblockUser', async (data) => {

            let {from_user, to_user} = data;
            let fromUserSocketId = getSocketId(from_user.username);
            let toUserSocketId = getSocketId(to_user.username);

            console.log('block/unblock user!!!', to_user.username, toUserSocketId)

            let fromUserMessages = await directChatController.getDirectMessages({return: true, user_id: from_user.id});
            let toUserMessages = await directChatController.getDirectMessages({return: true, user_id: to_user.id});


            let notification = await saveDirectChatNotification({...data, type: 'block_connection'});

            io.to(toUserSocketId).emit('getBlockUnblockUser', {
                ...notification,
                users_messages: toUserMessages
            });
            io.to(fromUserSocketId).emit('getBlockUnblockUser', {
                ...notification,
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
            console.log('set seen')

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
                // console.log(data.direct_messages)
                io.to(toUserSocketId).emit('newMessage', data)
                io.to(fromUserSocketId).emit('newMessage', data)

            } else {
                data.group_messages = await groupChatController.saveGroupMessage(data);
                console.log('GROUP MESSAGE!!!', group_name)
                io.to(group_name).emit('newMessage', data)
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
            console.log('set new group', data)
            let userGroups = usersGroups[username];
            let newGroupName = data.name;

            if (!userGroups.chat_groups.find(g => g === newGroupName)) {
                userGroups.chat_groups.push(newGroupName);
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
            console.log(notification)

            let savedNotification = await groupChatNotificationsController.saveNotification(notification);

            notification._id = savedNotification._id;

            await groupChatNotificationsController.removeNotification({return: true, id: data.notification_id});

            data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});
            console.log(await io.in(groupName).allSockets());
            console.log('accepted!!!')

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

            let {user, group} = data;
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
            console.log(await io.in(groupName).allSockets());
            console.log('confirmed!!!')
            console.log(io.in(group.name).allSockets())
            console.log(usersGroups)
            io.sockets.in(group.name).emit('confirmedJoinGroup', {
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
            console.log(await io.in(groupName).allSockets());

            data.group = await groupChatController.getGroupMembers({return: true, group_id: group.id});
            data.leftGroups = await groupChatController.getGroupsMessages({return: true, user_id: member.id});

            let notification = {
                group_id: group.id,
                from_user: initiator,
                // to_user: member,
                // to_id: member.id,
                msg: `<strong>${initiator.first_name + ' ' + initiator.last_name}</strong> removed  <strong>${member.name}</strong>
                       from <strong>${groupName}</strong> group`,
                type: 'remove_from_group'
            };

            let savedNotification = await groupChatNotificationsController.saveNotification(notification);

            notification._id = savedNotification._id;

            console.log(await io.in(groupName).allSockets());
            socket.broadcast.to(groupName).emit('removeFromGroupNotify', {
                ...data,
                ...notification
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