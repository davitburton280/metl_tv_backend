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
    await socket.join(room)

    io.sockets.adapter.rooms.forEach((element, index) => {
        console.log(element, 'element ', index)
    })
    console.log(user.username, 'connected to room', room);
    return true

}