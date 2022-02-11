const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const Users = db.users;
const UsersConnection = db.users_connection;
const UsersConnectionMembers = db.users_connection_members;

const DirectMessages = require('../../mongoose_chat/direct_chat_messages');
const moment = require('moment');

const to = require('../../helpers/getPromiseResult');
const nl2br = require('../../helpers/nl2br');

exports.create = async (req, res) => {

    this.getDirectMessages(req, res)
};

exports.saveDirectMessage = async (data) => {
    // data.seen_at = '';
    data.message = nl2br(data.message, false);
    let newMsg = new DirectMessages(data);
    let result = await to(newMsg.save());
    let messages = await DirectMessages.find({
        connection_id: data.connection_id
    }).sort({'created_at': 1});
    return messages;
};


exports.getDirectMessages = async (req, res) => {
    let user_id, other_user_id;
    if (req.return) {
        user_id = req.user_id;
        // console.log("USER ID:"+user_id)
    } else {
        let data = req.query;
        user_id = data.user_id;
        other_user_id = data.other_user_id;
    }
    let directConnectionIds = [];

    // If want to get one connection messages
    if (other_user_id) {

        let arr = [
            {
                to_id: user_id,
                from_id: other_user_id

            },
            {
                from_id: user_id,
                to_id: other_user_id,
            }
        ];

        let connection = await UsersConnection.findOne({
            attributes: ['id'],
            where: {
                [Op.or]: arr,
                confirmed: 1
            },
        });

        if (connection) {
            directConnectionIds = [connection.id];
        }

    }

    // If want to get one user's all connections messages
    else {
        // Get user connections ids
        let directConnectionsResult = await UsersConnectionMembers.findAll({
            where: {member_id: user_id},
            attributes: ['connection_id']
        });

        directConnectionIds = JSON.parse(JSON.stringify(directConnectionsResult)).map(t => t.connection_id);
    // console.log(directConnectionIds)
    }



    // Gets messages from MongoDb
    let messages = await DirectMessages.find({
        connection_id: {"$in": directConnectionIds}
    }).sort({'created_at': 1});

    let usersConnections = await Users.findAll({
        attributes: ['id', 'first_name', 'last_name', 'avatar', 'username'],
        where: {
            [Op.not]: {
                id: user_id
            }
        },
        order: [],
        include: [
            {
                model: UsersConnection, as: 'users_connections',
                attributes: ['id', 'is_blocked', 'confirmed'],

                where: {
                    id: {[Op.in]: directConnectionIds},
                    confirmed: 1
                },
                through: {attributes: []},
            }
        ]
    });

    // console.log(JSON.parse(JSON.stringify(usersConnections)))

    let result = JSON.parse(JSON.stringify(usersConnections)).map(uc => {
        let connection_id = uc.users_connections[0]?.id;
        uc.direct_messages = messages.filter(msg => msg.toObject().connection_id === connection_id);
        return uc;
    });

    if (req.return) {
        return result
    } else {
        res.json(result);
    }
};

exports.getConnectionMessages = async (req, res) => {
    // console.log(req)
    let {connection_id} = req || req.query;
    let messages = await DirectMessages.find({
        connection_id
    }).sort({'created_at': 1});
    if (req.return) {
        return messages
    } else {
        res.json(messages);
    }
};

exports.updateSeen = async (data) => {

    let {connection_id, seen_at} = data;
    // console.log(data)
    let updated = await to(DirectMessages.updateMany(
        {
            "$and": [
                {seen: false},
                {connection_id}
            ],
        }, {$set: {seen: true, seen_at}}));

    console.log('updated', updated)

    return !!updated;
};

exports.unreadMessages = async (data) => {
    let {message_ids} = data;
    console.log('unread messages controller!!!', message_ids);

    let updated = await to(DirectMessages.updateMany(
        {
            _id: {"$in": message_ids},
        }, {$set: {seen: false, seen_at: ''}}));

    console.log(updated)
    return !!updated;
};