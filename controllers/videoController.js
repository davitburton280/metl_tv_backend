const db = require('../models');
const Users = db.users;
const Channels = db.channels;
const VideoCategories = db.video_categories;
const VideoTags = db.video_tags;
const PrivacyTypes = db.privacy_types;


const VideoStreams = require('../mongoose/video_streams');
const to = require('../helpers/getPromiseResult');

const Videos = db.videos;

const sequelize = require('sequelize');
const Op = sequelize.Op;

exports.getVideos = async (req, res) => {
    let v = await Videos.findAll({include: [{model: Users, include: [{model: Channels}]}]});
    res.json(v);
};

exports.saveVideoToken = async (req, res) => {
    const data = req.body;
    const {token, name} = data;

    let v = await Videos.findOne({where: {token: token}});

    if (!v) {
        let video = await Videos.create(data);
        data.tags.map(async (t) => {
            await VideoTags.create({name: t, video_id: video.id})
        })
    }

    // const videoStream = await VideoStreams.findOne({token: token});
    // if (!videoStream) {
    //     const videoStreams = new VideoStreams(req.body);
    //     await to(videoStreams.save());
    // } else {
    //     console.log(req.body)
    //     console.log('name', name)
    //     videoStream.name = name;
    //     videoStream.save();
    // }

    // const user = await Users.findOne({where: {username: username}});
    res.json('OK');
};


exports.saveVideoData = async (req, res) => {
    let data = req.body;
    let videoSettings = JSON.parse(data.video_settings);
    // let videoSettings = data.video_settings;
    console.log(videoSettings)


    uploadVideoStreamFile(req, res, async (err) => {


        let privacy_id = await PrivacyTypes.findOne({where: {name: videoSettings.privacy}, attributes: ['id']});

        console.log(privacy_id.dataValues)

        let d = {
            name: videoSettings.name,
            description: videoSettings.description,
            thumbnail: videoSettings.thumbnail,
            category_id: videoSettings.category_id,
            privacy_id: privacy_id.dataValues.id,
            author: data.full_name,
            avatar: data.avatar,
            filename: data.video_name,
            status: 'recorded'
        };

        let found = await Videos.update(d, {where: {status: 'live', author_id: data.author_id}});


        // let found = await to(VideoStreams.findOne({status: 'pending', username: data.username}));
        // console.log(found)
        // found.name = videoSettings.name;
        // found.description = videoSettings.description;
        // found.tags = videoSettings.tags;
        // found.thumbnail = videoSettings.thumbnail;
        // found.category = videoSettings.category;
        // found.author = data.full_name;
        // found.avatar = data.avatar;
        // found.filename = data.video_name;
        // found.status = 'recorded';
        // await found.save();

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

exports.getCategories = async (req, res) => {
    let vc = await VideoCategories.findAll();
    res.json(vc);
};

exports.getUserVideos = async (req, res) => {
    console.log(req.query)
    // let v = await Videos.findAll({author_id: req.query.user_id});
    let v = await Users.findOne({where: {id: req.query.user_id}, include: [{model: Videos}],});
    res.json(v);
};

exports.getVideoById = async (req, res) => {
    let v = await Videos.findOne({
        where: {id: req.query.id},
        include: [{model: Channels}, {model: VideoTags, as: 'tags'}]
    });
    res.json(v);
};

exports.getVideosByAuthor = async (req, res) => {
    let v = await Users.findAll({include: [{model: Videos}]});
    res.json(v);
};

exports.searchInVideosByAuthor = async (req, res) => {
    let search = req.query.search;
    let v = await Users.findAll({
        include: [{model: Videos}],
        where: sequelize.where(sequelize.col('`videos`.`name`'), 'like', '%' + search + '%'),
    });
    res.json(v);
};


exports.searchInUserVideos = async (req, res) => {
    let {user_id, search} = req.query;
    let v = await Users.findOne({
        include: [{
            model: Videos,
            where: sequelize.where(sequelize.col('`videos.name`'), 'like', '%' + search + '%')
        }],
        where: {
            id: user_id
        },
    });
    res.json(v);
};

exports.removeVideoThumbnail = async (req, res) => {

};
