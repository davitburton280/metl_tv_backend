'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('chat_groups_members', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            member_id: {
                type: Sequelize.INTEGER
            },
            group_id: {
                type: Sequelize.INTEGER
            },
            is_admin: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            accepted: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            confirmed: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            created_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW')
            },
            updated_at: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW')
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('chat_groups_members');
    }
};