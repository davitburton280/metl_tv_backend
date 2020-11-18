const db = require('../models');
const Users = db.users;
const Channels = db.channels;
const Videos = db.videos;
const ChannelSubscribers = db.channel_subscribers

const sequelize = require('sequelize');
const Op = sequelize.Op;

exports.get = async (req, res) => {
    console.log('here!!!!!!!!!!!!!')
    let channels = await Channels.findAll({include: [{model: Videos}, {model: Users, as: 'subscribers'}]});
    res.json(channels);
};

// exports.getBy

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
            where:
                {subscriber_id: user_id},
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

exports.getUserChannelSubscriptions = async (req, res) => {
    let {user_id} = req.query;
    console.log('user channel subscriptions!!!!!')
    let userSubscriptions = await Channels.findAll({
        // where: {user_id: user_id},
        //
        include: [
            {
                model: Users, as: 'subscribers',
                attributes: ['email', 'full_name', 'id'],
                where:
                    sequelize.where(sequelize.col('subscribers->channel_subscribers.subscriber_id'), user_id),
            }
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

    // let {user_id} = req.body;
    console.log(rows)
    console.log('change subscription priority!!!!!')
    // let userSubscriptions = await Users.findAll({
    //     include: [
    //         {
    //             model: Channels, as: 'subscriptions',
    //             attributes: {exclude: ['avatar', 'role_id', 'status_id', 'cover', 'subscribers_count', 'createdAt', 'updatedAt']},
    //             where:
    //                 sequelize.where(sequelize.col('subscriptions->channel_subscribers.subscriber_id'), user_id),
    //         }
    //     ],
    //     attributes: {exclude: ['avatar', 'cover', 'role_id', 'status_id', 'phone', 'birthday', 'gender', 'password', 'createdAt', 'updatedAt']},
    // });

    // let userSubscriptions = await Channels.findAll({
    //     // where: {user_id: user_id},
    //     where: sequelize.where(sequelize.col('subscribers->channel_subscribers.subscriber_id'), user_id),
    //     include: [
    //         {
    //             model: Users, as: 'subscribers',
    //             through: {attributes: ['position_id']},
    //             attributes: ['full_name', 'id'],
    //         }
    //     ],
    //     attributes: {exclude: ['createdAt', 'updatedAt']},
    // });

    rows.map(async (r) => {
        await ChannelSubscribers.update({position_id: rows.indexOf(r) + 1}, {
            where: {
                subscriber_id: user_id,
                channel_id: r.id
            }
        });
    });

    // console.log(userSubscriptions[0])


    // userSubscriptions[0].updateAttributes()
    res.json('updated')
};

