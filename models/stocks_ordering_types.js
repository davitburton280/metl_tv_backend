'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class stocks_ordering_types extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // stocks_ordering_types.belongsTo(models.stocks, {
            //     as: 'order_types'
            // });
            stocks_ordering_types.belongsTo(models.users, {
                foreignKey: 'id',
                as: 'user_st_order_type'
            });

        }
    };
    stocks_ordering_types.init({
        name: DataTypes.STRING,
        value: DataTypes.STRING
    }, {
        sequelize,
        modelName: 'stocks_ordering_types',
        underscored: true,
        timestamps: false
    });
    return stocks_ordering_types;
};
