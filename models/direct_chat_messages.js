'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class direct_chat_messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      direct_chat_messages.belongsTo(models.users, {as: 'from_user', foreignKey: 'from_id'});
      direct_chat_messages.belongsTo(models.users, {as: 'to_user', foreignKey: 'to_id'});
    }
  };
  direct_chat_messages.init({
    connection_id: DataTypes.INTEGER,
    from_id: DataTypes.INTEGER,
    message: DataTypes.TEXT,
    to_id: DataTypes.INTEGER,
    seen: DataTypes.INTEGER,
    seen_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'direct_chat_messages',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return direct_chat_messages;
};