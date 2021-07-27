const sequelize = require('sequelize');
module.exports = () => {
    return [sequelize.fn('concat', sequelize.col('first_name'), ' ', sequelize.col('last_name')), 'full_name']
}