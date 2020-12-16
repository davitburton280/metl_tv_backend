'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class channels extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            channels.belongsTo(models.users, {foreignKey: 'user_id', as: 'user'});
            channels.hasMany(models.videos, {foreignKey: 'channel_id'});
            channels.belongsToMany(models.users, {
                as: 'subscribers',
                through: models.channel_subscribers,
                foreignKey: 'channel_id'
            })
        }

    };
    channels.init({
        user_id: DataTypes.INTEGER,
        name: DataTypes.STRING,
        description: DataTypes.TEXT,
        avatar: DataTypes.STRING,
        cover: DataTypes.STRING,
        subscribers_count: DataTypes.NUMBER
    }, {
        sequelize,
        modelName: 'channels',
        underscored: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    });
    return channels;
};
