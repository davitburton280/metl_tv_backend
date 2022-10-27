const comment_controller = require('../controllers/commentController')

exports.createComment = async (data, socket, io) => {
    const user = socket.decoded
    const result = await comment_controller.create(data, user)
    if (result.success) {
        io.in(result.data.room).emit('createComment_success', JSON.stringify(result.data.comment))
        console.log('sent createComment_success to ', result.data.room);
    }
}

exports.store = async (data, socket, io) => {
    const user = socket.decoded
    const { post_id, video_id } = JSON.parse(data)
    const room = `${post_id ? 'post' : 'video'}_room_${post_id || video_id}`
    const exsitsRoom = io.sockets.adapter.rooms
    console.log(exsitsRoom, 'exsitsRoom');
    console.log(typeof exsitsRoom, 'exsitsRooType');

    await socket.join(room)
    console.log(user.username, 'connected to room', room);
    // io.in(room).emit('fetchMessages', 'hello')
    Object.keys(io.sockets.adapter.rooms).map(item => {
        console.log(item, 'item item imte imte');
        if (item === room) {
            console.log(io.sockets.adapter.rooms[item], '111111111111111111111111')
        }
    })

    return true

}