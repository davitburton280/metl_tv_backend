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
const usersController = require('./usersController');

const config = require('../config/constants');


exports.getDailyStocks = async (req, res) => {
    let url = `${config.FMP_API_V3_URL}ticker-bar?limit=200&apikey=${process.env.FMP_CLOUD_API_KEY}`;
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
    let url = `${config.FMP_API_V3_URL}quote-order/%5EDJI,%5EGSPC,%5EIXIC,OVX,BTCUSD,EURUSD?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const indices = await axios.get(url);

    let graphDataUrl = `${config.FMP_API_V3_URL}historical-chart-menu?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const graphDataResponse = await axios.get(graphDataUrl);

    indices.data.map(i => {
        graphDataResponse.data[i.symbol].map(d => {
            d.name = d.date;
            d.value = d.close;
        });
        i.series = graphDataResponse.data[i.symbol];
    });

    if (graphDataResponse.data['Error Message']) {
        res.status(400).send({msg: graphDataResponse.data['Error Message']})
    } else res.json(indices.data);
};

exports.getStocksByType = async (req, res) => {
    let data = req.query;
    let {type} = data;
    console.log('get stocks by type!!!!')

    let urlPart = type === 'stocks' ? `private/quotes` : `quotes/${type}`;
    const response = await axios.get(`${config.FMP_API_V3_URL}${urlPart}?apikey=${process.env.FMP_CLOUD_API_KEY}`);
    let stocks = '';
    response.data.map((us, i) => {
        if (i < config.MAX_STOCKS_COUNT_FOR_BATCH) {
            stocks += us.symbol + ',';
        }
    });


    let graphDataUrl = `${config.FMP_API_V3_URL}private/historical-chart/1min/${stocks.slice(0, -1)}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const graphDataResponse = await axios.get(graphDataUrl);

    let ret = [];
    response.data.map((r) => {
        if (graphDataResponse.data[r.symbol]) {
            graphDataResponse.data[r.symbol].map(d => {
                d.name = d.date;
                d.value = d.close;
            });
            ret.push({...r, series: graphDataResponse.data[r.symbol]})
        } else {
            ret.push(r)
        }
    });

    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else res.json(ret);

};

exports.getHistoricalPrices = async (req, res) => {
    let url = `${config.FMP_API_V3_URL}historical-price-full/MSFT,GOOG,AAPL,SPCE,DIS?apikey=${process.env.FMP_CLOUD_API_KEY}&timeseries=1`;
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else res.json(response.data);
};

exports.getStockChartData = async (req, res) => {
    let {stock} = req.query;
    let chartUrl = `${config.FMP_API_V3_URL}historical-chart/1min/${stock}?apikey=${process.env.FMP_CLOUD_API_KEY}&limit=600`;
    const chartData = await axios.get(chartUrl);

    let tableDataUrl = `${config.FMP_API_V3_URL}quote/${stock}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const tableData = await axios.get(tableDataUrl);

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

// exports.getStockQuote = async (req, res) => {
//     let {stock} = req.query;
//     let url = `https://financialmodelingprep.com/api/v3/quote/${stock}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
//     const response = await axios.get(url);
//     if (response.data['Error Message']) {
//         res.status(400).send({msg: response.data['Error Message']})
//     } else {
//
//         res.json(response.data);
//     }
//
// };

exports.getStockHistoricalPrices = async (req, res) => {
    let {stock} = req.query;
    let url = `${config.FMP_API_V3_URL}historical-price-full/${stock}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    // console.log(url)
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else {

        res.json(response.data);
    }
};

exports.getCustomStocksChartData = async (req, res) => {
    let {stocks} = req.query;
    let url = `${config.FMP_API_V3_URL}private/historical-chart/${stocks}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else {
        res.json(response.data);
    }
};


exports.getUserStocks = async (req, res) => {
    let {user_id, type_id, sort_type} = req.query;
    let whereType = type_id ? {type_id: +type_id} : {};
    console.log('get user stocks!!!!')


    let order = [[sequelize.col(`user_stocks->users_stocks.position_id`), 'asc']];

    if (sort_type === 'A-Z') {
        order = [[sequelize.col(`user_stocks.name`), 'asc']];
    } else if (sort_type === 'Gain' || sort_type === 'Loss') {
        order = [[sequelize.col(`user_stocks.change`), sort_type === 'Gain' ? 'desc' : 'asc']];
    }


    let userStocks = await Users.findOne({
        where: {id: user_id},
        include: [
            {model: Stocks, as: 'user_stocks', where: whereType},
            {model: StocksOrderType, as: 'stocks_order_type'}
        ], attributes: ['id'],
        order: order
    });

    if (userStocks) {
        let stocks = '';
        userStocks.user_stocks.map((us, index) => {
            if (index < config.MAX_STOCKS_COUNT_FOR_BATCH) {
                stocks += us.symbol + ',';
            }
        });

        stocks = stocks.slice(0, -1);

        let graphDataUrl = `${config.FMP_API_V3_URL}private/historical-chart/1min/${stocks}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
        console.log(graphDataUrl)
        const graphDataResponse = await axios.get(graphDataUrl);

        let ret = [];
        userStocks.user_stocks.map((us, index) => {
            if (graphDataResponse.data[us.symbol]) {

                graphDataResponse.data[us.symbol].map(d => {
                    d.name = d.date;
                    d.value = d.close;
                });

                ret.push({...us.toJSON(), series: graphDataResponse.data[us.symbol]})
            }
        });

        let result = {user_stocks: ret, stocks_order_type: userStocks.stocks_order_type};
        console.log('result ready!!!')
        if (graphDataResponse.data['Error Message']) {
            res.status(400).send({msg: graphDataResponse.data['Error Message']})
        } else res.json(result)
    } else {
        res.json(userStocks)
    }
};


exports.getStocksGraphData = async (req, res) => {
    let {stocks} = req.query;


    let graphDataUrl = `${config.FMP_API_V3_URL}private/historical-chart/1min/${stocks}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    let stocksArr = stocks.split(',');

    const graphDataResponse = await axios.get(graphDataUrl);
    console.log('get stocks graph data!!!!')

    let ret = [];
    stocksArr.map((symbol) => {
        if (graphDataResponse.data[symbol]) {
            graphDataResponse.data[symbol].map(d => {
                d.name = d.date;
                d.value = d.close;
            });

            ret.push({...{symbol}, series: graphDataResponse.data[symbol]})
        }
    });

    res.json(ret)
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
    let {user_id, rows, order_type, changeSortTypeOnly} = req.body;
    rows = JSON.parse(rows);
    console.log('priority update!!!')
    let stocks_order = await StocksOrderType.findOne({where: {value: order_type}, raw: true, attributes: ['id']});
    if (stocks_order) {
        await Users.update({stocks_order_type_id: stocks_order.id}, {where: {id: user_id}});
        if (order_type === 'custom' && !changeSortTypeOnly) {
            rows.map(async (r) => {
                await UsersStocks.update({position_id: rows.indexOf(r) + 1}, {
                    where: {
                        user_id: user_id,
                        stock_id: r.id
                    }
                });
            });
        }
        await usersController.changeJwt({id: user_id}, res);
    }
};

exports.searchStocksBySymbol = async (req, res) => {
    let {search} = req.query;
    let url = `${config.FMP_URL}web/v2/tickers/summary?count=7&symbol=${search}&apikey=${process.env.FMP_CLOUD_API_KEY}`;

    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else {

        res.json(response.data);
    }
};

exports.searchInStockTypeData = async (req, res) => {
    let {search, stockType, grouped} = req.query;

    let exchanges = grouped ? 'ETF,CRYPTO,FOREX,AMEX,NASDAQ,NYSE' : (stockType === 'stocks' ? 'AMEX,NASDAQ,NYSE' : stockType);
    let url = `${config.FMP_API_V3_URL}search?query=${search}&limit=14&exchange=${exchanges}&apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const response = await axios.get(url);
    // console.log(response.data)
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else {
        let ret = [];
        if (+grouped) {

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

            res.json(ret);
        } else {
            ret = response.data;
            let stocks = '';

            let stockTypes = await StockTypes.findAll({raw: true});

            ret.map((us, index) => {
                if (['NYSE', 'AMEX', 'NASDAQ'].indexOf(us.exchangeShortName) !== -1) {
                    us.exchangeShortName = 'STOCKS'
                }
                if (index < config.MAX_STOCKS_COUNT_FOR_BATCH) {
                    stocks += us.symbol + ',';
                }
                let foundStockType = stockTypes.find(st => us.exchangeShortName.toLowerCase() === st.value);
                if (foundStockType) {
                    us.type_id = foundStockType.id;
                }
            });

            let result = [];
            if (stocks) {
                let url = `${config.FMP_API_V3_URL}quote/${stocks}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
                console.log(url)
                const resp = await axios.get(url);

                resp.data.map(r => {
                    let foundStock = ret.find(st => st.symbol === r.symbol);
                    if (foundStock) {
                        result.push({...foundStock, ...r});
                    }
                });
            }
            res.json(result)
        }


    }
};

exports.getBatchResults = async (req, res) => {
    let {stocks} = req.query;
    let url = `${config.FMP_API_V3_URL}quote/${stocks}?apikey=${process.env.FMP_CLOUD_API_KEY}`;
    const response = await axios.get(url);
    if (response.data['Error Message']) {
        res.status(400).send({msg: response.data['Error Message']})
    } else {
        res.json(response.data);
    }
};
