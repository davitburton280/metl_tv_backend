'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('posts', {
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
      views: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      likes: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      privacy: {
        defaultValue: 0,
        type: Sequelize.INTEGER
      },
      created_at: {
        defaultValue: Sequelize.fn('NOW'),
        type: Sequelize.DATE
      },
      updated_at: {
        defaultValue: Sequelize.fn('NOW'),
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};