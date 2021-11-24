const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../models');

const Users = db.users;
const UsersConnection = db.users_connection;

exports.createUsersConnection = async (data) => {
    let {authUser, channelUser} = data;

    let userIds = {
        from_id: authUser.id,
        to_id: channelUser.id
    };

    let check = await this.checkIfUsersConnected(userIds);
    if (!check) {
        let c = await UsersConnection.create(userIds);
        return c;
    }

    return null;
};

exports.checkIfUsersConnected = async (data) => {

    let where = [
        {
            from_id: data.from_id,
            to_id: data.to_id
        },
        {
            from_id: data.to_id,
            to_id: data.from_id
        },
    ];


    let c = await UsersConnection.findOne({
        where: {
            [Op.or]: where,
        }
    });

    return JSON.parse(JSON.stringify(c));
};

exports.checkUsersConnection = async (req, res) => {
    let {user_id, channel_user_id} = req.query;
    let userIds = {
        from_id: user_id,
        to_id: channel_user_id
    };
    let check = await this.checkIfUsersConnected(userIds);
    res.json(check);
};