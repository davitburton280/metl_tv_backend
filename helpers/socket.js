let users = [];
let groupsUsers = [];
let filteredGroupsUsers = [];
let groupChatController = require('../controllers/chat/groupChatController');
let usersController = require('../controllers/usersController');
let directChatController = require('../controllers/chat_mongo/directChatController');
let usersConnectionNotificationsController = require('../controllers/notifications/usersConnectionNotificationsController');


const db = require('../models');
const ChatGroups = db.chat_groups;

const to = require('../helpers/getPromiseResult');


let socket = (io) => {
    io.on('connection', async (socket) => {


        console.log('new connection made');

        socket.on('newUser', async (user) => {
            let username = user.username;
            users[username] = socket.id;

            console.log('USERS CONNECTED!!!')
            console.log(users)

            if (user.group) {
                let groups = await groupChatController.getChatGroups({user_id: user.id});
                groups.map(g => {
                    let group = g.name;
                    socket.join(g.name);

                    if (!groupsUsers.find(gu => gu.username === username && gu.group === g.name)) {
                        groupsUsers.push({id: socket.id, username, group});
                        filteredGroupsUsers = groupsUsers;
                    }

                    let data = {
                        username,
                        group,
                        groupsUsers,
                        msg: `${user.username} has joined the chat`,
                        joiningChat: 1
                    };
                    io.sockets.in(g.name).emit('chatNotification', data);
                });

                console.log('JOINED!!! GROUP USERS:')
                console.log(groupsUsers)
                console.log('END OF JOINED!!!')
            } else {
                let keys = Object.keys(users);
                io.emit('userConnected', keys)
            }
        });

        socket.on('getConnectedUsers', (data) => {
            let socketId = users[data.username];
            console.log("online", socketId)
            io.to(socketId).emit('usersConnected', Object.keys(users))
        });

        socket.on('connectWithUser', async (data) => {
            let username = data.channelUser.username;
            let socketId = users[username];
            // console.log(data)
            let connection = await to(usersController.createUsersConnection(data));
            await usersConnectionNotificationsController.saveNotification({
                ...connection,
                type: 'users_connection_request'
            });
            // console.log('connect!!!', username, socketId)
            console.log('users!!!', users, socketId, users[data.authUser.username])
            // console.log('connection!!!', connection)
            io.to(socketId).emit('getConnectWithUser', connection);
            io.to(users[data.authUser.username]).emit('getConnectWithUser', connection)
        });

        socket.on('cancelUsersConnection', async (data) => {
            let username = data.channelUser.username;
            let socketId = users[username];
            let connection = await to(usersController.cancelUsersConnection(data.connection_id));
            io.to(socketId).emit('cancelledUsersConnection', connection)
            io.to(users[data.authUser.username]).emit('cancelledUsersConnection', connection)
        });

        socket.on('acceptConnection', async (data) => {
            let socketId = users[data.to_user.username];
            let confirmedConnection = await usersController.confirmConnection(data);
            let fromUserMessages = await directChatController.getDirectMessages({return: true,user_id: data.from_user.id});
            let toUserMessages = await directChatController.getDirectMessages({return: true,user_id: data.to_user.id});
            let notificationData = {
                connection_id: data.connection_id,
                initiator_id: data.from_user.id,
                receiver_id: data.to_user.id,
                msg: `<strong>${data.from_user.first_name} ${data.from_user.last_name}</strong> has accepted your connection request`,
            };
            let n = await usersConnectionNotificationsController.saveNotification({
                ...notificationData,
                type: 'accept_connection_request'
            });

            console.log(users[data.from_user.username], socketId)
            io.to(users[data.from_user.username]).emit('acceptedConnection', {
                ...notificationData,
                users_messages: fromUserMessages
            });
            io.to(socketId).emit('acceptedConnection', {
                ...notificationData, ...JSON.parse(JSON.stringify(n)),
                users_messages: toUserMessages
            })
        });

        socket.on('declineConnection', async (data) => {
            let username = data.to_user.username;
            let socketId = users[username];
            let d = await usersController.declineConnection(data);
            let notificationData = {
                connection_id: data.connection_id,
                initiator_id: data.from_user.id,
                receiver_id: data.to_user.id,
                msg: `<strong>${data.from_user.first_name} ${data.from_user.last_name}</strong> has declined your connection request`,
            };

            let n = await usersConnectionNotificationsController.saveNotification({
                ...notificationData,
                type: 'decline_connection_request'
            });

            io.to(socketId).emit('declinedConnection', {
                ...notificationData, from_user: data.from_user,
                to_user: data.to_user,
                notification_type: {name: 'declined_connection_request'}
            })
        });

        socket.on('disconnectUsers', async (data) => {
            let username = data.to_username;
            let socketId = users[username];
            await to(usersController.disconnectUsers(data));
            console.log(data)
            let notificationData = {
                connection_id: data.connection_id,
                initiator_id: data.from_id,
                receiver_id: data.to_id,
                msg: data.msg,
            };

            let toUserMessages = await directChatController.getDirectMessages({return: true,user_id: data.to_id});
            let n = await usersConnectionNotificationsController.saveNotification({
                ...notificationData,
                type: 'break_connection'
            });
            io.to(socketId).emit('getDisconnectUsers', {
                ...notificationData, ...JSON.parse(JSON.stringify(n)),
                users_messages: toUserMessages
            });
        });


        socket.on('sendMessage', async (data) => {
            let group = data.group;
            if (group) {
                console.log('GROUP MESSAGE!!!')
                io.to(group).emit('newMessage', data)
            } else {
                let fromUser = users[data.from_username];
                let toUser = users[data.to_username];
                data.direct_messages = await directChatController.saveDirectMessage(data)
                console.log('DIRECT MESSAGE!!!', toUser, fromUser)
                io.to(toUser).emit('newMessage', data)
                io.to(fromUser).emit('newMessage', data)
            }
        });


        socket.on('setTyping', (data) => {
            console.log('typing', data)

            if (!data.group) {
                let socketId = users[data.to_username];
                io.to(socketId).emit('getTyping', data)
            } else {
                io.to(data.group).emit('getTyping', data)
            }


        });

        socket.on('setSeen', async (data) => {
            console.log('set seen', data)


            if (!data.group) {
                console.log('direct seen!!!')
                let toSocketId = users[data.to_username];
                let fromSocketId = users[data.from_username];
                await directChatController.updateSeen(data);
                data.direct_messages = await directChatController.getConnectionMessages(
                    {return: true, connection_id: data.connection_id}
                );
                io.to(toSocketId).emit('getSeen', data)
                io.to(fromSocketId).emit('getSeen', data)
            } else {
                console.log('group seen!!!')
                await to(groupChatController.updateSeen(data));
                io.to(data.group).emit('getSeen', data)
            }

        });

        socket.on('unreadLastMessages', async (data) => {
            console.log('unread messages!!!')
            if (!data.group) {
                let toSocketId = users[data.to_user];
                let fromSocketId = users[data.from_user];

                await directChatController.unreadMessages(data);
                data.direct_messages = await directChatController.getConnectionMessages(
                    {return: true, connection_id: data.connection_id}
                );

                io.to(toSocketId).emit('getSeen', data)
                io.to(fromSocketId).emit('getSeen', data)

            }
        });

        socket.on('blockUnblockUser', async (data) => {

            let toSocketId = users[data.contact_username];
            let fromSocketId = users[data.from_username];
            console.log('block/unblock user!!!', data.contact_username, toSocketId)
            // console.log(data)
            let notificationData = {
                connection_id: data.connection_id,
                initiator_id: data.from_id,
                receiver_id: data.to_id,
                msg: data.msg,
            };
            let fromUserMessages = await directChatController.getDirectMessages({return: true,user_id: data.from_id});
            let toUserMessages = await directChatController.getDirectMessages({return: true,user_id: data.to_id});
            console.log(fromUserMessages, toUserMessages)
            let n = await usersConnectionNotificationsController.saveNotification({
                ...notificationData,
                type: 'block_connection'
            });
            // console.log(JSON.parse(JSON.stringify(n))
            io.to(toSocketId).emit('getBlockUnblockUser', {
                ...notificationData, ...JSON.parse(JSON.stringify(n)),
                users_messages: toUserMessages
            });
            io.to(fromSocketId).emit('getBlockUnblockUser', {
                ...notificationData,
                users_messages: fromUserMessages
            })
        });


        socket.on('setNewGroup', async (data) => {
            console.log('set new group')
            // console.log(data)
            groupsUsers.push({id: socket.id, username: data.username, group: data.name});
            socket.join(data.name);

            data.groupsUsers = groupsUsers;
            io.to(data.name).emit('chatNotification', {...data, group: data.name, groupCreated: 1})
        });

        socket.on('inviteToNewGroup', async (data) => {
            console.log('invite to new group!!!', data);

            let group = await ChatGroups.findOne({where: {id: data.group_id}, attributes: ['name']});
            if (group) {
                data.members.map(member => {
                    let username = member.username;
                    let socketId = users[username];
                    console.log(username);
                    console.log(socketId)
                    console.log(groupsUsers)
                    io.to(socketId).emit('inviteToGroupSent', {
                        msg: `You are invited to join the ${group.name} group`,
                        group_id: data.group_id
                    })
                })


                // io.sockets.in(group.name).emit('inviteToGroupSent', data);
            }
        });

        socket.on('acceptJoinGroup', async (data) => {
            console.log('joining group!!!');
            let socketId = users[data.username]; //socket.id
            let theSocket = io.sockets.sockets.get(socketId)
            theSocket.join(data.group);
            console.log(await io.in(data.group).allSockets())
            console.log(socketId, socket.id)
            if (!groupsUsers.find(gu => gu.username === data.username && gu.group === data.group)) {
                groupsUsers.push({id: socketId, username: data.username, group: data.group});
            }
            console.log(groupsUsers)
            console.log(socketId)

            data.msg = `${data.username} has joined the group`;
            data.groupsUsers = groupsUsers;
            data.acceptingJoinGroup = 1;
            io.sockets.in(data.group).emit('chatNotification', data);
            // io.to(socketId).emit('chatNotification', data)
        });

        socket.on('declineJoinGroup', async (data) => {
            console.log('decline joining group!!!');
            let socketId = users[data.username]; //socket.id
            let theSocket = io.sockets.sockets.get(socketId)
            theSocket.join(data.group);
            console.log(await io.in(data.group).allSockets())
            console.log(socketId, socket.id)
            if (!groupsUsers.find(gu => gu.username === data.username && gu.group === data.group)) {
                filteredGroupsUsers = groupsUsers.filter(u => u.username !== data.username || u.group !== data.group);
                // groupsUsers.push({id: socketId, username: data.username, group: data.group});
            }
            console.log(filteredGroupsUsers)
            console.log(socketId)

            data.msg = `${data.username} has declined joining the group`;
            data.groupsUsers = filteredGroupsUsers;
            data.decliningJoinGroup = 1;
            io.sockets.in(data.group).emit('chatNotification', data);
            // io.to(socketId).emit('chatNotification', data)
        });


        socket.on('leaveGroup', (data) => {
            console.log('leave group!!!')
            filteredGroupsUsers = groupsUsers.filter(u => u.username !== data.username || u.group !== data.group);
            groupsUsers = filteredGroupsUsers;
            socket.leave(data.group);
            data.msg = `${data.username} has left the group`;
            data.groupsUsers = filteredGroupsUsers;
            data.leavingGroup = 1;
            io.sockets.in(data.group).emit('chatNotification', data);
        });

        socket.on('removeGroup', async (data) => {
            console.log('remove group!!!', data.group)
            let group = data.group;
            console.log(groupsUsers)
            filteredGroupsUsers = groupsUsers.filter(u => u.group !== data.group);
            groupsUsers = filteredGroupsUsers;
            console.log(groupsUsers)
            data.msg = `${data.username} has removed the group`;
            data.groupRemoved = 1;
            data.groupsUsers = filteredGroupsUsers;

            console.log(await io.in(group).allSockets());
            io.sockets.in(group).emit('chatNotification', data);
            io.in(group).socketsLeave(group);
            console.log('sockets leaved the group!!!')
            console.log(await io.in(group).allSockets())
        });

        socket.on('forceDisconnect', (data) => {
            console.log('force disconnect!!!');

            delete users[data.username];

            // if (data.leavingGroup) {


            let disconnectedUserGroups = groupsUsers.filter(u => u.username === data.username)

            filteredGroupsUsers = groupsUsers.filter(u => u.username !== data.username);

            disconnectedUserGroups.map(u => {
                data.msg = `${data.username} has left the chat`;
                data.groupsUsers = filteredGroupsUsers;

                data.group = u.group;
                io.sockets.in(u.group).emit('chatNotification', data);
            });

            groupsUsers = filteredGroupsUsers;

            console.log('DISCONNECTED USER GROUPS!!!')
            console.log(disconnectedUserGroups)
            console.log('DISCONNECTED USER GROUPS!!!')

            // } else {
            //
            // }


            // console.log('LEFT!!! GROUP USERS:')
            // console.log(groupsUsers)
            // console.log('FILTERED GROUP USERS:')
            // console.log(filteredGroupsUsers)
            // console.log('END OF LEFT!!!')
            data.users = Object.keys(users);
            io.sockets.emit('chatNotification', data);
            socket.disconnect();
        });


        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
};

buildNotification = () => {

};


module.exports = {
    socket
};