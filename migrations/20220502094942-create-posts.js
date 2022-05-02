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
        defaultValue: null,
        type: Sequelize.INTEGER
      },
      title: {
        defaultValue: null,
        type: Sequelize.STRING
      },
      description: {
        defaultValue: null,
        type: Sequelize.TEXT
      },
      cover_img: {
        defaultValue: null,
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('posts');
  }
};