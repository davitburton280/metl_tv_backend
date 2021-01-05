'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users_videos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            video_id: {
                type: Sequelize.INTEGER
            },
            liked: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            disliked: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            viewed: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            saved: {
                type: Sequelize.INTEGER,
                defaultValue: 0
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
        await queryInterface.dropTable('users_videos');
    }
};
