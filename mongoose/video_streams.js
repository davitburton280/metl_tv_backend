let mongoose = require('mongoose')
const moment = require('moment');

// connects to mongo db
// mongoose.connect('mongodb://localhost/chat');

let VideoStreamsSchema = new mongoose.Schema({
    name: {
        type: String
    },
    token: {
        type: String
    },
    username: {
        type: String
    },
    messages: {
        type: [
            // {lat: {type: Number}, lng: {type: Number}}
            {from: {type: String}, to: {type: String}, message: {type: String}}
        ],
        default: []
    },
    status: {
        type: String
    },
    created: {
        type: Date,
        default: moment().format()
    }

}, {strict: false});

module.exports = mongoose.model('Video_Streams', VideoStreamsSchema);
