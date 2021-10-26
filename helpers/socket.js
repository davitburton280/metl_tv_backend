let users = [];
let groupsUsers = [];
let filteredGroupsUsers = [];
let chatController = require('../controllers/chatController');


const db = require('../models');
const ChatGroups = db.chat_groups;

const to = require('../helpers/getPromiseResult');


exports.socket = (io) => {
    io.on('connection', (socket) => {
        console.log('new connection made');


        socket.on('newUser', async (user) => {
            users[user.username] = socket.id;
            console.log('USERS CONNECTED!!!')
            console.log(users)

            if (user.group) {
                let groupsResults = await chatController.getChatGroups({user_id: user.id});
                let groups = JSON.parse(JSON.stringify(groupsResults));
                groups.map(g => {
                    socket.join(g.name);

                    if (!groupsUsers.find(gu => gu.username === user.username && gu.group === g.name)) {
                        groupsUsers.push({id: socket.id, username: user.username, group: g.name});
                        filteredGroupsUsers = groupsUsers;
                    }

                    let data = {};
                    data.msg = `${user.username} has joined the chat`;
                    data.username = user.username;
                    data.groupUsers = groupsUsers;
                    data.group = g.name;
                    io.sockets.in(g.name).emit('chatNotification', data);
                });

                console.log('JOINED!!! GROUP USERS:')
                console.log(groupsUsers)
                console.log('END OF JOINED!!!')
            }


            io.emit('userConnected', user.username)


        });


        socket.on('sendMessage', (data) => {


            let group = data.group;

            if (group) {
                console.log('DIRECT MESSAGE!!!')
                // console.log(data)
                // console.log(group)
                io.to(group).emit('newMessage', data)
            } else {
                let username = data.to_user.from || data.to_user.username;
                let socketId = users[username];
                // console.log(username);
                // console.log(socketId)
                console.log('GROUP MESSAGE!!!')
                io.to(socketId).emit('newMessage', data)
            }
            // socket.broadcast.emit('newMessage', data)

        });


        socket.on('setTyping', (data) => {
            console.log('typing')

            if (!data.group) {
                let username = data.to_user?.from || data.to_user?.username;
                let socketId = users[username];
                // console.log(socketId)
                if (data.to_user) {
                    io.to(socketId).emit('getTyping', data)
                }
            } else {
                io.to(data.group).emit('getTyping', data)
            }


        });

        socket.on('setSeen', async (data) => {
            console.log('set seen')

            if (!data.group) {
                let username = data.to_user.from || data.to_user.username;
                let socketId = users[username];
                let r = await chatController.updateSeen(data);
                // data.seen = +r;
                console.log(data.from_user.username, users, socketId)
                io.to(socketId).emit('getSeen', data)
                io.to(users[data.from_user.username]).emit('getSeen', data)
            } else {
                console.log('seen in group!!!')
                console.log(data)
                let {message_id, from_user, group_id} = data;
                await to(chatController.updateSeen(data));
                io.to(data.group).emit('getSeen', data)
            }

        });


        socket.on('setNewGroup', async (data) => {
            console.log('set new group')
            console.log(data)
            groupsUsers.push({id: socket.id, username: data.username, group: data.name});
            socket.join(data.name);
        });

        socket.on('inviteToNewGroup', async (data) => {
            console.log('invite to new group!!!')
            console.log(data)

            let group = await ChatGroups.findOne({where: {id: data.group_id}, attributes: ['name']});
            if (group) {
                // console.log(group.name)
                // console.log(users)
                // socket.join(group.name);

                data.members.map(member => {
                    let username = member.username;
                    let socketId = users[username];
                    console.log(username);
                    console.log(socketId)
                    io.to(socketId).emit('inviteToGroupSent', {
                        msg: `You are invited to join the ${group.name} group`,
                        group_id: data.group_id
                    })
                })


                // io.sockets.in(group.name).emit('inviteToGroupSent', data);
            }
        });

        socket.on('acceptJoinGroup', (data) => {
            console.log('joining group');
            socket.join(data.name);

            groupsUsers.push({id: socket.id, username: data.username, group: data.name});
            console.log(groupsUsers)

            data.msg = `${data.username} has joined the group`;
            data.groupUsers = filteredGroupsUsers;
            io.sockets.in(data.group).emit('chatNotification', data);
        });

        socket.on('leaveGroup', (data) => {
            console.log('leave group!!!')
            filteredGroupsUsers = groupsUsers.filter(u => u.username !== data.username || u.group !== data.group);
            groupsUsers = filteredGroupsUsers;
            socket.leave(data.group)
            data.msg = `${data.username} has left the group`;
            data.groupUsers = filteredGroupsUsers;
            io.sockets.in(data.group).emit('chatNotification', data);
        });

        socket.on('forceDisconnect', (data) => {
            let socketId = users[data.username];
            // console.log(data.username)
            console.log('force disconnect!!!');
            delete users[data.username];

            let disconnectedUserGroups = groupsUsers.filter(u => u.username === data.username)

            filteredGroupsUsers = groupsUsers.filter(u => u.username !== data.username);

            disconnectedUserGroups.map(u => {
                data.msg = `${data.username} has left the chat`;
                data.groupUsers = filteredGroupsUsers;
                data.group = u.group;
                io.sockets.in(u.group).emit('chatNotification', data);
            });

            groupsUsers = filteredGroupsUsers;


            console.log('DISCONNECTED USER GROUPS!!!')
            console.log(disconnectedUserGroups)
            console.log('DISCONNECTED USER GROUPS!!!')

            // console.log('LEFT!!! GROUP USERS:')
            // console.log(groupsUsers)
            // console.log('FILTERED GROUP USERS:')
            // console.log(filteredGroupsUsers)
            // console.log('END OF LEFT!!!')

            socket.disconnect();
        });


        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
};