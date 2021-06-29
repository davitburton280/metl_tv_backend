'use strict';
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('users_cards', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            user_id: {
                type: Sequelize.INTEGER
            },
            stripe_customer_id: {
                type: Sequelize.STRING
            },
            card_id: {
                type: Sequelize.STRING
            },
            fingerprint: {
                type: Sequelize.STRING
            },
            is_primary: {
                type: Sequelize.INTEGER,
                defaultValue: 0
            },
            name: {
                type: Sequelize.STRING
            },
            number_part: {
                type: Sequelize.INTEGER
            },
            country: {
                type: Sequelize.STRING
            },
            holder_name: {
                type: Sequelize.STRING
            },
            brand: {
                type: Sequelize.STRING
            },
            expiry_date: {
                type: Sequelize.STRING
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
        await queryInterface.dropTable('users_cards');
    }
};
