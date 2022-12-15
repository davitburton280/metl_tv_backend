let mongoose = require('mongoose')

let Schema = new mongoose.Schema({
    user_id: {
        type: Number,
        required: true
    },
    socket: {
        type: String,
        required: true
    }
},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

module.exports = mongoose.model('SocketHandlers', Schema,'socket_handlers');
