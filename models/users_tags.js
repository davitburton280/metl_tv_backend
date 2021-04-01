'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class users_tags extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            users_tags.belongsTo(models.tags, {as: 'tag_details', through: models.video_tags, foreignKey: 'tag_id'});
        }
    };
    users_tags.init({
        user_id: DataTypes.INTEGER,
        tag_id: DataTypes.INTEGER,
        popularity: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'users_tags',
        underscored: true
    });
    return users_tags;
};
