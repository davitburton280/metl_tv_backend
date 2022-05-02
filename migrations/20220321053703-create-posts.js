'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('posts', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            author_id: {
                type: Sequelize.INTEGER
            },
            category_id: {
                type: Sequelize.INTEGER
            },
            group_id: {
                type: Sequelize.INTEGER
            },
            title: {
                type: Sequelize.STRING
            },
            description: {
                type: Sequelize.TEXT
            },
            cover_img: {
                type: Sequelize.STRING
            },
            votes: {
                defaultValue: 0,
                type: Sequelize.INTEGER
            },
            likes: {
                defaultValue: 0,
                type: Sequelize.INTEGER
            },
            views: {
                defaultValue: 0,
                type: Sequelize.INTEGER
            },
            privacy: {
                defaultValue: 0,
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
        await queryInterface.dropTable('posts');
    }
};