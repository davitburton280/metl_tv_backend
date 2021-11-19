'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class chat_messages extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            chat_messages.belongsTo(models.videos, {foreignKey: 'video_id', as: 'video'});
            chat_messages.belongsTo(models.users, {as: 'from_user', foreignKey: 'from_id'});
            chat_messages.belongsTo(models.users, {as: 'to_user', foreignKey: 'to_id'});
            chat_messages.belongsTo(models.chat_groups, {as: 'chat_group', foreignKey: 'group_id'});
            chat_messages.belongsToMany(models.users, {as: 'seen_by', foreignKey: 'message_id', through: models.group_chat_messages_seen});
        }
    };
    chat_messages.init({
        video_id: DataTypes.INTEGER,
        connection_id: DataTypes.INTEGER,
        group_id: DataTypes.INTEGER,
        from_id: DataTypes.INTEGER,
        message: DataTypes.STRING,
        to_id: DataTypes.INTEGER,
        seen: DataTypes.INTEGER,
        seen_at: DataTypes.DATE
    }, {
        sequelize,
        modelName: 'chat_messages',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return chat_messages;
};
