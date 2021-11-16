'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class video_chat_messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  video_chat_messages.init({
    video_id: DataTypes.INTEGER,
    from_id: DataTypes.INTEGER,
    message: DataTypes.STRING,
    to_id: DataTypes.INTEGER,
    seen: DataTypes.INTEGER,
    seen_at: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'video_chat_messages',
  });
  return video_chat_messages;
};