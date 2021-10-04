'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_connection extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users_connection.init({
    user_id: DataTypes.INTEGER,
    connection_id: DataTypes.INTEGER,
    is_blocked: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_connection',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return users_connection;
};