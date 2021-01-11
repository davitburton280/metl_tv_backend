'use strict';
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        role_id: DataTypes.INTEGER,
        status_id: DataTypes.INTEGER,
        full_name: DataTypes.STRING,
        username: DataTypes.STRING,
        // last_name: DataTypes.STRING,
        birthday: DataTypes.DATEONLY,
        gender: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        password: DataTypes.STRING,
        avatar: DataTypes.STRING,
        cover: DataTypes.STRING,
        verification_code: DataTypes.TINYINT,
        // access_token: DataTypes.STRING
    }, {timestamps: false, underscored: true});
    users.associate = function (models) {
        users.hasMany(models.videos, {as: 'videos', foreignKey: 'author_id'});
        users.hasOne(models.channels, {foreignKey: 'user_id', as: 'channel'})
        users.belongsToMany(models.channels, {
            as: 'subscriptions',
            through: models.channel_subscribers,
            foreignKey: 'subscriber_id'
        });
        users.belongsToMany(models.videos, {
            as: 'users_vids',
            through: models.users_videos,
            foreignKey: 'user_id'
        });
        // associations can be defined here
    };
    return users;
};
