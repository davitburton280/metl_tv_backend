'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('video_categories', [
            {
                'name': 'Stock',
            },
            {
                'name': 'ETF',
            },
            {
                'name': 'Forex',
            },
            {
                'name': 'Cryptocurrency',
            },

        ])
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('video_categories', null, {});
    }
};
