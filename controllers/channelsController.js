const db = require('../models');
const Users = db.users;
const Channels = db.channels;
const Videos = db.videos;

exports.get = async (req, res) => {
    console.log('here!!!!!!!!!!!!!')
    let channels = await Channels.findAll({include: [{model: Videos}, {model: Users}]});
    res.json(channels);
};
