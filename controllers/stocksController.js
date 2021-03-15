const axios = require('axios');
exports.getDailyStocks = async (req, res) => {
    // let url = `https://financialmodelingprep.com/api/v3/historical-price-full/MSFT,GOOG,AAPL,SPCE,DIS?apikey=${process.env.FMP_CLOUD_API_KEY}&timeseries=1`;
    // let url = `https://financialmodelingprep.com/api/v3/quote/MSFT,GOOG,AAPL,SPCE,DIS?apikey=${process.env.FMP_CLOUD_API_KEY}&timeseries=1`;
    let url = `https://financialmodelingprep.com/api/v3/ticker-bar?limit=200&apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else res.json(response.data);
};


exports.getMajorIndexes = async (req, res) => {
    let url = `https://financialmodelingprep.com/api/v3/quote-order/%5EDJI,%5EGSPC,%5EIXIC,%5EOVX?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else res.json(response.data);
};

exports.getStocksByType = async (req, res) => {
    let data = req.query;
    let {type} = data;
    let url;
    if (type !== 'stocks' && type !== 'all') {
        url = `https://financialmodelingprep.com/api/v3/quotes/${type}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    }
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else res.json(response.data);

};

exports.getHistoricalPrices = async (req, res) => {
    let url = `https://financialmodelingprep.com/api/v3/historical-price-full/MSFT,GOOG,AAPL,SPCE,DIS?apikey=${process.env.FMP_CLOUD_API_KEY}&timeseries=1`;
    // let url = `https://financialmodelingprep.com/api/v3/quote/MSFT,GOOG,AAPL,SPCE,DIS?apikey=${process.env.FMP_CLOUD_API_KEY}&timeseries=1`;
    // let url = `https://financialmodelingprep.com/api/v3/ticker-bar?limit=200&apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else res.json(response.data);
};

