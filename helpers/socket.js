let users = [];
let groupsUsers = [];
let chatController = require('../controllers/chatController');


const db = require('../models');
const ChatGroups = db.chat_groups;


exports.socket = (io) => {
    io.on('connection', (socket) => {
        console.log('new connection made');

        socket.on('newUser', (username) => {
            users[username] = socket.id;
            console.log('USERS CONNECTED!!!')
            console.log(users)
            io.emit('userConnected', username)
        });


        socket.on('sendMessage', (data) => {
            console.log('MESSAGE!!!')
            let username = data.to_user.from || data.to_user.username;
            let socketId = users[username];
            console.log(username);
            console.log(socketId)
            io.to(socketId).emit('newMessage', data)
            // socket.broadcast.emit('newMessage', data)

        });


        socket.on('setTyping', (data) => {
            console.log('typing')
            let username = data.to_user?.from || data.to_user?.username;
            let socketId = users[username];
            // console.log(socketId)
            if (data.to_user) {
                io.to(socketId).emit('getTyping', data)
            }
        });

        socket.on('setSeen', async (data) => {
            let username = data.to_user.from || data.to_user.username;
            let socketId = users[username];
            console.log('seen')
            let r = await chatController.updateSeen(data);
            // data.seen = +r;
            console.log(data.from_user.username, users, socketId)
            io.to(socketId).emit('getSeen', data)
            io.to(users[data.from_user.username]).emit('getSeen', data)
        });

        socket.on('setNewGroup', async (data) => {
            console.log('set new group')
            console.log(data)
            // groupsUsers.push({id: socket.id, username: data.username, group: data.name});
            socket.join(data.name);
        });

        socket.on('inviteToNewGroup', async (data) => {
            console.log('invite to new group!!!')
            console.log(data)

            let group = await ChatGroups.findOne({where: {id: data.group_id}, attributes: ['name']});
            if (group) {
                console.log(group.name)
                console.log(users)
                // socket.join(group.name);

                data.members.map(member => {
                    let username = member.username;
                    let socketId = users[username];
                    console.log(username);
                    console.log(socketId)
                    io.to(socketId).emit('inviteToGroupSent', {msg:`You are invited to join the ${group.name} group`, group_id: data.group_id})
                })


                // io.sockets.in(group.name).emit('inviteToGroupSent', data);
            }
        });

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
}