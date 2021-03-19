const axios = require('axios');
const moment = require('moment');
exports.getDailyStocks = async (req, res) => {
    let url = `https://financialmodelingprep.com/api/v3/ticker-bar?limit=200&apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else res.json(response.data);
};


exports.getMajorIndexes = async (req, res) => {
    let url = `https://financialmodelingprep.com/api/v3/quote-order/%5EDJI,%5EGSPC,%5EIXIC,OVX,BTCUSD,EURUSD?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else res.json(response.data);
};

exports.getStocksByType = async (req, res) => {
    let data = req.query;
    let {type} = data;

    let url = `https://financialmodelingprep.com/api/v3/quotes/${type}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    if (type === 'stocks') {
        url = `https://financialmodelingprep.com/api/v3/private/quotes?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    }
    console.log(url)
    const response = await axios.get(url);
    let ret = [];
    response.data.map((d, index) => {
        if (index < 50) {
            ret.push(d)
        }
    });
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else res.json(ret);

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

exports.getStockChartData = async (req, res) => {
    let {stock} = req.query;
    let chartUrl = `https://financialmodelingprep.com/api/v3/historical-chart/1min/${stock}?apikey=${process.env.FMP_CLOUD_API_KEY}&limit=600`;
    const chartData = await axios.get(chartUrl);

    let tableDataUrl = `https://financialmodelingprep.com/api/v3/quote/${stock}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const tableData = await axios.get(tableDataUrl);


    let ret = {chart: [{series: [], name: stock}], table: tableData.data};

    chartData.data.map(d => {
        d.name = moment(d.date).format('HH:mm:ss');
        d.value = d.close;
        delete d.date;
        delete d.close;
    });
    ret.chart[0].series = chartData.data;
    res.json(ret);

};

exports.getStockQuote = async (req, res) => {
    let {stock} = req.query;
    let url = `https://financialmodelingprep.com/api/v3/quote/${stock}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else {

        res.json(response.data);
    }

};


exports.getStockHistoricalPrices = async (req, res) => {
    let {stock} = req.query;
    let url = `https://financialmodelingprep.com/api/v3/historical-price-full/${stock}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else {

        res.json(response.data);
    }
};

exports.searchStocksBySymbol = async (req, res) => {
    let {search} = req.query;
    let url = `https://financialmodelingprep.com/web/v2/tickers/summary?count=7&symbol=${search}&apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else {

        res.json(response.data);
    }
};
