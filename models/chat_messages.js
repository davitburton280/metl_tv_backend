'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class chat_messages extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };
    chat_messages.init({
        from_id: DataTypes.INTEGER,
        message: DataTypes.STRING,
        to_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'chat_messages',
    });
    return chat_messages;
};
