// Express Validator
const {body} = require('express-validator');
const db = require('../models');
const Users = db.users;
const UsersCards = db.users_cards;
const moment = require('moment');

const rules = [
    // body('email').not().isEmpty().withMessage('E-mail is required').isEmail().withMessage('E-mail is invalid'),
    // body('password', 'Password is required').not().isEmpty(),
    body().custom(async (req) => {
        console.log(req)
        let data = req;

        let card = {
            holder_name: data.holderName,
            number_part: data.last4,
            expiry_date: moment(data.exp_month + '/' + data.exp_year, 'MM/YYYY').format('MM/YYYY'),
            brand: data.brand,
            country: data.country
        };
        let stripeUserCardFound = await UsersCards.findOne({where: card});
        if (stripeUserCardFound) {
            throw new Error('A card with such details already exists');
        }


    })
];

module.exports = {
    rules
};