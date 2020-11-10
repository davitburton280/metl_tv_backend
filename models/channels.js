'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class channels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      channels.belongsTo(models.users, {foreignKey: 'user_id'})
    }
  };
  channels.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    subscribers_count: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'channels',
    underscored: true
  });
  return channels;
};
