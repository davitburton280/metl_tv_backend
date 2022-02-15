let mongoose = require('mongoose')
const moment = require('moment');

let NotificationsSchema = new mongoose.Schema({

    from_user: {
        avatar: {type: String},
        username: {type: String},
        first_name: {type: String},
        last_name: {type: String},
        id: {type: Number}
    },
    connection_id: {
        type: Number,
        required: true
    },
    type: {
        type: String
    },
    msg: {
        type: String
    },
    to_user: {
        avatar: {type: String},
        username: {type: String},
        first_name: {type: String},
        last_name: {type: String},
        id: {type: Number}
    },
    read: {
        type: Boolean
    },
    read_at: {
        type: String
    },
    // created: {
    //     type: Date,
    //     default: moment().format()
    // }

}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

module.exports = mongoose.model('DirectNotifications', NotificationsSchema, 'direct_chat_notifications');
