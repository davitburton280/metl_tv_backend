let mongoose = require('mongoose')
const moment = require('moment');

// connects to mongo db
// mongoose.connect('mongodb://localhost/chat');

let UserSchema = new mongoose.Schema({
    full_name: {
        type: String
    },
    username: {
        type: String
    },
    birthday: {
        type: String
    },
    avatar: {
        type: String
    },
    cover: {
        type: String
    },
    phone: {
        type: String
    },
    password: {
        type: String
    },
    gender: {
        type: String
    },
    likes: {
        type: Number
    },
    dislikes: {
        type: Number
    },
    status: {
        type: String
    },
    created: {
        type: Date,
        default: moment().format()
    }

}, {strict: false});

module.exports = mongoose.model('User', UserSchema);
