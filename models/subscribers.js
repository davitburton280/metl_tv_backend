'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class subscribers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  subscribers.init({
    subscriber_id: DataTypes.INTEGER,
    channel_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'subscribers',
  });
  return subscribers;
};