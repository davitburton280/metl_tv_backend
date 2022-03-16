'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class users_roles extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here

        }
    };
    users_roles.init({
        user_id: DataTypes.INTEGER,
        role_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'users_roles',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return users_roles;
};