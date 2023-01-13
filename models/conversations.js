'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class conversations extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            conversations.belongsTo(models.users, {as: 'creator', foreignKey: 'creator_id'});
            conversations.belongsTo(models.users, {as: 'target', foreignKey: 'target_id'});
            conversations.hasOne(models.messages, {as: 'parent', foreignKey: 'parent_message'});
            conversations.belongsTo(models.conversations, {as: 'conversationData', foreignKey: 'id'});
        }

    };
    conversations.init({
      creator_id: DataTypes.INTEGER,
      target_id: DataTypes.INTEGER,
      last_message: DataTypes.INTEGER,
      deleted_from: DataTypes.ARRAY(DataTypes.INTEGER),
      muted_from: DataTypes.ARRAY(DataTypes.INTEGER)
    }, {
        sequelize,
        modelName: 'conversations',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return conversations;
};
