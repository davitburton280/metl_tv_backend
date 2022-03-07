let usersGroups = [];

let users = require('./users');
let directChat = require('./direct_chat');
let groupChat = require('./group_chat');
let group = require('./group');

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
            await users.cancelUsersConnection(data, usersGroups, io);
        });

        socket.on('acceptConnection', async (data) => {
            await users.acceptConnection(data, usersGroups, io);
        });

        socket.on('declineConnection', async (data) => {
            await users.declineConnection(data, usersGroups, io);
        });

        socket.on('disconnectUsers', async (data) => {
            await users.disconnectUsers(data, usersGroups, io);
        });

        socket.on('blockUnblockUser', async (data) => {
            await users.blockUnblockUser(data, usersGroups, io);
        });

        socket.on('unreadLastMessages', async (data) => {
            await directChat.unreadLastMessages(data, usersGroups, io);
        });

        socket.on('setSeen', async (data) => {
            if (!data.group_name) {
                await directChat.setSeen(data, usersGroups, io);
            } else {
                await groupChat.setSeen(data, io);
            }
        });

        socket.on('setTyping', async (data) => {
            if (!data.group_name) {
                await directChat.setTyping(data, usersGroups, io);
            } else {
                await groupChat.setTyping(data, io);
            }

        });

        socket.on('sendMessage', async (data) => {
            if (!data.group_name) {
                await directChat.sendMessage(data,usersGroups, io);
            } else {
                await groupChat.sendMessage(data, io);
            }
        });

        socket.on('getConnectedGroupMembers', async (data) => {
            await groupChat.getConnectedGroupMembers(data, usersGroups, io);
        });

        socket.on('setNewGroup', async (data) => {
            await groupChat.setNewGroup(data, usersGroups, socket, io)
        });

        socket.on('removeGroup', async (data) => {
            await groupChat.removeGroup(data, usersGroups, io)
        });

        socket.on('inviteToNewGroup', async (data) => {
            await group.inviteToNewGroup(data, usersGroups, io);
        });

        socket.on('joinGroup', async (data) => {
            await group.joinGroup(data, usersGroups, io);
        })

        socket.on('acceptJoinGroup', async (data) => {
            await group.acceptJoinGroup(data, usersGroups, io);
        });

        socket.on('declineJoinGroup', async (data) => {
            await group.declineJoinGroup(data, usersGroups, io);
        });

        socket.on('confirmJoinGroup', async (data) => {
            await group.confirmJoinGroup(data, usersGroups, io);
        });

        socket.on('ignoreJoinGroup', async (data) => {
            await group.ignoreJoinGroup(data, usersGroups, io);
        });

        socket.on('leaveGroup', async (data) => {
            await group.leaveGroup(data, usersGroups, socket, io);
        });

        socket.on('removeFromGroup', async (data) => {
            await group.removeFromGroup(data, usersGroups, socket, io);
        });

        socket.on('forceDisconnect', async (user) => {
            await users.forceDisconnect(user, usersGroups, socket, io);
        });

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    })
}


module.exports = {
    socket
};