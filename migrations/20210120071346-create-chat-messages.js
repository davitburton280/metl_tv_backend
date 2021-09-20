'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('chat_messages', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            video_id: {
                type: Sequelize.INTEGER
            },
            from_id: {
                type: Sequelize.INTEGER
            },
            message: {
                type: Sequelize.STRING
            },
            to_id: {
                type: Sequelize.INTEGER
            },
            seen: {
                type: Sequelize.INTEGER,
                defaultValue: 0,
            },
            seen_at: {
                type: Sequelize.DATE,
            },
            created_at: {
                defaultValue: Sequelize.fn('NOW'),
                allowNull: false,
                type: Sequelize.DATE
            },
            updated_at: {
                defaultValue: Sequelize.fn('NOW'),
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.dropTable('chat_messages');
    }
};
