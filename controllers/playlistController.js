const db = require('../models');
const Playlists = db.playlists;
exports.add = async (req, res) => {
    const data = req.body;
    await Playlists.create(data);
    res.json('OK');
};

exports.get = async (req, res) => {
    const playlists = await Playlists.findAll({});
    res.json(playlists);
};
