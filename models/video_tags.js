'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class video_tags extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    video_tags.init({
        name: DataTypes.STRING,
        video_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'video_tags',
        timestamps: false
    });
    return video_tags;
};
