const generateExpDate = require('./generateCardExpiryDate');
module.exports = (data) => {
    return {
        holder_name: data.holderName,
        number_part: data.last4,
        expiry_date: generateExpDate(data),
        brand: data.brand,
        country: data.country
    };
}