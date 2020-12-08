const db = require('../models');
const Playlists = db.playlists;
const Videos = db.videos;
exports.add = async (req, res) => {
    const data = req.body;
    await Playlists.create(data);
    res.json('OK');
};

exports.get = async (req, res) => {
    const playlists = await Playlists.findAll({});
    res.json(playlists);
};

exports.getById = async (req, res) => {
    const playlists = await Playlists.findOne({
        id: req.query.id,
        // include: [{model: Videos}]
    });
    res.json(playlists);
};
