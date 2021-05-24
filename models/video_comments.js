'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class video_comments extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            video_comments.belongsTo(models.users, {as: 'user', foreignKey: 'from_id'});
            // video_comments.belongsTo(models.video_comments, {as: 'replies', foreignKey: 'to_comment_id'});
            video_comments.belongsTo(video_comments, {as: "Parent", foreignKey: 'id'});
            video_comments.hasMany(video_comments, {
                as: "replies",
                foreignKey: "to_comment_id",
                useJunctionTable: false
            });
        }
    }

    video_comments.init({
        video_id: DataTypes.INTEGER,
        from_id: DataTypes.INTEGER,
        comment: DataTypes.TEXT,
        likes_count: DataTypes.INTEGER,
        is_reply: DataTypes.INTEGER,
        to_comment_id: DataTypes.INTEGER,
        to_user_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'video_comments',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return video_comments;
};
