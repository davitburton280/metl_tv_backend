const db = require('../models');
const Playlists = db.playlists;
const Videos = db.videos;
const Channels = db.channels;
const PlaylistsVideos = db.playlists_videos;

exports.add = async (req, res) => {
    const data = req.body;
    await Playlists.create(data);
    res.json('OK');
};
exports.addVideos = async (req, res) => {
    const data = req.body;
    const videoIds = JSON.parse(data.video_ids);
    videoIds.map(async (id) => {
        await PlaylistsVideos.create({playlist_id: data.playlist_id, video_id: id});
    });
    console.log(videoIds)
    res.json('OK');
};

exports.get = async (req, res) => {
    console.log('playlist get!!!')
    const playlists = await Playlists.findAll({include: [{model: Videos, as: 'videos'}]});
    console.log(playlists)
    res.json(playlists);
};

exports.getById = async (req, res) => {
    const playlists = await Playlists.findOne({
        where: {id: req.query.id},
        include: [{model: Videos, as: 'videos', include: [{model: Channels, as: 'channel'}]}]
    });

    res.json(playlists);
};


exports.updatePrivacy = async (req, res) => {
    const {id, privacy} = req.body;
    console.log(id, privacy)
    // await Playlists.update();
};
