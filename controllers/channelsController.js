const db = require('../models');
const Users = db.users;
const Channels = db.channels;
const Videos = db.videos;

const sequelize = require('sequelize');
const Op = sequelize.Op;

exports.get = async (req, res) => {
    console.log('here!!!!!!!!!!!!!')
    let channels = await Channels.findAll({include: [{model: Videos}, {model: Users}]});
    res.json(channels);
};

exports.searchChannelVideos = async (req, res) => {
    let search = req.query.search;
    let channels = await Channels.findAll(
        {
            include: [{model: Videos}, {model: Users}],
            where: {
                [Op.or]: [
                    {
                        name: {
                            [Op.like]: '%' + search + '%'
                        }
                    },
                    sequelize.where(sequelize.col('`videos`.`name`'), 'like', '%' + search + '%')
                    // {
                    //     id: {
                    //         [Op.like]: '%' + search + '%'
                    //     }
                    // }
                ]

            }
        });
    res.json(channels);
};
