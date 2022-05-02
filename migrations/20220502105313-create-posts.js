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
        default: null,
        type: Sequelize.INTEGER
      },
      group_id: {
        default: null,
        type: Sequelize.INTEGER
      },
      title: {
        default: 0,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      cover_img: {
        default: null,
        type: Sequelize.STRING
      },
      votes: {
        default: 0,
        type: Sequelize.INTEGER
      },
      views: {
        default: 0,
        type: Sequelize.INTEGER
      },
      likes: {
        default: 0,
        type: Sequelize.INTEGER
      },
      privacy: {
        default: 0,
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('posts');
  }
};