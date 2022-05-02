module.exports = (sequelize, Sequelize) => {
    const Posts = sequelize.define('posts', {
        user_id: Sequelize.INTEGER,
        post_id: Sequelize.INTEGER,
        liked: Sequelize.INTEGER,
        disliked: Sequelize.INTEGER,
        viewed: Sequelize.INTEGER,
        saved: Sequelize.INTEGER,
        voted: Sequelize.INTEGER,

        created_at: { type: Sequelize.DATE },
        updated_at: { type: Sequelize.DATE }
    });

    return Posts;
};