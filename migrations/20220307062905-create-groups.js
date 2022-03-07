'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('groups', {
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
            privacy: {
                type: Sequelize.INTEGER
            },
            description: {
                type: Sequelize.TEXT
            },
            avatar: {
                type: Sequelize.STRING
            },
            cover: {
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
        await queryInterface.dropTable('groups');
    }
};