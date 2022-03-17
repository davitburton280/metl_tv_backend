let mongoose = require('mongoose')
const moment = require('moment');

let MessagesSchema = new mongoose.Schema({
    from_id: {
        type: Number,
        required: true
    },
    group_id: {
        type: Number,
        required: true
    },
    from_first_name: {
        type: String,
        required: true
    },
    from_last_name: {
        type: String,
        required: true
    },
    from_avatar: {
        type: String
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

module.exports = mongoose.model('GroupsMessages', MessagesSchema, 'group_chat_messages');
