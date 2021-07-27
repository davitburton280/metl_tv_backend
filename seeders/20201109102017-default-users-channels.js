'use strict';
const db = require('../models');
const Users = db.users;
module.exports = {
    up: async (queryInterface, Sequelize) => {

        const users = await Users.findAll({});
        const channels = [];
        users.map(user => {
            channels.push({user_id: user.id, name: `${user.first_name} ${user.last_name}`});
        });

        return queryInterface.bulkInsert('channels', channels);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('channels', null, {});
    }
};
