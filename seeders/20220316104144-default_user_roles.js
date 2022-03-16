'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const defaultRoles = [
            {name: 'Chat group admin'},
            {name: 'Page group admin'},
            {name: 'Page group moderator'},
        ];
        return queryInterface.bulkInsert('roles', defaultRoles);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('roles', null, {});
    }
};
