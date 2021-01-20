'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('playlists_videos', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,

                type: Sequelize.INTEGER
            },
            playlist_id: {
                // onDelete: 'CASCADE',
                // references: {
                //     model: 'playlists',
                //     key: 'id'
                // },
                type: Sequelize.INTEGER
            },
            video_id: {
                type: Sequelize.INTEGER,
                // references: {
                //     model: 'videos',
                //     key: 'id'
                // },
            },
            channel_id: {
                type: Sequelize.INTEGER
            },
            position: {
                type: Sequelize.INTEGER
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
        await queryInterface.dropTable('playlists_videos');
    }
};
