'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('stocks', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            type_id: {
                type: Sequelize.INTEGER
            },
            symbol: {
                type: Sequelize.STRING
            },
            name: {
                type: Sequelize.STRING
            },
            change: {
                type: Sequelize.FLOAT
            },
            price: {
                type: Sequelize.FLOAT
            },
            changesPercentage: {
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('stocks');
    }
};
