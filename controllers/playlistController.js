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
        let lastPosition = await PlaylistsVideos.findOne({
            where: {video_id: id},
            attributes: [sequelize.fn('MAX', sequelize.col('position'))],
        });
        await PlaylistsVideos.create({
            playlist_id: data.playlist_id,
            video_id: id,
            position: (lastPosition['MAX(`position_id`)'] + 1) || 1
        });
    });
    console.log(videoIds)
    res.json('OK');
};

exports.addVideosToOtherPlaylists = async (req, res) => {
    const data = req.body;
    console.log(data)
    data.playlists.map(async (p) => {
        await PlaylistsVideos.destroy({where: {video_id: data.video_id}});
        if (p.checked) {
            let lastPosition = await PlaylistsVideos.findOne({
                where: {video_id: data.video_id},
                attributes: [sequelize.fn('MAX', sequelize.col('position'))],
            });
            await PlaylistsVideos.create({
                playlist_id: p.id,
                video_id: data.video_id,
                position: (lastPosition['MAX(`position_id`)'] + 1) || 1
            });
        }
    });
    res.json('OK');
};

exports.get = async (req, res) => {
    console.log('playlist get!!!')
    const {channel_id} = req.query;
    const where = channel_id ? {channel_id: channel_id} : {};
    const playlists = await Playlists.findAll({
        include: [{model: Videos, as: 'videos'}],
        where: where
    });
    // console.log(playlists)
    res.json(playlists);
};

exports.search = async (req, res) => {
    const {search} = req.query;
    const playlists = await Playlists.findAll({
        include: [{model: Videos, as: 'videos'}],
        where: {name: search}
    });
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
    await Playlists.update({privacy: privacy}, {where: {id: id}});
    req.query.playlist_id = req.body.id;
    this.getById(req, res);
};

exports.changeThumbnail = async (req, res) => {
    let data = req.body;
    console.log('thumbnail!!!!')
    console.log(data)
    await Playlists.update({thumbnail: data.thumbnail}, {where: {id: data.playlist_id}});
    req.query = req.body;
    this.getById(req, res);
};

exports.updatePlaylistInfo = async (req, res) => {
    let data = req.body;
    const {id, name, description} = data
    await Playlists.update({name: name, description: description}, {where: {id: id}});
    req.query.playlist_id = req.body.id;
    console.log(req.query)
    this.getById(req, res);
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
