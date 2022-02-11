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
            console.log(channelUser.username, authUser.username)

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
    })
}


module.exports = {
    socket
};