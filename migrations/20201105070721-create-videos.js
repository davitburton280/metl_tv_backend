'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('videos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            author_id: {
                type: Sequelize.INTEGER
            },
            channel_id: {
                type: Sequelize.INTEGER
            },
            category_id: {
                type: Sequelize.INTEGER
            },
            privacy_id: {
                type: Sequelize.INTEGER
            },
            likes: {
                type: Sequelize.INTEGER
            },
            dislikes: {
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            session_name: {
                type: Sequelize.STRING
            },
            token: {
                type: Sequelize.STRING
            },
            filename: {
                type: Sequelize.STRING
            },
            thumbnail: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('videos');
    }
};
