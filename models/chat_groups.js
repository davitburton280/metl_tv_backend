'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class chat_groups extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // chat_groups.belongsToMany(models.users, {
            //   as: 'users_chat_groups',
            //   through: models.user_chat_groups,
            //   foreignKey: 'group_id'
            // });

            chat_groups.belongsToMany(models.users, {
                as: 'chat_group_members',
                through: models.chat_groups_members,
                foreignKey: 'group_id'
            });
            // chat_groups.hasMany(models.group_chat_messages, {as: 'chat_group_messages', foreignKey: 'group_id'});
        }
    };
    chat_groups.init({
        creator_id: DataTypes.INTEGER,
        avatar: DataTypes.STRING,
        cover: DataTypes.STRING,
        name: DataTypes.STRING,
        custom_name: DataTypes.STRING,
        privacy: DataTypes.INTEGER,
        description: DataTypes.TEXT
    }, {
        sequelize,
        modelName: 'chat_groups',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return chat_groups;
};