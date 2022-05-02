'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  posts.init({
    author_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    cover_img: DataTypes.STRING,
    votes: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    privacy: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'posts',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return posts;
};