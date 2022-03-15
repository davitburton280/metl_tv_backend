'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users_connections', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            from_id: {
                type: Sequelize.INTEGER,
            },
            to_id: {
                type: Sequelize.INTEGER,
            },
            confirmed: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            is_blocked: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            is_idle: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('users_connections');
    }
};