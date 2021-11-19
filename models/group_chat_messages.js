'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class group_chat_messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      group_chat_messages.belongsTo(models.users, {as: 'from_user', foreignKey: 'from_id'});
      group_chat_messages.belongsTo(models.users, {as: 'to_user', foreignKey: 'to_id'});
      group_chat_messages.belongsToMany(models.users, {as: 'seen_by', foreignKey: 'message_id', through: models.group_chat_messages_seen});
    }
  };
  group_chat_messages.init({
    group_id: DataTypes.INTEGER,
    from_id: DataTypes.INTEGER,
    message: DataTypes.STRING,
    to_id: DataTypes.INTEGER,
    seen: DataTypes.INTEGER,
    seen_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'group_chat_messages',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return group_chat_messages;
};