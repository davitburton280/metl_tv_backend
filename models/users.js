'use strict';
module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define('users', {
        role_id: DataTypes.INTEGER,
        status_id: DataTypes.INTEGER,
        stocks_order_type_id: DataTypes.INTEGER,
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        username: DataTypes.STRING,
        birthday: DataTypes.DATEONLY,
        gender: DataTypes.STRING,
        email: DataTypes.STRING,
        phone: DataTypes.STRING,
        password: DataTypes.STRING,
        avatar: DataTypes.STRING,
        cover: DataTypes.STRING,
        verification_code: DataTypes.INTEGER,
        // access_token: DataTypes.STRING
    }, {timestamps: false, underscored: true});
    users.associate = function (models) {
        users.hasMany(models.videos, {as: 'videos', foreignKey: 'author_id'});
        users.hasMany(models.users_cards, {foreignKey: 'user_id'});
        users.hasMany(models.chat_messages, {as: 'from_messages', foreignKey: 'from_id'});
        users.hasMany(models.users_connection, {as: 'connection', foreignKey: 'connection_id'});
        users.hasMany(models.users_connection, {as: 'user', foreignKey: 'user_id'});
        users.hasMany(models.chat_messages, {as: 'to_messages', foreignKey: 'to_id'});
        users.hasMany(models.users_tags, {as: 'tags_users', foreignKey: 'tag_id'}); // ?
        users.hasOne(models.channels, {foreignKey: 'user_id', as: 'channel'});
        users.belongsTo(models.stocks_ordering_types, {foreignKey: 'stocks_order_type_id', as: 'stocks_order_type'});


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
        users.belongsToMany(models.stocks, {
            as: 'user_stocks',
            through: models.users_stocks,
            foreignKey: 'user_id'
        });

        users.belongsToMany(models.video_comments, {
            as: 'users_with_comments',
            through: models.users_comments,
            foreignKey: 'user_id'
        });

        // users.belongsToMany(models.chat_groups, {
        //     as: 'users_chat_groups',
        //     through: models.user_chat_groups,
        //     foreignKey: 'user_id'
        // });

        users.belongsToMany(models.chat_groups, {
            as: 'chat_group_members',
            through: models.chat_groups_members,
            foreignKey: 'member_id'
        });

        // associations can be defined here
    };
    return users;
};
