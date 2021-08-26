// Express Validator
const {body} = require('express-validator');
const db = require('../models');
const Cards = db.users_cards;

const rules = [
    body('name').isEmpty().withMessage('The card name is required'),
    body().custom(async (req) => {
        let cardsLen = await Cards.count({where: {user_id: req.user_id}});
        if (cardsLen === 3) throw new Error('We support only 3 cards per user');
        return true;
    })
];

module.exports = {
    rules
};
