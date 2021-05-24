'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class users_comments extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    users_comments.init({
        user_id: DataTypes.INTEGER,
        comment_id: DataTypes.INTEGER,
        liked: DataTypes.INTEGER,
        disliked: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'users_comments',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return users_comments;
};
