const axios = require('axios');
exports.getDailyStocks = async (req, res) => {
    let url = `https://financialmodelingprep.com/api/v3/historical-price-full/MSFT,GOOG,AAPL,SPCE,DIS?apikey=${process.env.FMP_CLOUD_API_KEY}&timeseries=1`;
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else res.json(response.data.historicalStockList);
};
