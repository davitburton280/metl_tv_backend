'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class chat_group_members extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            chat_group_members.belongsTo(models.users, {foreignKey: 'member_id', as: 'member'});
            chat_group_members.belongsTo(models.chat_groups, {foreignKey: 'group_id', as: 'group'});
        }
    };
    chat_group_members.init({
        member_id: DataTypes.INTEGER,
        group_id: DataTypes.INTEGER,
        confirmed: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'chat_groups_members',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return chat_group_members;
};