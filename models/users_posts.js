module.exports = (sequelize, Sequelize) => {
    const Currency = sequelize.define('posts', {
        user_id: DataTypes.INTEGER,
        post_id: DataTypes.INTEGER,
        liked: DataTypes.INTEGER,
        disliked: DataTypes.INTEGER,
        viewed: DataTypes.INTEGER,
        saved: DataTypes.INTEGER,
        voted: DataTypes.INTEGER,

        createdAt: { type: Sequelize.DATE },
        updatedAt: { type: Sequelize.DATE }
    });

    return Currency;
};