let mongoose = require('mongoose')
const moment = require('moment');

let NotificationsSchema = new mongoose.Schema({
    from_id: {
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
    // to_user: {
    //     type: String,
    //     required: true
    // },
    to_id: {
        type: Number,
    },
    seen: {
        type: Boolean
    },
    seen_at:{
        type: String
    },
    // created: {
    //     type: Date,
    //     default: moment().format()
    // }

},{timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }});

module.exports = mongoose.model('DirectNotifications', NotificationsSchema,'direct_chat_notifications');
