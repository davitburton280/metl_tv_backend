'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('files', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      mimetype: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      originalName: {
        type: Sequelize.STRING
      },
      extension: {
        type: Sequelize.STRING
      },
      path: {
        type: Sequelize.STRING
      },
      size: {
        type: Sequelize.INTEGER
      },
      duration: {
        type: Sequelize.STRING
      },
      duration_miliseconds: {
        type: Sequelize.INTEGER
      },
      belonging: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('files');
  }
};