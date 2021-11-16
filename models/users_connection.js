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
      // users_connection.hasOne(models.users, {foreignKey: 'user_id', as: 'user'});
      // users_connection.belongsTo(models.users, {foreignKey: 'connection_id', as: 'connection'});
        users_connection.belongsToMany(models.users, {
            as: 'connection_users',
            through: models.users_connection_members,
            foreignKey: 'connection_id'
        });
      users_connection.hasMany(models.chat_messages, {as: 'users_messages', foreignKey: 'connection_id'});
    }
  };
  users_connection.init({
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