const db = require('../models');
const Users = db.users;

const VideoStreams = require('../mongoose/video_streams');
const to = require('../helpers/getPromiseResult');

exports.saveVideoToken = async (req, res) => {

    // const {username, token} = req.body;
    const videoStreams = new VideoStreams(req.body);
    await to(videoStreams.save());
    // const user = await Users.findOne({where: {username: username}});
    res.json('OK');
};

exports.saveVideoData = async (req, res) => {
    let data = req.body;

    uploadVideoStreamFile(req, res, async (err) => {
        await to(VideoStreams.updateOne({status: 'pending', username: data.username}, {
            name: data.video_name,
            status: 'recorded'
        }));
        res.json('OK');
    })
};