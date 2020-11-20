'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class videos extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            videos.belongsTo(models.users, {foreignKey: 'author_id'});
            videos.belongsTo(models.channels, {foreignKey: 'channel_id'});
            videos.hasMany(models.video_tags, {as: 'tags', foreignKey: 'video_id'});
        }
    };

    videos.init({
        author_id: DataTypes.INTEGER,
        channel_id: DataTypes.INTEGER,
        category_id: DataTypes.INTEGER,
        privacy_id: DataTypes.INTEGER,
        likes: DataTypes.INTEGER,
        dislikes: DataTypes.INTEGER,
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        session_name: DataTypes.STRING,
        token: DataTypes.STRING,
        filename: DataTypes.STRING,
        thumbnail: DataTypes.STRING,
        status: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'videos',
        underscored: true
    });
    return videos;
};
