'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chat_messages_seen_by extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  chat_messages_seen_by.init({
    message_id: DataTypes.INTEGER,
    group_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    to_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'group_chat_messages_seen',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    freezeTableName: true
  });
  return chat_messages_seen_by;
};