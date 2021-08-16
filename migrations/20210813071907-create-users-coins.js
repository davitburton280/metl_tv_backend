'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users_coins', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            stripe_account_id: {
                type: Sequelize.INTEGER
            },
            purchased: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            purchased_worth: {
                type: Sequelize.FLOAT,
                defaultValue: 0
            },
            received: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            received_worth: {
                type: Sequelize.FLOAT,
                defaultValue: 0
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW'),
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW'),
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users_coins');
    }
};