let h = require('./helpers');
const to = require('../helpers/getPromiseResult');

let usersController = require('../controllers/usersController');
let groupChatController = require('../controllers/chat_mongo/groupChatController');
let directChatController = require('../controllers/chat_mongo/directChatController');
let usersConnectionNotificationsController = require('../controllers/notifications/directChatNotificationsController');


exports.newUser = async ({username, chat_groups}, usersGroups, socket, io) => {
    console.log("USERNAME!!!!", username)
    if (username) {
        usersGroups[username] = {username, socket_id: socket.id, chat_groups};
        chat_groups.map((group) => {
            socket.join(group);
            let groupUsernames = h.getGroupUsernames(group, usersGroups)
            console.log('group usernames ', group, ' => ', groupUsernames)
            io.sockets.in(group).emit('onGetOnlineMembers', {group, members: groupUsernames})
        });

        console.log('USERS CONNECTED!!!')
        console.log(usersGroups)
        io.emit('onGetOnlineUsers', h.getConnectedUserNames(usersGroups))
        // console.log(usersGroups)
        // console.log(await getGroupSockets(io, chat_groups[0]))
    }
}

exports.getConnectedUsers = ({username}, usersGroups, io) => {
    let socketId = h.getSocketId(username, usersGroups);
    // console.log("online", getConnectedUserNames(usersGroups))
    io.to(socketId).emit('onGetOnlineUsers', h.getConnectedUserNames(usersGroups))
}

exports.connectWithUser = async (data, usersGroups, io) => {
    let {from_user, to_user} = data;

    let channelUserSocketId = h.getSocketId(to_user.username, usersGroups);
    let authUserSocketId = h.getSocketId(from_user.username, usersGroups);

    let connection = await to(usersController.createUsersConnection(data));
    let notification = await h.saveDirectChatNotification({
        ...data, ...connection,
        type: 'users_connection_request'
    });

    console.log("connection request from " + from_user.username + '=>', `${authUserSocketId}`, ' to ' + to_user.username + '=>' + `${channelUserSocketId}`)
    io.to(channelUserSocketId).emit('getConnectWithUser', {notification});
    io.to(authUserSocketId).emit('getConnectWithUser', {connection, notification})
}

exports.cancelUsersConnection = async ({authUser, channelUser, connection_id}, io) => {
    let authUserSocketId = h.getSocketId(authUser.username);
    let channelUserSocketId = h.getSocketId(channelUser.username);

    let connection = await to(usersController.cancelUsersConnection(connection_id));

    io.to(channelUserSocketId).emit('cancelledUsersConnection', connection)
    io.to(authUserSocketId).emit('cancelledUsersConnection', connection)
}

exports.acceptConnection = async (data, io) => {
    let {from_user, to_user} = data;
    let toUserSocketId = h.getSocketId(data.to_user.username);
    let fromUserSocketId = h.getSocketId(from_user.username);

    let confirmedConnection = await usersController.confirmConnection(data);
    let fromUserMessages = await directChatController.getDirectMessages({
        return: true,
        user_id: from_user.id
    });

    console.log('FROM USER MESSAGES!!!')
    console.log(fromUserMessages.map(f => f.username))
    console.log('FROM USER MESSAGES!!!')

    let toUserMessages = await directChatController.getDirectMessages({return: true, user_id: to_user.id});
    await usersConnectionNotificationsController.removeNotification({return: true, id: data.notification_id});

    let notification = await h.saveDirectChatNotification({...data, type: 'accept_connection_request'});
    console.log('accept from ' + from_user.username + '=>' + fromUserSocketId, to_user.username + '=>', toUserSocketId)

    io.to(fromUserSocketId).emit('acceptedConnection', {
        notification,
        users_messages: fromUserMessages
    });
    io.to(toUserSocketId).emit('acceptedConnection', {
        notification,
        users_messages: toUserMessages
    })
}

exports.declineConnection = async (data, io) => {
    let {from_user, to_user} = data;
    let toUserSocketId = h.getSocketId(to_user.username);

    await usersController.declineConnection(data);

    let notification = await h.saveDirectChatNotification({...data, type: 'decline_connection_request'});

    await usersConnectionNotificationsController.removeNotification({return: true, id: data.notification_id});
    io.to(toUserSocketId).emit('declinedConnection', {
        ...notification, from_user,
        to_user,
        notification_type: {name: 'declined_connection_request'}
    })
}

exports.disconnectUsers = async (data, io) => {
    let {from_user, to_user} = data;
    let fromUserSocketId = h.getSocketId(from_user.username);
    let toUserSocketId = h.getSocketId(to_user.username);


    await to(usersController.disconnectUsers(data));
    let toUserMessages = await directChatController.getDirectMessages({return: true, user_id: to_user.id});
    let fromUserMessages = await directChatController.getDirectMessages({return: true, user_id: from_user.id});


    let notification = await h.saveDirectChatNotification({...data, type: 'break_connection'});

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
}

exports.blockUnblockUser = async (data, io) => {
    let {from_user, to_user} = data;
    let fromUserSocketId = h.getSocketId(from_user.username);
    let toUserSocketId = h.getSocketId(to_user.username);

    console.log('block/unblock user!!!', to_user.username, toUserSocketId)

    let fromUserMessages = await directChatController.getDirectMessages({return: true, user_id: from_user.id});
    let toUserMessages = await directChatController.getDirectMessages({return: true, user_id: to_user.id});


    let notification = await h.saveDirectChatNotification({...data, type: 'block_connection'});

    io.to(toUserSocketId).emit('getBlockUnblockUser', {
        ...notification,
        users_messages: toUserMessages
    });
    io.to(fromUserSocketId).emit('getBlockUnblockUser', {
        ...notification,
        users_messages: fromUserMessages
    })
}

exports.forceDisconnect = async (user, usersGroups, socket, io) => {
    console.log('force disconnect!!!');
    // console.log(usersGroups)
    delete usersGroups[user.username];
    // usersGroups = Object.values(usersGroups).filter(u => u.username !== user.username);
    let contacts = await usersController.getContacts({return: true, user_id: user.id});
    let groups = await groupChatController.getGroupsMessages({return: true, user_id: user.id});
    // console.log('GROUPS:', groups)

    contacts.map(contact => {
        // console.log('aaa', contact.username, getSocketId(contact.username))
        let theSocket = io.sockets.sockets.get(h.getSocketId(contact.username));
        theSocket?.emit('onLogout', user)
    })

    if (groups) {
        groups.map(group => {
            io.sockets.in(group.name).emit('onLogout', user)
        })
    }

    socket.leave();
}