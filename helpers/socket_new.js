let usersGroups = [];

let usersController = require('../controllers/usersController');

let directChatController = require('../controllers/chat_mongo/directChatController');
let groupChatController = require('../controllers/chat_mongo/groupChatController');

let usersConnectionNotificationsController = require('../controllers/notifications/usersConnectionNotificationsController');
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

let socket = (io) => {
    io.on('connection', async (socket) => {
        console.log('new connection made');

        socket.on('newUser', async ({username, chat_groups}) => {
            usersGroups[username] = {username, socket_id: socket.id, chat_groups};
            chat_groups.map(group => {
                socket.join(group);
            })
            io.emit('userConnected', getConnectedUserNames(usersGroups))
            console.log('USERS CONNECTED!!!')
            console.log(usersGroups)
            // console.log(await getGroupSockets(io, chat_groups[0]))
        })

        socket.on('getConnectedUsers', ({username}) => {
            let socketId = getSocketId(username);
            // console.log("online", getConnectedUserNames(usersGroups))
            io.to(socketId).emit('usersConnected', getConnectedUserNames(usersGroups))
        });

        socket.on('connectWithUser', async (data) => {
            let {authUser, channelUser} = data;

            let channelUserSocketId = getSocketId(channelUser.username);
            let authUserSocketId = getSocketId(authUser.username);

            let connection = await to(usersController.createUsersConnection(data));

            let notificationData = {
                connection_id: connection?.id,
                initiator_id: authUser.id,
                receiver_id: channelUser.id,
                msg: `<strong>${authUser.first_name + ' ' + authUser.last_name}</strong> has sent a connection request to you`
            };

            await usersConnectionNotificationsController.saveNotification({
                ...notificationData,
                type: 'users_connection_request'
            });

            // console.log('connect!!!', username, socketId)
            // console.log('users!!!', usersGroups, channelUserSocketId, usersGroups[authUserSocketId])
            // console.log('connection!!!', connection)

            console.log("connection request from " + authUser.username + '=>', `${authUserSocketId}`, ' to ' + channelUser.username + '=>' + `${channelUserSocketId}`)
            io.to(channelUserSocketId).emit('getConnectWithUser', connection);
            io.to(authUserSocketId).emit('getConnectWithUser', connection)
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
            let toUserSocketId = getSocketId(to_user.username);
            let fromUserSocketId = getSocketId(from_user.username);


            let confirmedConnection = await usersController.confirmConnection(data);
            let fromUserMessages = await directChatController.getDirectMessages({
                return: true,
                user_id: from_user.id
            });
            let toUserMessages = await directChatController.getDirectMessages({return: true, user_id: to_user.id});

            let notificationData = {
                connection_id: data.connection_id,
                initiator_id: from_user.id,
                receiver_id: to_user.id,
                msg: `<strong>${from_user.first_name} ${from_user.last_name}</strong> has accepted your connection request`,
            };
            let n = await usersConnectionNotificationsController.saveNotification({
                ...notificationData,
                type: 'accept_connection_request'
            });

            console.log('accept from ' + from_user.username + '=>' + fromUserSocketId, to_user.username + '=>', toUserSocketId)

            io.to(fromUserSocketId).emit('acceptedConnection', {
                ...notificationData,
                users_messages: fromUserMessages
            });
            io.to(toUserSocketId).emit('acceptedConnection', {
                ...notificationData, ...JSON.parse(JSON.stringify(n)),
                users_messages: toUserMessages
            })
        });

        socket.on('declineConnection', async (data) => {

            let {from_user, to_user} = data;
            let toUserSocketId = getSocketId(to_user.username);

            await usersController.declineConnection(data);

            let notificationData = {
                connection_id: data.connection_id,
                initiator_id: from_user.id,
                receiver_id: to_user.id,
                msg: `<strong>${from_user.first_name} ${from_user.last_name}</strong> has declined your connection request`,
            };

            let n = await usersConnectionNotificationsController.saveNotification({
                ...notificationData,
                type: 'decline_connection_request'
            });

            io.to(toUserSocketId).emit('declinedConnection', {
                ...notificationData, from_user,
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
    })


}


module.exports = {
    socket
};