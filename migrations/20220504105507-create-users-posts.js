'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users_posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
      post_id: {
        type: Sequelize.INTEGER
      },
      liked: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      disliked: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      viewed: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      saved: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      voted: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users_posts');
  }
};