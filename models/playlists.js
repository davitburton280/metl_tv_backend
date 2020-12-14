'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class playlists extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            playlists.belongsToMany(models.videos, {
                as: 'videos',
                through: models.playlists_videos,
                foreignKey: 'playlist_id'
            })
            // define association here
        }
    };
    playlists.init({
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        thumbnail: DataTypes.STRING,
        privacy: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'playlists',
        underscored: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return playlists;
};
