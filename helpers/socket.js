exports.socket = (io) => {
    io.on('connection', (socket) => {
        console.log('new connection made');

        socket.on('sendMessage', (data) => {
            console.log('MESSAGE!!!')
            console.log(data);
            socket.broadcast.emit('newMessage', data)

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