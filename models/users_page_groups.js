'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_page_groups extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users_page_groups.init({
    user_id: DataTypes.INTEGER,
    role_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER
  }, {
    sequelize,
    underscored: true,
    modelName: 'users_page_groups',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return users_page_groups;
};