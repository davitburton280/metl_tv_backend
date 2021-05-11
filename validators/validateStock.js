// Express Validator
const {body} = require('express-validator');
const db = require('../models');
const Stocks = db.stocks;
const UsersStocks = db.users_stocks;
const Users = db.users;
const VideoTags = db.video_tags;
const bcrypt = require('bcryptjs');


const rules = [
        body('stocks.*.name').not().isEmpty().withMessage('The stock name is required'),
        body('stocks.*.symbol').not().isEmpty().exists(),
        body().custom(async (req) => {
            console.log('validation!!!')
            let userStocks = await Users.findOne({
                where: {id: req.user_id},
                include: [
                    {model: Stocks, as: 'user_stocks'}
                ]
            });
            console.log(req.stocks.length)
            console.log(userStocks.user_stocks.length)
            if (userStocks.user_stocks.length > 25) throw new Error('We support not more than 25 stocks per user');
            return true;
        })
    ]
;

module.exports = {
    rules
};
