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
            // console.log('USERS CONNECTED!!!')
            // console.log(usersGroups)
            // console.log(await getGroupSockets(io, chat_groups[0]))
        })

        socket.on('getConnectedUsers', ({username}) => {
            let socketId = getSocketId(username);
            // console.log("online", getConnectedUserNames(usersGroups))
            io.to(socketId).emit('usersConnected', getConnectedUserNames(usersGroups))
        });

        socket.on('connectWithUser', async (data) => {
            let {authUser, channelUser} = data;
            // console.log(channelUser.username, authUser.username)

            let channelUserSocketId = getSocketId(channelUser.username);
            let authUserSocketId = getSocketId(authUser.username);

            let connection = await to(usersController.createUsersConnection(data));
            await usersConnectionNotificationsController.saveNotification({
                ...connection,
                type: 'users_connection_request'
            });

            // console.log('connect!!!', username, socketId)
            // console.log('users!!!', usersGroups, channelUserSocketId, usersGroups[authUserSocketId])
            // console.log('connection!!!', connection)

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

            // console.log(fromUserSocketId, toUserSocketId)
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
            let fromUserSocketId = getSocketId(from_user.username);

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
    })
}


module.exports = {
    socket
};