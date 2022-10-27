const comment_controller = require('../controllers/commentController')

exports.createComment = async (data, socket, io) => {
    const user = socket.decoded
    const result = await comment_controller.create(data, user)
    if (result.success) {
        io.in(result.data.room).emit('createComment_success', JSON.stringify(result.data.comment))
    }
}

exports.store = async (data, socket, io) => {
    const user = socket.decoded
    const { post_id, video_id } = JSON.parse(data)

    await socket.join(`${post_id ? 'post' : 'video'}_room_${post_id || video_id}`)

    // io.in(`${post_id ? 'post' : 'video'}_room_${post_id || video_id}`).emit('fetchMessages', 'hello')
    return true

}