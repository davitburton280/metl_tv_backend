// Express Validator
const {body} = require('express-validator');
const db = require('../models');
const Videos = db.videos;
const bcrypt = require('bcryptjs');

const rules = [
    body('token').not().isEmpty().withMessage('Token is required'),
    body().custom(async (req) => {
        let token = req.token;

        // Checking email existence & passwords match
        let found = await Videos.findOne({where: {token}});
        if (found) throw new Error('A video with such token already exist');
        return true;
    })
];

module.exports = {
    rules
};
