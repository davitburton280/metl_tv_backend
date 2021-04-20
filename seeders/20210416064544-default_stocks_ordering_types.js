'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const defaultStocksOrderTypes = [
            {name: 'My sort', value: 'custom'},
            {name: 'A-Z', value: 'alphabetical'},
            {name: 'Gain', value: 'gain'},
            {name: 'Loss', value: 'loss'},
        ];
        return queryInterface.bulkInsert('stocks_ordering_types', defaultStocksOrderTypes);
    },

    down: async (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('stocks_ordering_types', null, {});
    }
};
