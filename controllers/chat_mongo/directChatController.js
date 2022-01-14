const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const Users = db.users;
const UsersConnection = db.users_connection;
const UsersConnectionMembers = db.users_connection_members;

const Messages = require('../../mongoose_chat/direct_chat_messages');
const moment = require('moment');

const to = require('../../helpers/getPromiseResult');



exports.create = async (req, res) => {
    // data.seen_at = '';
    let newMsg = new Messages(req.body);
    let result = await to(newMsg.save());
    return result;
};

exports.saveDirectMessage = async (req, res) => {
    let data = req.body;
    console.log(data)
};


exports.getDirectMessages = async (req, res) => {
    let {user_id} = req.query;

    // Get user connections ids
    let directConnectionsResult = await UsersConnectionMembers.findAll({
        where: {member_id: user_id},
        attributes: ['connection_id']
    });

    let directConnectionIds = JSON.parse(JSON.stringify(directConnectionsResult)).map(t => t.connection_id);

    console.log(directConnectionIds)

    // Gets messages from MongoDb
    let messages = await Messages.find({
        connection_id: {"$in": directConnectionIds}
    }).sort({'created_at': -1});

    console.log('messages', messages)


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

    let result = JSON.parse(JSON.stringify(usersConnections)).map(uc => {
        let connection_id = uc.users_connections[0]?.id;
        uc.direct_messages = messages.filter(msg => msg.toObject().connection_id === connection_id);
        // uc.direct_messages = groupMessagesByDate(uc.direct_messages)
        return uc;
    });

    res.json(result);
};

groupMessagesByDate = (messages) => {
    let property = 'created_at';
   let t = messages.reduce((previous, current) => {
        let key = current[property];
        if (property === 'created_at') {
            key = moment(current[property]).format('dddd, MMMM Do');
        }
        if (!previous[key]) {
            previous[key] = [current];
        } else {
            previous[key].push(current);
        }

        return previous;
    }, {});

    return Object.keys(t).map(key => ({key, value: t[key]}));
};