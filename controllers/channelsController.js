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
const { FILTER_SORTING_FIELDS,
    FILTER_SORTINH_VALUES } = require('../helpers/filters')

exports.get = async (req, res) => {
    // console.log('here!!!!!!!!!!!!!')
    let channels = await Channels.findAll({ include: [{ model: Videos }, { model: Users, as: 'subscribers' }] });
    res.json(channels);
};

exports.getSubscriptions = async (req, res) => {
    console.log('get subscriptions!!!')
    let channels = await Users.findOne({
        where: { id: req.query.user_id },
        include: [{
            model: Channels,
            as: 'subscriptions',
            include: [{ model: Videos, as: 'videos', attributes: ['id'] }, { model: Users, as: 'user' }]
        }]
    });
    // console.log(channels)
    res.json(channels);
};

exports.searchChannelVideos = async (req, res) => {
    let { search, user_id, filters } = req.query;
    let whereFilters = videoController.getVideoFiltersQuery(JSON.parse(filters));
    const serachedEmementsList = search.split(' ');
    console.log('search channel with videos!!!')
    console.log(whereFilters)
    const or = [];
    if (serachedEmementsList.length === 1) {
        or.push({
            name: {
                [Op.like]: '%' + search + '%'
            }
        },
            sequelize.where(sequelize.col('`videos`.`name`'), 'like', '%' + search + '%'))
    } else {
        serachedEmementsList.map(item => {
            or.push({
                name: {
                    [Op.like]: '%' + item + '%'
                }
            })
        });
        or.push(sequelize.where(sequelize.col('`videos`.`name`'), 'like', '%' + search + '%'))
    }

    // let userWhere = user_id ? sequelize.where(sequelize.col('subscribers->channel_subscribers.subscriber_id'), user_id) : {};
    if (search) {


        let channels = await Channels.findAll(
            {
                include: [
                    { model: Videos, where: whereFilters, required: false, include: [{ model: Tags, as: 'tags' }] },
                    { model: Users, as: 'user' },
                    { model: Users, as: 'subscribers' }
                ],
                where: {
                    [Op.or]: or,
                },
            });
        res.json(channels);
    } else {
        res.json([])
    }
};

exports.subscribeToChannel = async (req, res) => {
    let { user_id, channel_id } = req.body;


    let subscribedToChannel = await ChannelSubscribers.findOne({
        where: {
            subscriber_id: user_id,
            channel_id: channel_id
        },
        attributes: { exclude: ['created_at', 'updated_at'] },
    });

    if (!subscribedToChannel) {

        // Getting maximum position id of the user's subscriptions
        let userSubscriptions = await ChannelSubscribers.findOne({
            where: { subscriber_id: user_id },
            attributes: [sequelize.fn('MAX', sequelize.col('position_id'))],
            raw: true
        });

        // await Channels.update();
        let i = await Channels.increment('subscribers_count', { by: 1, where: { id: channel_id } });
        console.log(i)

        await ChannelSubscribers.create({
            subscriber_id: user_id,
            channel_id: channel_id,
            position_id: (userSubscriptions['MAX(`position_id`)'] + 1) || 1
        });

        let channelSubscribers = await Channels.findOne({ where: { id: channel_id }, attributes: ['subscribers_count'] });
        console.log(channelSubscribers.dataValues)
        res.json({ status: 'Subscribed', ...channelSubscribers.dataValues });
        // res.json('Subscribed');

    } else {


        await Channels.decrement('subscribers_count', { by: 1, where: { id: channel_id } });

        await ChannelSubscribers.destroy({
            where:
            {
                subscriber_id: user_id,
                channel_id: channel_id
            }
        });

        let channelSubscribers = await Channels.findOne({ where: { id: channel_id }, attributes: ['subscribers_count'] });
        console.log(channelSubscribers.dataValues)
        res.json({ status: 'Unsubscribed', ...channelSubscribers.dataValues });
        // res.json('Unsubscribed');
    }


};

exports.checkChannelSubscription = async (req, res) => {
    let { user_id, channel_id } = req.query;

    let channelSubscriber = await ChannelSubscribers.findOne({
        where: {
            subscriber_id: user_id,
            channel_id: channel_id
        },
        attributes: { exclude: ['created_at', 'updated_at'] },
    });

    let channelSubscribers = await Channels.findOne({ where: { id: channel_id }, attributes: ['subscribers_count'] });
    console.log(channelSubscribers.dataValues)
    res.json({ status: (channelSubscriber === null ? 'Unsubscribed' : 'Subscribed'), ...channelSubscribers.dataValues });

};

exports.getSubscribers = async (req, res) => {
    let { user_id } = req.query;
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
            { model: Users, attributes: ['username'], as: 'user' }
        ],
        order: [sequelize.col('subscribers->channel_subscribers.position_id')],
        attributes: { exclude: ['createdAt', 'updatedAt'] },
    }).map(it => {
        it.subscribers_count = it.subscribers.length;
        return it;
    });

    res.json(userSubscriptions)
};

exports.changeSubscriptionPriority = async (req, res) => {
    let { user_id, rows } = req.body;
    rows = JSON.parse(rows);

    console.log(rows)
    console.log('change subscription priority!!!!!')

    rows.map(async (r) => {
        await ChannelSubscribers.update({ position_id: rows.indexOf(r) + 1 }, {
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


        const { id, ...rest } = req.body;
        rest.description = nl2br(rest.description, false)
        req.query = req.body;


        await Channels.update(rest, { where: { id: id } });
        let userInfo = await usersController.getUserInfo(req, res);
        await usersController.changeJwt({ id: id, ...rest }, res);
        // res.json(userInfo);
    }
};


exports.saveChannelDetails = async (req, res) => {
    let data = req.body
    const { id, ...rest } = data;
    req.query = req.body;
    await Channels.update(rest, { where: { id: id } });
    await usersController.changeJwt(data, res);
    // let userInfo = await usersController.getUserInfo(req, res);
    // res.json(userInfo);
};


exports.getChannelSubscribers = async (req, res) => {
    let { id } = req.query;
    let channelSubscribers = await Channels.findOne({
        where: { id },
        include: [
            { model: Users, as: 'subscribers', attributes: ['id', 'avatar', 'username', 'first_name', 'last_name'] }
        ]
    });

    res.json(channelSubscribers);
};

exports.getChanelDetail = async (req, res) => {
    try {
        const { id } = req.params
        const chanel = await Channels.findOne({ where: { id } })
        return res.send({ message: 'ok', data: chanel })
    } catch (error) {
        return res.status(500).send({ message: 'Something went wrong' })
    }
}

exports.update = async (req, res) => {
    try {
        const { id } = req.params
        const { avatar, cover, name, description } = req.body
        let updateBody = { avatar, cover, name, description }

        Object.keys(updateBody).map(item => {
            if (!updateBody[item]) delete updateBody[item]
        })

        await Channels.update(updateBody, { where: { id } })
        return res.send({ message: 'ok', data: id })
    } catch (error) {
        return res.status(500).send({ message: 'Something went wrong' })
    }
}

const UPLOAD_DATE_FILTER_TYPES = {
    lastHour: 1,
    today: 2,
    thisWeek: 3,
    thisMount: 4,
    thisYear: 5
}

exports.getChanelVideos = async (req, res) => {
    try {
        let { id, page, limit, uploadDate, category, search } = req.body
        const currentDate = new Date()

        const sort = [FILTER_SORTING_FIELDS.postsFiltersFields.created_at, FILTER_SORTINH_VALUES.desc];

        if (!limit) limit = 20
        if (!page) page = 1

        let filter = {};

        if (id) {
            filter['channel_id'] = +id
        }

        if (search) {
            filter['name'] = {
                [Op.like]: `%${search}%`
            }
        }

        if (uploadDate) {
            switch (uploadDate) {
                case UPLOAD_DATE_FILTER_TYPES.lastHour:
                    filter['created_at'] = {
                        [Op.lt]: new Date(currentDate.setHours(currentDate.getHours() - 1)),
                        [Op.gt]: currentDate
                    }
                    break;
                case UPLOAD_DATE_FILTER_TYPES.thisMount:
                    filter['created_at'] = {
                        [Op.lt]: new Date(currentDate.setDate(1)),
                        [Op.gt]: currentDate
                    }
                    break;
                case UPLOAD_DATE_FILTER_TYPES.thisWeek:
                    filter['created_at'] = {
                        [Op.lt]: new Date(currentDate.setDate(currentDate.getDate() - 7)),
                        [Op.gt]: currentDate
                    }
                    break;
                case UPLOAD_DATE_FILTER_TYPES.thisYear:
                    filter['created_at'] = {
                        [Op.lt]: new Date(currentDate.setFullYear(currentDate.getUTCFullYear() - 1)),
                        [Op.gt]: currentDate
                    }
                    break;
                case UPLOAD_DATE_FILTER_TYPES.today:
                    filter['created_at'] = {
                        [Op.lt]: new Date(new Date(currentDate.setHours(0)).setMinutes(0)),
                        [Op.gt]: currentDate
                    }
                    break;
            }
        }

        if (category && category.length) {
            filter['channel_id'] = {
                [Op.in]: category
            }
        }


        const [list, totalCount] = await Promise.all([
            Videos.findAll({
                where: filter,
                limit: +limit,
                offset: (+page - 1) * Number(limit),
                order: [
                    sort
                ]
            }),
            Videos.count({ where: filter })
        ])
        return res.send({
            message: 'video list', data: {
                list, totalCount
            }
        })
    } catch (error) {
        return res.status(500).send({ message: 'Something went wrong' })
    }
}