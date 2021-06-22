'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_cards extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users_cards.init({
    user_id: DataTypes.INTEGER,
    stripe_customer_id: DataTypes.STRING,
    card_id: DataTypes.STRING,
    number_part: DataTypes.INTEGER,
    country: DataTypes.STRING,
    brand: DataTypes.STRING,
    holder_name: DataTypes.STRING,
    expiry_date: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users_cards',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return users_cards;
};
