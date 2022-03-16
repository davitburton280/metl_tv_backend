'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      roles.belongsToMany(models.users, {
        as: 'page_group_roles',
        through: models.users_page_groups,
        foreignKey: 'user_id',
      })

      roles.belongsToMany(models.users, {
        as: 'chat_group_roles',
        through: models.users_chat_groups,
        foreignKey: 'user_id',
      })
    }
  };
  roles.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'roles',
    timestamps: false
  });
  return roles;
};