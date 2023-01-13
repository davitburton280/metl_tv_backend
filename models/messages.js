'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class messages extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            messages.belongsTo(models.messages, {as: 'parent', foreignKey: 'parent_message'});
            messages.belongsTo(models.conversations, {as: 'conversationData', foreignKey: 'conversation'});
            messages.belongsTo(models.users, {as: 'creator', foreignKey: 'creator_id'});
        }

    };
    messages.init({
      creator_id: DataTypes.INTEGER,
      conversation: DataTypes.INTEGER,
      message: DataTypes.TEXT,
      seen_from: DataTypes.ARRAY(DataTypes.INTEGER),
      parent_message: DataTypes.INTEGER,
      files: DataTypes.ARRAY(DataTypes.STRING),
      edited: DataTypes.INTEGER,
      deleted: DataTypes.INTEGER,
      reactions: DataTypes.ARRAY(DataTypes.STRING)
    }, {
        sequelize,
        modelName: 'messages',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return messages;
};
