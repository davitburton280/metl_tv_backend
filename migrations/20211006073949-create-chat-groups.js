'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('chat_groups', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            creator_id: {
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            custom_name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            avatar: {
                type: Sequelize.STRING,
            },
            cover: {
                type: Sequelize.STRING,
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
        await queryInterface.dropTable('chat_groups');
    }
};