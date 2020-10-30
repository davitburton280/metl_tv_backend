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
    let videoSettings = JSON.parse(data.video_settings);
    // let videoSettings = data.video_settings;
    console.log(videoSettings)

    let found = await to(VideoStreams.findOne({status: 'pending', username: data.username}));
    console.log(found)
    found.name = videoSettings.name;
    found.description = videoSettings.description;
    found.tags = videoSettings.tags;
    found.category = videoSettings.category;
    found.author = data.full_name;
    found.filename = data.video_name;
    found.status = 'recorded';
    found.save();


    // uploadVideoStreamFile(req, res, async (err) => {
    //
    //
    //     console.log('condition!!!!!')
    //
    //     console.log(videoSettings)
    //     console.log({
    //         name: videoSettings.name,
    //         description: videoSettings.description,
    //         tags: videoSettings.tags,
    //         category: videoSettings.category,
    //         author: data.full_name,
    //         filename: data.video_name,
    //         status: 'recorded'
    //     })
    //
    //
    //
    //
    //     await to(VideoStreams.updateOne({status: 'pending', username: data.username}, {
    //         name: videoSettings.name,
    //         description: videoSettings.description,
    //         tags: videoSettings.tags,
    //         category: videoSettings.category,
    //         author: data.full_name,
    //         filename: data.video_name,
    //         status: 'recorded'
    //     }));
    res.json('OK');
    // })

};


exports.saveVideoMessage = async (req, res) => {
    const {token, from, message} = req.body;
    console.log(token)
    const videoStream = await VideoStreams.findOne({token: token});
    if (videoStream) {
        videoStream.messages.push({from: from, message: message});
        videoStream.save();
    }
    res.json('OK');
    console.log(videoStream)

};

exports.getUserVideos = async (req, res) => {
    let v = await VideoStreams.find({username: req.query.username});
    res.json(v);
};

exports.getVideoById = async (req, res) => {
    let v = await VideoStreams.findOne({_id: req.query._id});
    res.json(v);
};
