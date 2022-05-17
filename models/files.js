'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class files extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    files.init({
        user_id: DataTypes.INTEGER,
        type: DataTypes.STRING,
        mimetype: DataTypes.STRING,
        name: DataTypes.STRING,
        originalName: DataTypes.STRING,
        extension: DataTypes.STRING,
        path: DataTypes.STRING,
        size: DataTypes.INTEGER,
        duration: DataTypes.STRING,
        duration_miliseconds: DataTypes.INTEGER,
        belonging: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'files',
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    });
    return files;
};