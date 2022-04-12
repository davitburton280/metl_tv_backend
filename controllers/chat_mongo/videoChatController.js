const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const Videos = db.videos;
const Users = db.users;
const UsersConnection = db.users_connection;
const UsersConnectionMembers = db.users_connection_members;

const to = require('../../helpers/getPromiseResult');
const nl2br = require('../../helpers/nl2br');
const m = require('../../helpers/multer');

const usersController = require('../usersController');

const moment = require('moment');
const VideoChatMessages = require('../../mongoose/video_chat_messages');

exports.getVideoMessages = async (req, res) => {
    const {video_id} = req.query;
    console.log('get video chat messages!!!!')

    let messages = await VideoChatMessages.find({
        video_id
    }).sort({'created_at': 1});

    // let ms = await ChatMessages.findAll({
    //     where: {video_id: video_id},
    //     include: [
    //         {model: Videos, as: 'video'},
    //         {model: Users, as: 'from_user', attributes: [['username', 'from'], 'avatar']}
    //     ]
    // });
    // res.json(ms);
    res.json(messages);
};

exports.saveMessage = async (req, res) => {
    let data = req.body;
    data.to_id = data.to_id ? data.to_id : 0;


    data.message = nl2br(data.message, false);
    let newMsg = new VideoChatMessages(data);
    let result = await newMsg.save();
    console.log(result)


    req.query.video_id = data.video_id;
    await this.getVideoMessages(req, res);
};