let mongoose = require('mongoose')
const moment = require('moment');

let NotificationsSchema = new mongoose.Schema({
    group_name: {
        type: String
    },
    group_id: {
        type: Number,
    },
    from_user: {
        id: {type: Number},
        avatar: {type: String},
        username: {type: String},
        first_name: {type: String},
        last_name: {type: String},
    },
    msg: {
        type: String
    },
    link: {
        type: String
    },
    type: {
        type: String
    },
    // to_user: {
    //     type: String,
    //     required: true
    // },
    read: [
        {
            read_by: {
                avatar: {type: String},
                first_name: {type: String},
                last_name: {type: String},
                id: {type: Number}
            },
            read_at: {type: String}
        }
    ],

    // created: {
    //     type: Date,
    //     default: moment().format()
    // }

}, {timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}});

module.exports = mongoose.model('PostNotifications', NotificationsSchema, 'post_notifications');
