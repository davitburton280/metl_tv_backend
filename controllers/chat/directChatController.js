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
const nl2br = require('../../helpers/nl2br');

const usersController = require('../usersController');
const m = require('../../helpers/multer');
const showIfErrors = require('../../helpers/showIfErrors');

const moment = require('moment');

let {getMessagesFromRedis, generateFtSearchQuery} = require('../../helpers/redis');

exports.getDirectMessages = async (req, res) => {
    let {user_id, from_id, to_id, blocked} = req.query;
// console.log(typeof socket)

    let redisMessages = await getMessagesFromRedis(generateFtSearchQuery(req.query));
    console.log(redisMessages)


    if (from_id && to_id) {
        this.getMessagesBetweenTwoUsers(req, res);
    } else {


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
            order: [
                [sequelize.col('`users_connections->users_messages`.`created_at`'), 'asc'],
            ],
            include: [
                {
                    model: UsersConnection, as: 'users_connections',
                    attributes: ['id', 'is_blocked', 'confirmed'],

                    where: {
                        id: {[Op.in]: directConnectionIds},
                        confirmed: 1
                    },

                    through: {attributes: []},
                    include: [
                        {
                            model: DirectChatMessages,
                            attributes: {exclude: ['group_id', 'video_id', 'connection_id', 'to_user', 'updated_at']},
                            as: 'users_messages',
                            // include: [
                            //     {
                            //         model: Users,
                            //         as: 'from_user',
                            //         attributes: [['username', 'from'], 'id', 'avatar', 'first_name', 'last_name']
                            //     },
                            //     {
                            //         model: Users,
                            //         as: 'to_user',
                            //         attributes: [['username', 'from'], 'id', 'avatar', 'first_name', 'last_name'],
                            //     },
                            // ]
                        }
                    ]
                }
            ]
        });

        let usersFiltered = [];
        // let blockedUsers = await usersController.getBlockedContactsIds(user_id, 1);
        let blockedUsers = [];
        console.log(JSON.parse(JSON.stringify(usersMessages)))
        JSON.parse(JSON.stringify(usersMessages)).map(um => {
            let unseens = 0;

            if (redisMessages) {
                redisMessages.map(rm => {
                    um.users_connections[0]?.users_messages.push(rm);
                })
            }

            um.users_connections[0]?.users_messages?.map(m => {
                // let msg = m.toJSON();
                if (m.seen === 0 && +user_id !== +m.from_id) {
                    ++unseens;
                }
            });


            usersFiltered.push({unseens, ...um});
        });
        console.log(usersFiltered)

        let ret = usersFiltered.sort((a, b) => {
            let aMessages = a.users_connections[0]?.users_messages;
            let bMessages = b.users_connections[0]?.users_messages;
            return +(+moment(bMessages[bMessages.length - 1]?.created_at) - (+moment(aMessages[aMessages.length - 1]?.created_at)));
        });

        res.json(ret);
    }
};

exports.saveDirectMessage = async (req, res) => {
    if (!showIfErrors(req, res)) {
        let data = req.body;
        data.message = nl2br(data.message, false);
        await to(DirectChatMessages.create(data));

        if (!data.bottom_chat) {
            req.query.user_id = data.from_id;
            this.getDirectMessages(req, res);
        } else {
            req.query.from_id = data.from_id;
            req.query.to_id = data.to_id;
            this.getMessagesBetweenTwoUsers(req, res);
        }
    }


};

exports.updateSeen = async (data) => {

    let {connection_id} = data;

    let updated = await to(DirectChatMessages.update({seen: 1, seen_at: new Date()}, {
        where: {connection_id, seen: 0}
    }));

    return !!updated;
};

exports.unreadMessages = async (data) => {
    let {message_ids} = data;
    console.log('unread messages controller!!!', {
        where: {
            [Op.in]: {
                id: message_ids
            }
        }
    });

    let updated = await DirectChatMessages.update({seen: 0, seen_at: null}, {
        where: {
            id: {
                [Op.in]: message_ids
            }
        }
    });

    console.log(updated)
    return !!updated;
};

exports.getMessagesBetweenTwoUsers = async (req, res) => {
    let {from_id, to_id} = req.query;

    let arr = [
        {
            to_id: from_id,
            from_id: to_id
        },
        {from_id, to_id}
    ];


    let m = await DirectChatMessages.findAll({
        where: {
            [Op.or]: arr
        },
        attributes: {exclude: ['updated_at']},
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
    });

    res.json(m);
};