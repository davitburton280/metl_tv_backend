'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('messages', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      creator_id: {
        type: Sequelize.INTEGER
      },
      conversation: {
        type: Sequelize.INTEGER
      },
      message: {
        type: Sequelize.TEXT
      },
      seen_from: {
        type: Sequelize.JSON
      },
      parent_message: {
        type: Sequelize.INTEGER
      },
      files: {
        type: Sequelize.JSON
      },
      edited: {
        type: Sequelize.INTEGER
      },
      deleted: {
        type: Sequelize.INTEGER
      },
      reactions: {
        type: Sequelize.JSON
      },
      created_at: {
        type: Sequelize.DATE
      },
      updated_at: {
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('messages');
  }
};
