const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../models');
const ChatMessages = db.chat_messages;
const Videos = db.videos;
const Users = db.users;
const to = require('../helpers/getPromiseResult');

const usersController = require('./usersController');

exports.getVideoMessages = async (req, res) => {
    const {video_id} = req.query;
    console.log('get video chat messages!!!!')

    let ms = await ChatMessages.findAll({
        where: {video_id: video_id},
        include: [
            {model: Videos, as: 'video'},
            {model: Users, as: 'from_user', attributes: [['username', 'from'], 'avatar']}
        ]
    });
    res.json(ms);
};

exports.saveMessage = async (req, res) => {
    let data = req.body;
    data.to_id = data.to_id ? data.to_id : 0;
    await to(ChatMessages.create(data));
    if (!data.video_id) {
        await to(usersController.createUsersConnection(data))
    }
    req.query.video_id = data.video_id;

    if (!data.video_id) {
        req.query.to_id = data.to_id;
        req.query.from_id = data.from_id;
        req.query.personal = data.personal;
        this.getChatMessages(req, res);
    } else {
        await this.getVideoMessages(req, res);
    }

};


exports.getChatMessages = async (req, res) => {
    const {from_id, to_id, personal} = req.query;
    // console.log(req.query)
    // let whereIds = ;

    let where = to_id ? {from_id: to_id} : {};

    let arr = [
        to_id ? {from_id, to_id} : {from_id},
        {

            to_id: from_id,
            ...where
        }
    ]

    let ms = await ChatMessages.findAll({
        // attributes : [{exclude: 'video_id'}],
        where: {
            video_id: null,
            [Op.or]: arr
        },
        include: [
            {
                model: Users,
                as: 'from_user',
                attributes: [['username', 'from'], 'id', 'avatar', 'first_name', 'last_name']
            },
            {
                model: Users,
                as: 'to_user',
                attributes: [['username', 'from'], 'id', 'avatar', 'first_name', 'last_name'],
            }
        ],
        order: [
            [sequelize.col('`chat_messages`.`created_at`'), 'asc']
        ]

    })


    if (personal) {

        let usersFiltered = {};
        let blockedUsers = await usersController.getBlockedContacts(from_id);
        console.log(blockedUsers)

        // // console.log(ms.toJSON())
        ms.map(m => {
            // console.log('!!!!!!!!')
            // console.log(m.to_user.id, +from_id)
            // console.log('!!!!!!!!')
            let user = m.from_user.id === +from_id ? m.to_user : (m.to_user.id === +from_id ? m.from_user : m.from_user)

            // console.log('BLOCKED USER!!!')
            // console.log(user)
            let msg = m.toJSON();
            // console.log(blockedUsers.connection_id, user.id)
            // console.log(blockedUsers.user_id, user.id)
            if (user) {
                // console.log(user.toJSON())
                let user_id = user.id;
                if (!usersFiltered[user_id]) {
                    usersFiltered[user_id] = {messages: [], user: ''}
                    usersFiltered[user_id]['messages'] = [msg];
                    let foundInBlocked = blockedUsers.find(bUser => user.id === bUser.user_id || user.id === bUser.connection_id)
                    console.log("FOUND IN BLOCKED", foundInBlocked )
                    usersFiltered[user_id]['user'] = foundInBlocked ? {blocked: 1, ...user.dataValues} : user;
                } else {
                    if (!usersFiltered[user_id]['messages']) {
                        usersFiltered[user_id]['messages'] = []
                    }
                    usersFiltered[user_id]['messages'].push(msg);
                }
            }

        });

        // console.log("USERS FILTERED!!!! ", Object.values(usersFiltered))
        res.json(Object.values(usersFiltered));
    } else {
        // console.log(ms)
        res.json(ms);
    }
}

exports.updateSeen = async (data) => {
    let {seen, from_id, to_id} = data;

    let arr = [
        // to_id ? {from_id, to_id} : {from_id},
        // {
        //
        //     to_id: from_id,
        // }
        {
            to_id: from_id,
            from_id: to_id
        },
        {from_id, to_id}
    ]

    console.log("FROM ID" + data.from_id)
    let updated = await to(ChatMessages.update({seen}, {
        where: {
            [Op.or]: arr
        },
    }))
    console.log(!!updated)
    return !!updated;
}