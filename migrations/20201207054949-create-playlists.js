'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('playlists', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            privacy: {
                type: Sequelize.INTEGER
            },
            thumbnail: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('playlists');
    }
};
