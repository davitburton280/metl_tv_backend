 'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tags extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // tags.belongsTo(models.videos)
      tags.belongsToMany(models.videos, {
        as: 'tags_videos',
        through: models.video_tags,
        foreignKey: 'tag_id'
      });

      tags.belongsTo(models.users, {
        as: 'tags_users',
        foreignKey: 'id'
      });

      // tags.belongsTo(models.users_tags, {as: 'tag_details', through: models.video_tags, foreignKey: 'tag_id'});
    }
  };
  tags.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tags',
    timestamps: false
  });
  return tags;
};
