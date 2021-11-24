const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');

const Users = db.users;
const UsersConnection = db.users_connection;
const UsersConnectionMembers = db.users_connection_members;
const DirectChatMessages = db.direct_chat_messages;

const to = require('../../helpers/getPromiseResult');
const nl2br = require('../../helpers/nl2br');

