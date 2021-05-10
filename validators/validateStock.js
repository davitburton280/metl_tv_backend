// Express Validator
const {body} = require('express-validator');
const db = require('../models');
const Stocks = db.sticks;
const VideoTags = db.video_tags;
const bcrypt = require('bcryptjs');


const rules = [
    body('stocks.*.name').not().isEmpty().withMessage('The stock name is required'),
    body('stocks.*.symbol').not().isEmpty().exists(),
    body().custom(async (req) => {
        let stocks = req.stocks;
        console.log('validation!!!')
        console.log(stocks.length)
        // stocks.map(st =>{
        //    let found = await Stocks.findOne({})
        // });
        //
        //
        if (stocks.length > 25) throw new Error('We support not more than 25 stocks per user');
        return true;
    })
];

module.exports = {
    rules
};
