const db = require('../models');
const Playlists = db.playlists;
const Videos = db.videos;
exports.add = async (req, res) => {
    const data = req.body;
    await Playlists.create(data);
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
        include: [{model: Videos, as: 'videos'}]
    });

    res.json(playlists);
};


exports.updatePrivacy = async (req, res) => {
    const {id, privacy} = req.body;
    console.log(id, privacy)
    // await Playlists.update();
};
