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
      // define association here
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
  });
  return group_chat_messages;
};