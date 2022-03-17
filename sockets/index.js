let usersGroups = [];

let users = require('./users');
let directChat = require('./direct_chat');
let groupChat = require('./group_chat');
let chatGroups = require('./chat_groups');
let pageGroups = require('./page_groups');

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
                await directChat.sendMessage(data, usersGroups, io);
            } else {
                await groupChat.sendMessage(data, io);
            }
        });

        socket.on('getConnectedGroupMembers', async (data) => {
            await groupChat.getConnectedGroupMembers(data, usersGroups, io);
        });

        socket.on('setNewChatGroup', async (data) => {
            await groupChat.setNewGroup(data, usersGroups, socket, io)
        });

        socket.on('removeGroup', async (data) => {
            await groupChat.removeGroup(data, usersGroups, io)
        });

        socket.on('inviteToNewChatGroup', async (data) => {
            await chatGroups.inviteToNewGroup(data, usersGroups, io);
        });

        socket.on('acceptJoinToChatGroup', async (data) => {
            await chatGroups.acceptJoinToChatGroup(data, usersGroups, io);
        });

        socket.on('declineJoinChatGroup', async (data) => {
            await chatGroups.declineJoinChatGroup(data, usersGroups, io);
        });

        socket.on('leaveChatGroup', async (data) => {
            await chatGroups.leaveChatGroup(data, usersGroups, socket, io);
        });

        socket.on('removeFromChatGroup', async (data) => {
            await chatGroups.removeFromChatGroup(data, usersGroups, socket, io);
        });

        socket.on('setNewPageGroup', async (data) => {
            await pageGroups.setNewGroup(data, usersGroups, socket, io)
        });

        socket.on('inviteToNewPageGroup', async (data) => {
            await pageGroups.inviteToNewGroup(data, usersGroups, io);
        })

        socket.on('acceptJoinPageGroup', async (data) => {
            await pageGroups.acceptJoinPageGroup(data, usersGroups, socket, io);
        });

        socket.on('declineJoinPageGroup', async (data) => {
            await pageGroups.declineJoinPageGroup(data, usersGroups, io);
        });

        socket.on('joinGroup', async (data) => {
            await pageGroups.joinGroup(data, usersGroups, io);
        })

        socket.on('confirmJoinGroup', async (data) => {
            await pageGroups.confirmJoinGroup(data, usersGroups, io);
        });

        socket.on('ignoreJoinGroup', async (data) => {
            await pageGroups.ignoreJoinGroup(data, usersGroups, io);
        });

        socket.on('leavePageGroup', async (data) => {
            await pageGroups.leavePageGroup(data, usersGroups, socket, io);
        });

        socket.on('removeFromPageGroup', async (data) => {
            await pageGroups.removeFromPageGroup(data, usersGroups, socket, io);
        });

        socket.on('sendMakeAdminRequest', async (data) => {
            await pageGroups.sendMakeAdminRequest(data, usersGroups, io);
        })

        socket.on('acceptPageGroupAdminRequest', async (data) => {
            await pageGroups.acceptPageGroupAdminRequest(data, usersGroups, socket, io);
        })

        socket.on('declinePageGroupAdminRequest', async (data) => {
            await pageGroups.declinePageGroupAdminRequest(data, usersGroups, socket, io);
        })


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