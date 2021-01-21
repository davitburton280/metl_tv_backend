const db = require('../models');
const ChatMessages = db.chat_messages;
const Videos = db.videos;
const Users = db.users;
const to = require('../helpers/getPromiseResult');

exports.getVideoMessages = async (req, res) => {
    const {video_id} = req.query;
    console.log('get video chat messages!!!!')
    let ms = await ChatMessages.findAll({
        where: {video_id: video_id},
        include: [
            {model: Videos, as: 'video'},
            {model: Users, as: 'user', attributes: [['username', 'from'], 'avatar']}
        ]
    });
    res.json(ms);
};

exports.saveMessage = async (req, res) => {
    let data = req.body;
    data.to = data.to ? data.to : 0;
    console.log(data)
    await to(ChatMessages.create(data));
    req.query.video_id = data.video_id;
    this.getVideoMessages(req, res);
};
