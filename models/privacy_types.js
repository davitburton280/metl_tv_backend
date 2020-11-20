'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class privacy_types extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    privacy_types.init({
        name: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'privacy_types',
        timestamps: false
    });
    return privacy_types;
};
