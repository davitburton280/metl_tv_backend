'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('video_comments', {
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
            comment: {
                type: Sequelize.TEXT
            },
            is_reply: {
                type: Sequelize.INTEGER
            },
            ///////////////
            to_comment_id: {
                type: Sequelize.INTEGER,
                allowNull: true
            },
            to_user_id: {
                type: Sequelize.INTEGER,
                allowNull: true
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
        await queryInterface.dropTable('video_comments');
    }
};
