'use strict';
module.exports = (sequelize, DataTypes) => {
  const subscriotion_plans = sequelize.define('subscriotion_plans', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    cost: DataTypes.INTEGER,
    permissions: DataTypes.JSON,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE
  }, {});
  subscriotion_plans.associate = function(models) {
    // associations can be defined here
  };
  return subscriotion_plans;
};