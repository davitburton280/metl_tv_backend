const db = require('../models');
const Users = db.users;

const VideoStreams = require('../mongoose/video_streams');
const to = require('../helpers/getPromiseResult');

exports.saveVideoToken = async (req, res) => {
    const {token, name} = req.body;
    const videoStream = await VideoStreams.findOne({token: token});
    if (!videoStream) {
        const videoStreams = new VideoStreams(req.body);
        await to(videoStreams.save());
    } else {
        console.log(req.body)
        console.log('name', name)
        videoStream.name = name;
        videoStream.save();
    }
    // const user = await Users.findOne({where: {username: username}});
    res.json('OK');
};


exports.saveVideoData = async (req, res) => {
    let data = req.body;
    console.log(data)
    uploadVideoStreamFile(req, res, async (err) => {
        await to(VideoStreams.updateOne({status: 'pending', username: data.username}, {
            name: data.video_name,
            status: 'recorded'
        }));
        res.json('OK');
    })

};


exports.saveVideoMessage = async (req, res) => {
    const {token, from, message} = req.body;
    console.log(token)
    const videoStream = await VideoStreams.findOne({token: token});
    if (videoStream) {
        videoStream.messages.push({from: from, message: message});
        videoStream.save();
    }
    console.log(videoStream)

};

exports.getUserVideos = async(req, res) => {
    let v = await VideoStreams.find({username: req.query.username});
    res.json(v);
};