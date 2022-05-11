'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class posts_comments extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            posts_comments.belongsTo(models.users, {as: 'user', foreignKey: 'user_id'});
            // posts_comments.belongsTo(models.posts_comments, {as: 'replies', foreignKey: 'to_comment_id'});
            posts_comments.belongsTo(posts_comments, {as: "Parent", foreignKey: 'id'});
            posts_comments.hasMany(posts_comments, {
                as: "replies",
                foreignKey: "to_comment_id",
                useJunctionTable: false
            });
            posts_comments.belongsToMany(models.users, {
                as: 'reactors',
                through: models.users_comments,
                foreignKey: 'comment_id'
            });
        }
    }

    posts_comments.init({
        post_id: DataTypes.INTEGER,
        user_id: DataTypes.INTEGER,
        comment: DataTypes.TEXT,
        likes: DataTypes.INTEGER,
        dislikes: DataTypes.INTEGER,
        is_reply: DataTypes.INTEGER,
        reply_count: DataTypes.INTEGER,
        to_comment_id: DataTypes.INTEGER,
        to_user_id: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'posts_comments',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return posts_comments;
};
