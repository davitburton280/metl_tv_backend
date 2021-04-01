'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class stocks extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            stocks.belongsToMany(models.users, {
                as: 'user_stocks',
                through: models.users_stocks,
                foreignKey: 'stock_id'
            });
        }
    }

    stocks.init({
        symbol: DataTypes.STRING,
        name: DataTypes.STRING,
        change: DataTypes.FLOAT,
        price: DataTypes.FLOAT,
        changesPercentage: DataTypes.STRING,
    }, {
        sequelize,
        modelName: 'stocks',
    });
    return stocks;
};
