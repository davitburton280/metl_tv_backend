'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class playlists_videos extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    playlists_videos.init({
        playlist_id: DataTypes.INTEGER,
        video_id: DataTypes.INTEGER,
        channel_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'playlists_videos',
        timestamps: false
    });
    return playlists_videos;
};