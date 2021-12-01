const db = require('../models');
const Users = db.users;
const Channels = db.channels;
const Videos = db.videos;
const Tags = db.tags;
const ChannelSubscribers = db.channel_subscribers;

const usersController = require('./usersController');
const videoController = require('./videoController');

const sequelize = require('sequelize');
const Op = sequelize.Op;
const nl2br = require('../helpers/nl2br');
const showIfErrors = require('../helpers/showIfErrors');
const getFullName = require('../helpers/getFullNameCol');

exports.get = async (req, res) => {
    // console.log('here!!!!!!!!!!!!!')
    let channels = await Channels.findAll({include: [{model: Videos}, {model: Users, as: 'subscribers'}]});
    res.json(channels);
};

exports.getSubscriptions = async (req, res) => {
    console.log('get subscriptions!!!')
    let channels = await Users.findOne({
        where: {id: req.query.user_id},
        include: [{
            model: Channels,
            as: 'subscriptions',
            include: [{model: Videos, as: 'videos', attributes: ['id']}, {model: Users, as: 'user'}]
        }]
    });
    // console.log(channels)
    res.json(channels);
};

exports.searchChannelVideos = async (req, res) => {
    let {search, user_id, filters} = req.query;
    let whereFilters = videoController.getVideoFiltersQuery(JSON.parse(filters));
    console.log('search channel with videos!!!')
    console.log(whereFilters)
    // let userWhere = user_id ? sequelize.where(sequelize.col('subscribers->channel_subscribers.subscriber_id'), user_id) : {};
    if (search) {


        let channels = await Channels.findAll(
            {
                include: [
                    {model: Videos, where: whereFilters, required: false, include: [{model: Tags, as: 'tags'}]},
                    {model: Users, as: 'user'},
                    {model: Users, as: 'subscribers'}
                ],
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
                    ],
                },
            });
        res.json(channels);
    } else {
        res.json([])
    }
};

exports.subscribeToChannel = async (req, res) => {
    let {user_id, channel_id} = req.body;


    let subscribedToChannel = await ChannelSubscribers.findOne({
        where: {
            subscriber_id: user_id,
            channel_id: channel_id
        },
        attributes: {exclude: ['created_at', 'updated_at']},
    });

    if (!subscribedToChannel) {

        // Getting maximum position id of the user's subscriptions
        let userSubscriptions = await ChannelSubscribers.findOne({
            where: {subscriber_id: user_id},
            attributes: [sequelize.fn('MAX', sequelize.col('position_id'))],
            raw: true
        });

        // await Channels.update();
        let i = await Channels.increment('subscribers_count', {by: 1, where: {id: channel_id}});
        console.log(i)

        await ChannelSubscribers.create({
            subscriber_id: user_id,
            channel_id: channel_id,
            position_id: (userSubscriptions['MAX(`position_id`)'] + 1) || 1
        });

        let channelSubscribers = await Channels.findOne({where: {id: channel_id}, attributes: ['subscribers_count']});
        console.log(channelSubscribers.dataValues)
        res.json({status: 'Subscribed', ...channelSubscribers.dataValues});
        // res.json('Subscribed');

    } else {


        await Channels.decrement('subscribers_count', {by: 1, where: {id: channel_id}});

        await ChannelSubscribers.destroy({
            where:
                {
                    subscriber_id: user_id,
                    channel_id: channel_id
                }
        });

        let channelSubscribers = await Channels.findOne({where: {id: channel_id}, attributes: ['subscribers_count']});
        console.log(channelSubscribers.dataValues)
        res.json({status: 'Unsubscribed', ...channelSubscribers.dataValues});
        // res.json('Unsubscribed');
    }


};

exports.checkChannelSubscription = async (req, res) => {
    let {user_id, channel_id} = req.query;

    let channelSubscriber = await ChannelSubscribers.findOne({
        where: {
            subscriber_id: user_id,
            channel_id: channel_id
        },
        attributes: {exclude: ['created_at', 'updated_at']},
    });

    let channelSubscribers = await Channels.findOne({where: {id: channel_id}, attributes: ['subscribers_count']});
    console.log(channelSubscribers.dataValues)
    res.json({status: (channelSubscriber === null ? 'Unsubscribed' : 'Subscribed'), ...channelSubscribers.dataValues});

};

exports.getSubscribers = async (req, res) => {
    let {user_id} = req.query;
    let fullName = getFullName();
    console.log('user channel subscriptions!!!!!')
    let userSubscriptions = await Channels.findAll({
        // where: {user_id: user_id},
        //
        include: [
            {
                model: Users, as: 'subscribers',
                attributes: ['email', 'id'],
                where:
                    sequelize.where(sequelize.col('subscribers->channel_subscribers.subscriber_id'), user_id),
            },
            {model: Users, attributes: ['username'], as: 'user'}
        ],
        order: [sequelize.col('subscribers->channel_subscribers.position_id')],
        attributes: {exclude: ['createdAt', 'updatedAt']},
    }).map(it => {
        it.subscribers_count = it.subscribers.length;
        return it;
    });

    res.json(userSubscriptions)
};

exports.changeSubscriptionPriority = async (req, res) => {
    let {user_id, rows} = req.body;
    rows = JSON.parse(rows);

    console.log(rows)
    console.log('change subscription priority!!!!!')

    rows.map(async (r) => {
        await ChannelSubscribers.update({position_id: rows.indexOf(r) + 1}, {
            where: {
                subscriber_id: user_id,
                channel_id: r.id
            }
        });
    });

    res.json('updated')
};

exports.saveDescription = async (req, res) => {

    if (!showIfErrors(req, res)) {


        const {id, ...rest} = req.body;
        rest.description = nl2br(rest.description, false)
        req.query = req.body;


        await Channels.update(rest, {where: {id: id}});
        let userInfo = await usersController.getUserInfo(req, res);
        await usersController.changeJwt({id: id, ...rest}, res);
        // res.json(userInfo);
    }
};


exports.saveChannelDetails = async (req, res) => {
    let data = req.body
    const {id, ...rest} = data;
    req.query = req.body;
    await Channels.update(rest, {where: {id: id}});
    await usersController.changeJwt(data, res);
    // let userInfo = await usersController.getUserInfo(req, res);
    // res.json(userInfo);
};


exports.getChannelSubscribers = async (req, res) => {
    let {id} = req.query;
    let channelSubscribers = await Channels.findOne({
        where: {id},
        include: [
            {model: Users, as: 'subscribers', attributes: ['id', 'avatar', 'username', 'first_name', 'last_name']}
        ]
    });

    res.json(channelSubscribers);
};