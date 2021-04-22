const axios = require('axios');
const moment = require('moment');
const db = require('../models');
const sequelize = require('sequelize');
const Users = db.users;
const UsersStocks = db.users_stocks;
const Stocks = db.stocks;
const StocksOrderType = db.stocks_ordering_types;
const StockTypes = db.stock_types;

const showIfErrors = require('../helpers/showIfErrors');

exports.getDailyStocks = async (req, res) => {
    let url = `https://financialmodelingprep.com/api/v3/ticker-bar?limit=200&apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else res.json(response.data);
};

exports.getStockTypes = async (req, res) => {
    let stockTypes = await StockTypes.findAll({});
    res.json(stockTypes);
};


exports.getMajorIndexes = async (req, res) => {
    let url = `https://financialmodelingprep.com/api/v3/quote-order/%5EDJI,%5EGSPC,%5EIXIC,OVX,BTCUSD,EURUSD?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const indices = await axios.get(url);

    let graphDataUrl = `https://financialmodelingprep.com/api/v3/historical-chart-menu?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const graphDataResponse = await axios.get(graphDataUrl);

    let ret = {};
    indices.data.map(i => {
        graphDataResponse.data[i.symbol].map(d => {
            d.name = d.date;
            d.value = d.close;
        });
        i.series = graphDataResponse.data[i.symbol];
    });

    // console.log(indices.data[0]);

    if (graphDataResponse.data['Error Message']) {
        res.status(400).send({msg: graphDataResponse.data['Error Message']})
    } else res.json(indices.data);
};

exports.getStocksByType = async (req, res) => {
    let data = req.query;
    let {type} = data;

    let url = `https://financialmodelingprep.com/api/v3/quotes/${type}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    if (type === 'stocks') {
        url = `https://financialmodelingprep.com/api/v3/private/quotes?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    }
    // console.log(url)
    const response = await axios.get(url);
    let ret = [];
    response.data.map((d, index) => {
        // if (index < 50) {
        ret.push(d)
        // }
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
    // console.log(chartUrl)
    const chartData = await axios.get(chartUrl);
    // console.log(chartData.data.length)

    let tableDataUrl = `https://financialmodelingprep.com/api/v3/quote/${stock}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const tableData = await axios.get(tableDataUrl);
console.log(tableData.data)

    let ret = {chart: [{series: [], name: stock}], table: tableData.data};

    chartData.data.map(d => {
        d.name = moment(d.date).format('HH:mm:ss');
        d.value = d.close;
        delete d.date;
        delete d.close;
    });
    ret.chart[0].series = chartData.data.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0));
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
    console.log(url)
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

exports.searchInStockTypeData = async (req, res) => {
    let {search, stockType, autocomplete} = req.query;
    let exchanges = autocomplete ? 'ETF,CRYPTO,FOREX,AMEX,NASDAQ,NYSE' : (stockType === 'stocks' ? 'AMEX,NASDAQ,NYSE' : stockType);
    let url = `https://financialmodelingprep.com/api/v3/search?query=${search}&exchange=${exchanges}&apikey=${process.env.FMP_CLOUD_API_KEY}`;
    console.log(url)
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else {
        let ret = [];

        if (autocomplete) {
            response.data.map((item, index) => {
                if (['NYSE', 'AMEX', 'NASDAQ'].indexOf(item.exchangeShortName) !== -1) {
                    item.exchangeShortName = 'STOCKS'
                }
                let indexOfFoundInRet = ret.indexOf(ret.find(d => d.name === item.exchangeShortName));
                let firstOccurrence = response.data.indexOf(response.data.find(d => d.exchangeShortName === item.exchangeShortName));
                if (firstOccurrence === index) {
                    ret.push({name: item.exchangeShortName, stocks: [item]});
                } else if (indexOfFoundInRet !== -1) {
                    ret[indexOfFoundInRet].stocks.push(item)
                }
            });
        } else {
            ret = response.data;
        }

        res.json(ret);
    }
};

exports.getUserStocks = async (req, res) => {
    let {stocks, user_id, type_id, sort_type} = req.query;
    let whereType = type_id ? {type_id: +type_id} : {};
    console.log('get user stocks!!!!')
    console.log(whereType)

    let order = [[sequelize.col(`user_stocks->users_stocks.position_id`), 'asc']];

    if (sort_type === 'A-Z') {
        order = [[sequelize.col(`user_stocks.name`), 'asc']];
    }


    let user_stocks = await Users.findOne({
        where: {id: user_id},
        include: [
            {model: Stocks, as: 'user_stocks', where: whereType},
            {model: StocksOrderType, as: 'stocks_order_type'}
        ], attributes: ['id'],
        order: order
    });
    // console.log(user_stocks)
    res.json(user_stocks);
};


exports.updateUserStocks = async (req, res) => {
    if (!showIfErrors(req, res)) {

        let {stocks, user_id, type_id} = req.body; //send type_id!!!!!!!!
        let where = {user_id: user_id};
        if (type_id) {
            where.type_id = type_id
        }


        await UsersStocks.destroy({where: where});

        let all = stocks.map(async (st, index) => {
            let found = await Stocks.findOne({where: {name: st.name}});
            // let stockType = await StockTypes.findOne({name: type});
            if (!found) {
                found = await Stocks.create(st);
            }

            // // Getting maximum position id of the user's stocks
            // let userStocks = await UsersStocks.findOne({
            //     where: {user_id: user_id},
            //     attributes: [sequelize.fn('MAX', sequelize.col('position_id'))],
            //     raw: true
            // });
            // console.log(userStocks);

            // console.log("position: " + position)
            await UsersStocks.create({
                user_id: user_id,
                stock_id: found.id,
                type_id: found.type_id,
                position_id: index + 1
            });
        });
        await Promise.all(all);


        req.query.user_id = req.body.user_id;
        req.query.type_id = req.body.type_id;
        this.getUserStocks(req, res);
    }
};

exports.updateUserStocksPriority = async (req, res) => {
    let {user_id, rows, order_type} = req.body;
    rows = JSON.parse(rows);
    console.log('priority update!!!')
    let stocks_order = await StocksOrderType.findOne({where: {value: order_type}, raw: true, attributes: ['id']});
    console.log(stocks_order)
    if (stocks_order) {
        await Users.update({stocks_order_type_id: stocks_order.id}, {where: {id: user_id}});
    }
    rows.map(async (r) => {
        await UsersStocks.update({position_id: rows.indexOf(r) + 1}, {
            where: {
                user_id: user_id,
                stock_id: r.id
            }
        });
    });

    res.json('OK');
};

exports.refreshUserStocks = async (stock, user_id) => {
    console.log({user_id: user_id, stock_id: stock.id})
    // let userStocksFind = await UsersStocks.findOne({where: {user_id: user_id, stock_id: stock.id}});

    // if (!userStocksFind) {


    // }
};
