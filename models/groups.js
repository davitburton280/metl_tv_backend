'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      groups.belongsToMany(models.users, {
        as: 'group_members',
        through: models.groups_members,
        foreignKey: 'group_id'
      });

      groups.belongsToMany(models.users, {
        as: 'page_group_users_roles',
        through: models.users_page_groups,
        foreignKey: 'group_id',
      })
    }
  };
  groups.init({
    creator_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    custom_name: DataTypes.STRING,
    privacy: DataTypes.INTEGER,
    description: DataTypes.TEXT,
    avatar: DataTypes.STRING,
    cover: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'groups',
    underscored: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return groups;
};