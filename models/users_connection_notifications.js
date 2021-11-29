'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_connection_notifications extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      users_connection_notifications.belongsTo(models.users, {as: 'from_user', foreignKey: 'from_id'});
      users_connection_notifications.belongsTo(models.users, {as: 'to_user', foreignKey: 'to_id'});
    }
  };
  users_connection_notifications.init({
    from_id: DataTypes.INTEGER,
    to_id: DataTypes.INTEGER,
    connection_id: DataTypes.INTEGER,
    msg: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users_connection_notifications',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  });
  return users_connection_notifications;
};