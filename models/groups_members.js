'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class groups_members extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    groups_members.init({
        member_id: DataTypes.INTEGER,
        group_id: DataTypes.INTEGER,
        is_admin: DataTypes.INTEGER,
        is_moderator: DataTypes.INTEGER,
        accepted: DataTypes.INTEGER,
        confirmed: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'groups_members',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return groups_members;
};