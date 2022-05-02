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
    views: DataTypes.INTEGER,
    likes: DataTypes.INTEGER,
    privacy: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  posts.associate = function(models) {
    // associations can be defined here
    posts.belongsTo(models.users, { as: 'post_author', foreignKey: 'author_id' });
    posts.belongsTo(models.groups, { as: 'post_group', foreignKey: 'group_id' });
    posts.belongsToMany(models.users, {
      as: 'user_posts',
      through: models.users_posts,
      foreignKey: 'post_id'
    });
  };
  return posts;
};