'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('channels', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            subscribers_count: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.literal('CURRENT_TIMESTAMP()')
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('channels');
    }
};
