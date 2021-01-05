'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class users_videos extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    users_videos.init({
        user_id: DataTypes.INTEGER,
        video_id: DataTypes.INTEGER,
        liked: DataTypes.INTEGER,
        disliked: DataTypes.INTEGER,
        viewed: DataTypes.INTEGER,
        saved: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'users_videos',
        underscored: true,
        timestamps: false
    });
    return users_videos;
};
