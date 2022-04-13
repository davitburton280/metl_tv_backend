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
            videos.belongsTo(models.users, {as: 'user', foreignKey: 'author_id'});
            videos.belongsTo(models.channels, {foreignKey: 'channel_id', as: 'channel'});
            videos.belongsTo(models.privacy_types, {foreignKey: 'privacy_id', as: 'privacy'})
            // videos.hasMany(models.chat_messages, {as: 'chat', foreignKey: 'video_id'});
            videos.belongsToMany(models.users, {
                as: 'users_vids',
                through: models.users_videos,
                foreignKey: 'video_id'
            });
            videos.belongsToMany(models.playlists, {
                as: 'playlists',
                through: models.playlists_videos,
                foreignKey: 'video_id'
            });
            videos.belongsToMany(models.tags, {
                as: 'tags',
                through: models.video_tags,
                foreignKey: 'video_id'
            });
            videos.belongsTo(models.video_categories, {as: 'category', foreignKey: 'category_id'});
        }
    };


    videos.init({
        author_id: DataTypes.INTEGER,
        channel_id: DataTypes.INTEGER,
        category_id: DataTypes.INTEGER,
        privacy_id: DataTypes.INTEGER,
        likes: DataTypes.INTEGER,
        dislikes: DataTypes.INTEGER,
        views: DataTypes.INTEGER,
        participants: DataTypes.INTEGER,
        duration: DataTypes.STRING(4),
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
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return videos;
};
