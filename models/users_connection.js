'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class users_connection extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

            // users_connection.belongsToMany(models.users, {
            //     as: 'connection_users',
            //     through: models.users_connection_members,
            //     foreignKey: 'connection_id'
            // });
            // users_connection.hasMany(models.chat_messages, {as: 'users_messages', foreignKey: 'connection_id'});
            // users_connection.hasMany(models.chat_messages, {as: 'users_messages', foreignKey: 'connection_id'});
            users_connection.hasMany(models.direct_chat_messages, {as: 'users_messages', foreignKey: 'connection_id'});
            users_connection.hasMany(models.direct_chat_messages, {as: 'users_messages_count', foreignKey: 'connection_id'});
        }
    };
    users_connection.init({
        from_id: {
            type: DataTypes.INTEGER,
        },
        to_id: {
            type: DataTypes.INTEGER,
        },
        confirmed: DataTypes.INTEGER,
        is_blocked: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'users_connection',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return users_connection;
};