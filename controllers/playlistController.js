const db = require('../models');
const Playlists = db.playlists;
const Videos = db.videos;
const Channels = db.channels;
const PlaylistsVideos = db.playlists_videos;
const sequelize = require('sequelize');

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
        where: {id: req.query.playlist_id},
        include: [{model: Videos, as: 'videos', include: [{model: Channels, as: 'channel'}]}],
        order: [sequelize.col('`videos->playlists_videos.position`')]
    });

    res.json(playlists);
};


exports.updatePrivacy = async (req, res) => {
    const {id, privacy} = req.body;
    console.log(id, privacy)
    // await Playlists.update();
};

exports.updateVideoPosition = async (req, res) => {
    let {playlist_id, rows} = req.body;
    rows = JSON.parse(rows);
    rows.videos.map(async (r, index) => {
        await PlaylistsVideos.update({position: index + 1}, {
            where: {
                playlist_id: playlist_id,
                video_id: r.id
            }
        });
    });
    res.json('updated');
};

exports.removeVideo = async (req, res) => {
    const {playlist_id, video_id} = req.query;
    await PlaylistsVideos.destroy({where: {playlist_id: playlist_id, video_id: video_id}});
    this.getById(req, res);
};
