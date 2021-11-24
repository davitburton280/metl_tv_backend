const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');

const Users = db.users;
const UsersConnection = db.users_connection;
const UsersConnectionMembers = db.users_connection_members;
const DirectChatMessages = db.direct_chat_messages;

const to = require('../../helpers/getPromiseResult');
const nl2br = require('../../helpers/nl2br');

exports.getDirectMessages = async (req, res) => {
    let {user_id} = req.query;
    let usersMessages = await Users.findAll({
        attributes: ['id', 'first_name', 'last_name', 'avatar', 'username'],
        where: {
            [Op.not]: {
                id: user_id
            }
        },
        include: [
            {
                model: UsersConnection, as: 'users_connections_from', required: true, //relationship via from_id or to_id???
                include: [
                    {model: DirectChatMessages, as: 'users_messages'}
                ]
            },
            {
                model: UsersConnection, as: 'users_connections_to', required: true, //relationship via from_id or to_id???
                include: [
                    {model: DirectChatMessages, as: 'users_messages'}
                ]
            }
        ]
    });

    res.json(usersMessages);

};