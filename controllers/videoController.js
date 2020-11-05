// const db = require('../models');
// const Users = db.users;

const Users = require('../mongoose/users');

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


    uploadVideoStreamFile(req, res, async (err) => {
        let found = await to(VideoStreams.findOne({status: 'pending', username: data.username}));
        console.log(found)
        found.name = videoSettings.name;
        found.description = videoSettings.description;
        found.tags = videoSettings.tags;
        found.thumbnail = videoSettings.thumbnail;
        found.category = videoSettings.category;
        // found.author = data.full_name;
        found.author_id = data.author_id;
        found.filename = data.video_name;
        found.status = 'recorded';
        await found.save();

        res.json('OK');
    })

};

exports.saveVideoThumbnail = async (req, res) => {
    const data = req.body;
    const file = req.file;
    // console.log('files!!!')
    // console.log(req.file)
    uploadVideoThumbFile(req, res, async (err) => {
        res.json(file.filename)
    });
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
    let v = await VideoStreams.find({author_id: req.query.user_id});
    res.json(v);
};

exports.getVideoById = async (req, res) => {
    let v = await VideoStreams.findOne({_id: req.query._id});
    res.json(v);
};

exports.getVideosByAuthor = async (req, res) => {
    // let v = await VideoStreams.aggregate([
    //     {
    //         $group: {
    //             _id: "$author_id",
    //             obj: {$push: { name: "$name", thumbnail: "$thumbnail", avatar: "$avatar"}}
    //         }
    //     },
    //     // {
    //     //     $replaceRoot: {
    //     //         newRoot: {
    //     //             $let: {
    //     //                 vars: {obj: [{k: {$substr: ["$_id", 0, -1]}, v: "$obj"}]},
    //     //                 in: {$arrayToObject: "$$obj"}
    //     //             }
    //     //         }
    //     //     }
    //     // }
    // ]);

    const v = await Users.aggregate([
        {
            $lookup:
                {
                    from: 'video_streams',
                    localField: 'author_id',
                    foreignField: '_id',
                    as: 'user_videos'
                }
        }
    ]);
    //     .toArray(function(err, res) {
    //     if (err) throw err;
    //     console.log(res);
    //     // db.close();
    // });
    // const v = await Users.find({}).populate('video_streams');
    console.log(v)
    res.json(v);
};

exports.removeVideoThumbnail = async (req, res) => {

};
