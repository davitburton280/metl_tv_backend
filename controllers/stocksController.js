exports.getDailyStocks = async (req, res) => {

    const stocks = {
        "historicalStockList" : [ {
            "symbol" : "MSFT",
            "historical" : [ {
                "date" : "2021-02-25",
                "open" : 232.080002,
                "high" : 234.585205,
                "low" : 228.5,
                "close" : 228.990005,
                "adjClose" : 228.990005,
                "volume" : 3.7467138E7,
                "unadjustedVolume" : 3.7467138E7,
                "change" : -3.09,
                "changePercent" : -1.331,
                "vwap" : 230.69174,
                "label" : "February 25, 21",
                "changeOverTime" : -0.01331
            } ]
        }, {
            "symbol" : "GOOG",
            "historical" : [ {
                "date" : "2021-02-25",
                "open" : 2067.449951,
                "high" : 2094.879883,
                "low" : 2021.290039,
                "close" : 2031.359985,
                "adjClose" : 2031.359985,
                "volume" : 1713513.0,
                "unadjustedVolume" : 1713513.0,
                "change" : -36.08997,
                "changePercent" : -1.746,
                "vwap" : 2049.17664,
                "label" : "February 25, 21",
                "changeOverTime" : -0.01746
            } ]
        }, {
            "symbol" : "AAPL",
            "historical" : [ {
                "date" : "2021-02-25",
                "open" : 124.68,
                "high" : 126.458504,
                "low" : 120.760002,
                "close" : 120.989998,
                "adjClose" : 120.989998,
                "volume" : 1.40936825E8,
                "unadjustedVolume" : 1.40936825E8,
                "change" : -3.69,
                "changePercent" : -2.96,
                "vwap" : 122.73617,
                "label" : "February 25, 21",
                "changeOverTime" : -0.0296
            } ]
        }, {
            "symbol" : "SPCE",
            "historical" : [ {
                "date" : "2021-02-25",
                "open" : 45.0,
                "high" : 47.200001,
                "low" : 41.66,
                "close" : 42.240002,
                "adjClose" : 42.240002,
                "volume" : 8628830.0,
                "unadjustedVolume" : 8628830.0,
                "change" : -2.76,
                "changePercent" : -6.133,
                "vwap" : 43.7,
                "label" : "February 25, 21",
                "changeOverTime" : -0.06133
            } ]
        }, {
            "symbol" : "DIS",
            "historical" : [ {
                "date" : "2021-02-25",
                "open" : 197.729996,
                "high" : 197.960007,
                "low" : 190.380005,
                "close" : 190.979996,
                "adjClose" : 190.979996,
                "volume" : 1.1869672E7,
                "unadjustedVolume" : 1.1869672E7,
                "change" : -6.75,
                "changePercent" : -3.414,
                "vwap" : 193.10667,
                "label" : "February 25, 21",
                "changeOverTime" : -0.03414
            } ]
        } ]
    };
    console.log(stocks)
    res.json(stocks.historicalStockList);
};
