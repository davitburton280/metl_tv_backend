const moment = require('moment');
module.exports = (data) => {
    return moment(data.exp_month + '/' + data.exp_year, 'MM/YYYY').format('MM/YYYY');
}