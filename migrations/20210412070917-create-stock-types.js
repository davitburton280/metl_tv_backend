'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('stock_types', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            value: {
                type: Sequelize.STRING
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('stock_types');
    }
};
