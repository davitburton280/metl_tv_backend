const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const ChatMessages = db.chat_messages;
const DirectChatMessages = db.direct_chat_messages;
const ChatGroups = db.chat_groups;
const ChatGroupsMembers = db.chat_groups_members;
const ChatMessagesSeen = db.chat_messages_seen;
const Videos = db.videos;
const Users = db.users;
const UsersConnection = db.users_connection;
const UsersConnectionMembers = db.users_connection_members;
const to = require('../../helpers/getPromiseResult');

const usersController = require('../usersController');
const m = require('../../helpers/multer');

const moment = require('moment');

exports.getDirectMessages = async (req, res) => {
    let {user_id, blocked} = req.query;

    let directConnectionsResult = await UsersConnectionMembers.findAll({
        where: {member_id: user_id},
        attributes: ['connection_id']
    });

    let directConnectionIds = JSON.parse(JSON.stringify(directConnectionsResult)).map(t => t.connection_id);

    let usersMessages = await Users.findAll({
        attributes: ['id', 'first_name', 'last_name', 'avatar', 'username'],
        where: {
            [Op.not]: {
                id: user_id
            }
        },
        // attributes: [[sequelize.fn('count','seen'),'unseens']],
        order: [
            [sequelize.col('`users_connections->users_messages`.`created_at`'), 'asc'],
        ],
        include: [
            {
                model: UsersConnection, as: 'users_connections',
                attributes: ['id', 'is_blocked', 'confirmed'],

                where: {
                    id: {[Op.in]: directConnectionIds}
                },
                through: {attributes: []},
                include: [
                    {
                        model: DirectChatMessages,
                        attributes: {exclude: ['group_id', 'video_id', 'connection_id', 'to_user', 'updated_at']},
                        as: 'users_messages',
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
                            },
                        ]
                    }
                ]
            }
        ]
    });

    let usersFiltered = {};
    // let blockedUsers = await usersController.getBlockedContactsIds(user_id, 1);
    let blockedUsers = [];
    // console.log(blockedUsers)
    usersMessages.map(um => {
        um.users_connections[0]?.users_messages.map(m => {
            let user = m.from_user.id === +user_id ? m.to_user : (m.to_user.id === +user_id ? m.from_user : m.from_user)
            let msg = m.toJSON();

            if (user) {
                let user_id = user.id;
                if (!usersFiltered[user_id]) {
                    usersFiltered[user_id] = {messages: [], user: '', unseens: 0};
                    usersFiltered[user_id]['messages'] = [msg];

                    if (msg.seen === 0 && user_id !== m.from_id) {
                        ++usersFiltered[user_id].unseens;
                    }


                    let foundInBlocked = blockedUsers.find(bUser => user.id === bUser.user_id || user.id === bUser.connection_id)
                    usersFiltered[user_id]['user'] = foundInBlocked ? {blocked: 1, ...user.dataValues} : user;

                } else {
                    if (!usersFiltered[user_id]['messages']) {
                        usersFiltered[user_id]['messages'] = []
                    }

                    if (msg.seen === 0) {
                        ++usersFiltered[user_id].unseens;
                    }

                    usersFiltered[user_id]['messages'].push(msg);
                }
            }
        })
    });

    let finalUsers = Object.values(usersFiltered).sort((a, b) => {
        return +(+moment(b.messages[b.messages.length - 1].created_at) - (+moment(a.messages[a.messages.length - 1].created_at)));
    });

    res.json(finalUsers);

    res.json(usersMessages)
};

exports.saveDirectMessage = async (req, res) => {
    let data = req.body;
    let msg = await to(ChatMessages.create(data));
    req.query.user_id = data.user_id;
    this.getDirectMessages(req, res);
};