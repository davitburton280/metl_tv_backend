'use strict';
module.exports = (sequelize, DataTypes) => {
  const subscriotion_permission = sequelize.define('subscriotion_permission', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    custom_fields: DataTypes.JSON,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  subscriotion_permission.associate = function(models) {
    // associations can be defined here
  };
  return subscriotion_permission;
};