'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group_chat_notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  group_chat_notifications.init({
    from_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER,
    msg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'group_chat_notifications',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return group_chat_notifications;
};