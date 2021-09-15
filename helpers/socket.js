let users = [];
exports.socket = (io) => {
    io.on('connection', (socket) => {
        console.log('new connection made');

        socket.on('newUser', (username) => {
            users[username] = socket.id;
            console.log('USERS CONNECTED!!!')
            console.log(users)
            io.emit('userConnected', username)
        })


        socket.on('sendMessage', (data) => {
            console.log('MESSAGE!!!')
            console.log(data.to_user)
            let username = data.to_user.from;
            let socketId = users[username];
            console.log(username);
            console.log(socketId)
            io.to(socketId).emit('newMessage', data)
            // socket.broadcast.emit('newMessage', data)

        });


        socket.emit('event2', {
            msg: 'Server to client, do you read me? Over.'
        });

        socket.on('event3', (data) => {
            console.log(data.msg);
            socket.emit('event4', {
                msg: 'Loud and clear :)'
            });
        });

        socket.on('disconnect', () => {
            console.log('user disconnected');
        });
    });
}