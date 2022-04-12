let mongoose = require('mongoose')
const moment = require('moment');

let MessagesSchema = new mongoose.Schema({
    from_user: {
        id: {type: Number},
        avatar: {type: String},
        username: {type: String},
        first_name: {type: String},
        last_name: {type: String},
    },
    video_id: {
        type: Number,
        required: true
    },
    message: {
        type: String
    },
    // to_user: {
    //     type: String,
    //     required: true
    // },
    to_id: {
        type: Number,
    },
    seen: [
        {
            seen_by: {
                avatar: {type: String},
                first_name: {type: String},
                last_name: {type: String},
                id: {type: Number}
            },
            seen_at: {type: String}
        }
    ],

    // created: {
    //     type: Date,
    //     default: moment().format()
    // }

}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

module.exports = mongoose.model('VideoChatMessages', MessagesSchema, 'video_chat_messages');
