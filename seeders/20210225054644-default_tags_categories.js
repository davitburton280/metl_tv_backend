'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const defaultTags = [{name: 'All'}];
        return queryInterface.bulkInsert('tags', defaultTags);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('tags', null, {});
    }
};
