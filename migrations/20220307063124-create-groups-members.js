'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('groups_members', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      member_id: {
        type: Sequelize.INTEGER
      },
      group_id: {
        type: Sequelize.INTEGER
      },
      is_admin: {
        type: Sequelize.INTEGER
      },
      accepted: {
        type: Sequelize.INTEGER
      },
      confirmed: {
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
    await queryInterface.dropTable('groups_members');
  }
};