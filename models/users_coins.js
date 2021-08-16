'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_coins extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users_coins.init({
    user_id: DataTypes.INTEGER,
    stripe_account_id: DataTypes.INTEGER,
    purchased: DataTypes.INTEGER,
    purchased_worth: DataTypes.FLOAT,
    received: DataTypes.INTEGER,
    received_worth: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'users_coins',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return users_coins;
};