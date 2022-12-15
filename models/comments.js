'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class comments extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            comments.belongsTo(models.users, { as: 'user', foreignKey: 'user_id' })
            comments.belongsTo(models.users, { as: 'replyUser', foreignKey: 'reply_user_id' })
            comments.hasOne(models.comments, { as: 'reply', foreignKey: 'parent_comment' })
            // define association here
        }
    };
    comments.init({
        user_id: DataTypes.INTEGER,
        post_id: DataTypes.INTEGER,
        video_id: DataTypes.INTEGER,
        is_reply: DataTypes.INTEGER,
        comment: DataTypes.TEXT,
        parent_comment: DataTypes.INTEGER,
        likes_count: DataTypes.INTEGER,
        dislikes_count: DataTypes.INTEGER,
        files: DataTypes.JSON,
        reply_count: DataTypes.INTEGER,
        likes: DataTypes.JSON,
        dislikes: DataTypes.JSON
    }, {
        sequelize,
        modelName: 'comments',
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        underscored: true
    });
    return comments;
};
