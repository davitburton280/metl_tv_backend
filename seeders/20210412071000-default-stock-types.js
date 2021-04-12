'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const defaultStockTypes = [
      {name: 'Stocks', value: 'stocks'},
      {name: 'ETF', value: 'etf'},
      {name: 'Forex', value: 'forex'},
      {name: 'Cryptocurrency', value: 'crypto'},
    ];
    return queryInterface.bulkInsert('stock_types', defaultStockTypes);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('stock_types', null, {});
  }
};
