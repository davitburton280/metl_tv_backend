'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('privacy_types', [{name: 'Public'}, {name: 'Private'}]);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('privacy_types', null, {});
    }
};
