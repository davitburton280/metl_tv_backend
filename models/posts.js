'use strict';
module.exports = (sequelize, DataTypes) => {
  const posts = sequelize.define('posts', {
    author_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    cover_img: DataTypes.STRING,
    votes: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    privacy: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {});
  posts.associate = function(models) {
    // associations can be defined here
  };
  return posts;
};