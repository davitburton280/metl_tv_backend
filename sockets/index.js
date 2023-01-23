let usersGroups = [];

let users = require('./users');
let directChat = require('./direct_chat');
let groupChat = require('./group_chat');
let chatGroups = require('./chat_groups');
let pageGroups = require('./page_groups');
let comments = require('./comments')
let posts = require('./posts');
let messages = require('./messages');
const jwt = require('jsonwebtoken')
// const RedisStore = require('../services/redis')
const SocketHandlerService = require('../services/socketHandlerService')

let socket = (io) => {
    console.log('Socket server is running');
    io.use(async (socket, next) => {
        if (socket.handshake.headers && socket.handshake.headers['token']) {
            jwt.verify(socket.handshake.headers['token'], 'secretkey', function (err, decoded) {
                if (err) return next(new Error('Authentication error'));
                socket.decoded = decoded;
                next();
            });
        }
        else {
            next(new Error('Authentication error'));
        }
    })
    io.on('connection', async (socket) => {
        console.log('new connection made');

        await SocketHandlerService.attach({ user_id: socket.decoded.id, socket: socket.id })

        // const existsUserConnected = await RedisStore.client.get(`${socket.decoded.id}`)
        // if (!existsUserConnected) await RedisStore.client.set(`${socket.decoded.id}`, socket.id)
        // else {
        //     await RedisStore.client.del(`${socket.decoded.id}`)
        //     await RedisStore.client.set(`${socket.decoded.id}`, socket.id)
        // }

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

        socket.on('declinePageGroupAdminRequest', async (data) => {
            await pageGroups.declinePageGroupAdminRequest(data, usersGroups, socket, io);
        })

        socket.on('removePageGroupAdminPrivileges', async (data) => {
            await pageGroups.removePageGroupAdminPrivileges(data, usersGroups, socket, io);
        })

        socket.on('postAdded', (data) => {
            posts.postAdded(data, usersGroups, socket, io)
        })


        socket.on('forceDisconnect', async (user) => {
            await users.forceDisconnect(user, usersGroups, socket, io);
        });

        //!
        socket.on('addComment', async (data) => {
            await comments.createComment(data, socket, io)
        })

        socket.on('storeComments', async (data) => {
            await comments.store(data, socket, io)
        })

        socket.on('disconnectStoredComment', async (data) => {
            await comments.disconnectStoredComment(data, socket, io)
        })

        socket.on('likeComment', async (data) => {
            await comments.likeComment(data, socket, io)
        })

        socket.on('dislikeComment', async (data) => {
            await comments.dislikeComment(data, socket, io)
        })

        socket.on('disconnect', async (socket) => {
            // await RedisStore.client.del(`${socket.decoded.id}`)
            console.log('user disconnected');
        });

        // messages, conversations
        socket.on('joinConversation', async (conversationId) => {
            const room = `conversation_room_${conversationId}`;
            console.log('user joined conversation room --------- ', room)
            await socket.join(room);
        })

        socket.on('leaveConversation', async (conversationId) => {
            const room = `conversation_room_${conversationId}`;
            console.log('user left conversation room --------- ', room)
            await socket.leave(room);
        })

        socket.on('conversationTyping', (conversationId) => {
            const user = socket.decoded;
            const room = `conversation_room_${conversationId}`;
            socket.to(room).emit('conversationTyping', user.first_name);
        })

        socket.on('conversationTypingStopped', (conversationId) => {
            const room = `conversation_room_${conversationId}`;
            socket.to(room).emit('conversationTypingStopped');
        })

        socket.on('createMessage', async (data={}, ...files) => {
            await messages.createMessage({
                ...data,
                files,
            }, socket);
        })

        socket.on('deleteMessage', async (data={}) => {
            await messages.deleteMessage(data, socket, io);
        })

        socket.on('updateMessage', async (data={}) => {
            await messages.updateMessage(data, socket, io);
        })

        // socket

    })
}


module.exports = {
    socket
};