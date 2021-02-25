const db = require('../models');
const Users = db.users;
const Channels = db.channels;
const ChatMessages = db.chat_messages;
const VideoCategories = db.video_categories;
const VideosTags = db.video_tags;
const Tags = db.tags;
const PrivacyTypes = db.privacy_types;
const UsersVideos = db.users_videos;
const PlaylistsVideos = db.playlists_videos;
const UsersTags = db.users_tags;

const usersController = require('../controllers/usersController');


const VideoStreams = require('../mongoose/video_streams');
const to = require('../helpers/getPromiseResult');
const showIfErrors = require('../helpers/showIfErrors');

const Videos = db.videos;
const Playlists = db.playlists;

const sequelize = require('sequelize');
const Op = sequelize.Op;

const fse = require('fs-extra');
const path = require('path');
const moment = require('moment');

exports.getVideos = async (req, res) => {
    let data = req.query;
    let {withPlaylists, trending, limit, tag} = data;
    let ret = {};
    let limitOption = limit ? {limit: +limit} : {};
    let trendingOption = +trending ? [['views', 'DESC']] : [['created_at', 'DESC']];
    let filters = data.filters ? JSON.parse(data.filters) : {};
    let whereFilters = this.getVideoFiltersQuery(filters);
    let whereTag = tag ? {name: tag} : {};

    console.log('get videos!!!')
    let v = await Videos.findAll({
        include: [
            {
                model: Users, as: 'user', include: [
                    {model: Channels, as: 'channel'}
                ]
            },
            {
                model: Channels,
                as: 'channel',
            },
            {
                model: Users, as: 'users_vids', attributes: ['username']
            },
            {
                model: Tags,
                as: 'tags',
                where: whereTag,
                required: !!tag
            }
        ],
        order: trendingOption,
        where: whereFilters,
        limitOption
    });
    ret['videos'] = v;
    if (+withPlaylists) {
        let p = await Playlists.findAll({include: [{model: Videos, as: 'videos', where: whereFilters}]});
        ret['playlists'] = p;
    }
    res.json(ret);
};


exports.getVideoFiltersQuery = (filters) => {
    let whereFilters = {};
    for (let group in filters) {
        if (group === 'date') {

            let filterValue = filters[group].value;
            console.log(filterValue)
            console.log(moment(filterValue).utc().format('YYYY-MM-DD HH:mm:ss'))
            whereFilters['`created_at`'] = {
                [Op.between]: [
                    moment(filterValue).utc().format('YYYY-MM-DD HH:mm:ss'),
                    moment().utc().format('YYYY-MM-DD HH:mm:ss')
                ]
            };

        } else if (group === 'duration') {
            let filterValue = filters[group].value;
            let minDuration = '00:00';
            let middleDuration = '00:30';
            let maxDuration = '59:59';
            whereFilters['`duration`'] = {
                [Op.between]: (filterValue === 'short' ? [minDuration, middleDuration] : [middleDuration, maxDuration])
            }
        }
    }
    return whereFilters;
};

exports.saveVideoToken = async (req, res) => {
    const data = req.body;
    const {token, name} = data;

    let v = await Videos.findOne({where: {token: token}});

    if (!v) {
        let video = await Videos.create(data);
        data.tags.map(async (t) => {
            let found = await Tags.findOne({where: {name: t.name}});

            if (!found) {
                let tag = await Tags.create({name: t.name});
                await VideosTags.create({tag_id: tag.id, video_id: video.id}, {fields: ['tag_id', 'video_id']});
            } else {
                await VideosTags.create({tag_id: found.id, video_id: video.id}, {fields: ['tag_id', 'video_id']});
            }
        });
        res.json(video);
    } else {
        res.json('OK');
    }

    // const videoStream = await VideoStreams.findOne({token: token});
    // if (!videoStream) {
    //     const videoStreams = new VideoStreams(req.body);
    //     await to(videoStreams.save());
    // } else {
    //     console.log(req.body)
    //     console.log('name', name)
    //     videoStream.name = name;
    //     videoStream.save();
    // }

    // const user = await Users.findOne({where: {username: username}});

};


exports.saveVideoData = async (req, res) => {
    let data = req.body;
    let videoSettings = JSON.parse(data.video_settings);
    // let videoSettings = data.video_settings;
    console.log(videoSettings)


    uploadVideoStreamFile(req, res, async (err) => {


        let privacy_id = await PrivacyTypes.findOne({where: {name: videoSettings.privacy}, attributes: ['id']});

        console.log(privacy_id.dataValues)

        let d = {
            name: videoSettings.name,
            description: videoSettings.description,
            thumbnail: videoSettings.thumbnail,
            category_id: videoSettings.category_id,
            privacy_id: privacy_id.dataValues.id,
            author: data.full_name,
            avatar: data.avatar,
            filename: data.video_name,
            duration: data.video_duration,
            status: 'recorded',
        };


        let video = await Videos.findOne({where: {status: 'live', author_id: data.author_id}});
        console.log('video id')
        console.log(video)


        let userVideo = await UsersVideos.create({
            // where: {
            user_id: data.author_id,
            video_id: video.id
            // }
        });
        await Videos.update(d, {where: {status: 'live', author_id: data.author_id}});


        // let found = await to(VideoStreams.findOne({status: 'pending', username: data.username}));
        // console.log(found)
        // found.name = videoSettings.name;
        // found.description = videoSettings.description;
        // found.tags = videoSettings.tags;
        // found.thumbnail = videoSettings.thumbnail;
        // found.category = videoSettings.category;
        // found.author = data.full_name;
        // found.avatar = data.avatar;
        // found.filename = data.video_name;
        // found.status = 'recorded';
        // await found.save();

        res.json('OK');
    })

};

exports.saveVideoThumbnail = async (req, res) => {
    const data = req.body;
    const file = req.file;
    // console.log('files!!!')
    // console.log(req.file)
    uploadVideoThumbFile(req, res, async (err) => {
        res.json(file.filename)
    });
};


// exports.saveVideoMessage = async (req, res) => {
//     const {token, from, message} = req.body;
//     console.log(token)
//     const videoStream = await VideoStreams.findOne({token: token});
//     if (videoStream) {
//         videoStream.messages.push({from: from, message: message});
//         videoStream.save();
//     }
//     res.json('OK');
//     console.log(videoStream)
//
// };

exports.getCategories = async (req, res) => {
    let data = req.query;
    console.log('get categories!!!')
    let whereAll = data.all ? {} : {
        where: {
            [Op.not]:
                {
                    name: 'All'
                }
        }
    };

    let vc = await VideoCategories.findAll(whereAll);
    res.json(vc);
};

exports.getUserVideos = async (req, res) => {
    console.log(req.query)
    let data = req.query;
    let {user_id, search} = data;
    // let v = await Videos.findAll({author_id: req.query.user_id});
    let where = search ? sequelize.where(sequelize.col('`videos.name`'), 'like', '%' + search + '%') : {};
    let filters = data.filters ? JSON.parse(data.filters) : {};
    let whereFilters = this.getVideoFiltersQuery(filters);

    let v = await Users.findOne({
        include: [{
            model: Videos, as: 'videos',
            where: [where, whereFilters],
            include: [
                {model: Channels, as: 'channel'}, {model: Playlists, as: 'playlists', attributes: ['id']}
            ]
        }, {model: Channels, as: 'channel'}],
        where: {
            id: user_id
        },
        order: [[sequelize.col(`videos.created_at`), 'desc']]
    });

    res.json(v);
};

exports.getUserSavedVideos = async (req, res) => {
    console.log(req.query)
    let userWhere = {id: req.query.user_id};
    let v = await Users.findOne({
        where: userWhere,
        include: [{
            model: Videos,
            as: 'users_vids',
            where: [sequelize.where(sequelize.col('`users_vids->users_videos`.`saved`'), 1)],
            include: [{model: Channels, as: 'channel'}]
        }],

    });
    res.json(v);
};

exports.getVideoById = async (req, res) => {
    let {id, playlist_id} = req.query;
    let idWhere = {id: id};
    // let playlistWhere = playlist_id ? sequelize.where(sequelize.col(`playlists->playlists_videos.playlist_id`), playlist_id) : {};
    console.log('get video by id!!!')
    let v = await Videos.findOne({
        // where: idWhere,
        where: [idWhere],
        // where: [idWhere, sequelize.where(sequelize.col(`users_vids->users_videos.user_id`), user_id)],
        include: [
            {
                model: Channels, as: 'channel', attributes: ['id', 'subscribers_count', 'name', 'avatar']
            },
            {
                model: Tags,
                as: 'tags',
                // required: false
            },
            {
                model: Users,
                as: 'users_vids',
                attributes: ['id', 'full_name', 'username'],
                // where: {id: user_id},
                // where: sequelize.where(sequelize.col(`users_vids->users_videos.user_id`), user_id),
                through: {attributes: ['liked', 'disliked', 'saved', 'viewed']}
            },
            {model: Playlists, as: 'playlists', attributes: ['id']} //where: playlistWhere
        ],
        attributes: ['id', 'author_id', 'likes', 'thumbnail', 'duration', 'name', 'dislikes', 'views', 'filename', 'status', 'created_at']
    });
    res.json(v);
};

exports.getVideosByAuthor = async (req, res) => {
    let data = req.query;
    let search = data.search;
    let filters = data.filters ? JSON.parse(data.filters) : {};
    let whereFilters = this.getVideoFiltersQuery(filters);
    let whereSearch = search ? sequelize.where(sequelize.col('`videos`.`name`'), 'like', '%' + search + '%') : {};
    let v = await Users.findAll(
        {
            include: [
                {model: Videos, as: 'videos', where: whereFilters},
                {model: Channels, as: 'channel', attributes: ['id', 'avatar', 'name']}
            ],
            order: [[sequelize.col(`videos.created_at`), 'desc']],
            where: whereSearch
        });
    res.json(v);
};

// exports.searchInUserVideos = async (req, res) => {
//     let data = req.query;
//     let {user_id, search} = data;
//     let where = search ? sequelize.where(sequelize.col('`videos.name`'), 'like', '%' + search + '%') : {};
//     let filters = data.filters ? JSON.parse(data.filters) : {};
//     let whereFilters = this.getVideoFiltersQuery(filters);
//     let v = await Users.findOne({
//         include: [{
//             model: Videos, as: 'videos',
//             where: [where, whereFilters]
//         }],
//         where: {
//             id: user_id
//         },
//         order: [[sequelize.col(`videos.created_at`), 'desc']]
//     });
//     res.json(v);
// };

exports.searchInAllVideos = async (req, res) => {
    let {search} = req.query;
    let v = await Videos.findAll({
        where: sequelize.where(sequelize.col('`videos.name`'), 'like', '%' + search + '%'),
        include: [{model: Channels, as: 'channel'}, {model: Playlists, as: 'playlists', attributes: ['id']}]
    });
    res.json(v);
};


exports.updateLikes = async (req, res) => {
    let data = req.body;
    const {user_id, video_id, likes, dislikes, likeStatus} = data;


    let found = await UsersVideos.findOne({
        where: {
            user_id: user_id,
            video_id: video_id
        }
    });

    console.log(found)

    if (!found) {
        await UsersVideos.create({...data, disliked: likeStatus === 'disliked', liked: likeStatus === 'liked'});

    } else {
        await UsersVideos.update({disliked: likeStatus === 'disliked', liked: likeStatus === 'liked'}, {
            where: {
                user_id: user_id,
                video_id: video_id
            }
        });
    }
    await Videos.update({dislikes: dislikes, likes: likes}, {where: {id: video_id}});
    res.json('OK');
};


exports.updateViews = async (req, res) => {
    let data = req.body;
    const {user_id, video_id} = data;

    let found = await UsersVideos.findOne({
        where: {
            user_id: user_id,
            video_id: video_id
        }
    });

    if (!found) {
        await UsersVideos.create({...data, viewed: 1});
    } else {
        await UsersVideos.update({viewed: 1}, {
            where: {
                user_id: user_id,
                video_id: video_id
            }
        });
    }

    await Videos.increment({views: 1}, {where: {id: video_id}});
    req.query.id = video_id;
    this.getVideoById(req, res);
};


exports.saveVideo = async (req, res) => {

    let data = req.body;
    const {user_id, video_id, saved} = data;
    console.log(data)

    let found = await UsersVideos.findOne({
        where: {
            user_id: user_id,
            video_id: video_id
        }
    });

    let ret;
    if (!found) {
        ret = await UsersVideos.create(data);

    } else {
        console.log('update')
        found.saved = saved;
        console.log(found)
        ret = await found.save();
        // await UsersVideos.update({saved: saved}, {
        //     where: {
        //         user_id: user_id,
        //         video_id: video_id
        //     }
        // });
    }
    res.json(ret);
};


exports.removeVideo = async (req, res) => {
    let data = req.query;
    let {id, token, filename} = data;
    console.log('remove video!!!')
    console.log(req.query)

    let file = path.join(path.join(__dirname, '../public/uploads/videos/') + filename);
    let removeResult;
    if (await fse.exists(file)) {
        removeResult = await to(fse.remove(file));
    }
    if (!removeResult) {
        if (id) {
            await to(PlaylistsVideos.destroy({where: {video_id: id}}));
            await to(UsersVideos.destroy({where: {video_id: id}}));
            await to(Videos.destroy({where: {id: id}}));
            await to(ChatMessages.destroy({where: {video_id: id}}));
            if (data.bigFileDetected) {
                res.status(423).json({msg: 'File size exceeds maximum size of 3Mb'})
            } else {
                await usersController.getUserInfo(req, res);
            }
            // removing live video by token
        } else if (token) {
            let v = await to(Videos.findOne({where: {token: token, status: 'live'}}));
            await to(ChatMessages.destroy({where: {video_id: v.id}}));
            await to(UsersVideos.destroy({where: {video_id: v.id}}));
            await to(Videos.destroy({where: {token: token, status: 'live'}}));
            res.json('removed live video');
        }
    }

};


exports.removeVideoThumbnail = async (req, res) => {

};

exports.saveVideoDetails = async (req, res) => {
    if (!showIfErrors(req, res)) {
        let data = req.body;
        console.log(data)
        await Videos.update({name: data.name}, {where: {id: data.video_id}});
        await VideosTags.destroy({where: {video_id: data.video_id}});
        let result = data.tags.map(async (t) => {

            let found = await Tags.findOne({where: {name: t.name}});
            console.log(!found)

            if (!found) {
                let tag = await Tags.create({name: t.name});
                await VideosTags.create({tag_id: tag.id, video_id: data.video_id}, {fields: ['tag_id', 'video_id']});
            } else {
                await VideosTags.create({tag_id: found.id, video_id: data.video_id}, {fields: ['tag_id', 'video_id']});
            }

        });
        await Promise.all(result);
        req.query.id = data.video_id;
        this.getVideoById(req, res);
    }
};


exports.updateUserTags = async (req, res) => {
    let data = req.body;
    console.log('increment!!!!')
    let {user_id, video_id, tags} = data;
    let results = tags.map(async (t) => {
        let foundTag = await UsersTags.findOne({
            where: {user_id: user_id, tag_id: t.id}
        });
        if (!foundTag) {
            await UsersTags.create({user_id: user_id, tag_id: t.id});
        } else {
            console.log('increment!!!!')
            await UsersTags.increment('popularity', {where: {user_id: user_id, tag_id: t.id}});
        }
    });

    await Promise.all(results);

    res.json('OK')
};

exports.getUserTags = async (req, res) => {
    console.log('get user tags!!!')
    let data = req.query;
    let {user_id} = data;
    console.log(data)
    let userTags = await UsersTags.findAll({
        where: {user_id: user_id},
        order: [['popularity', 'desc']],
        include: [{
            model: Tags, as: 'tag_details',
            include: [{model: Videos, as: 'tags_videos', attributes: ['id']}]
        }]
    }).filter(ut => ut.tag_details.tags_videos.length !== 0);
    res.json(userTags);
};
