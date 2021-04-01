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
        // stocks.map(st =>{
        //    let found = await Stocks.findOne({})
        // });
        //
        //
        // if (tags.length > 3) throw new Error('We support only 3 tags per video');
        return true;
    })
];

module.exports = {
    rules
};
