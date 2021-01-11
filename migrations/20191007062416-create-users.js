'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            role_id: {
                type: Sequelize.INTEGER
            },
            status_id: {
                type: Sequelize.INTEGER
            },
            full_name: {
                type: Sequelize.STRING
            },
            username: {
                type: Sequelize.STRING
            },
            // last_name: {
            //   type: Sequelize.STRING
            // },
            birthday: {
                type: Sequelize.DATEONLY
            },
            gender: {
                type: Sequelize.STRING
            },
            email: {
                type: Sequelize.STRING
            },
            phone: {
                type: Sequelize.STRING
            },
            password: {
                type: Sequelize.STRING
            },
            avatar: {
                type: Sequelize.STRING
            },
            cover: {
                type: Sequelize.STRING
            },
            verification_code : {
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
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('users');
    }
};
