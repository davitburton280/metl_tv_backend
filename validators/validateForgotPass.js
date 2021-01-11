// Express Validator
const {body} = require('express-validator');
const db = require('../models');
const Users = db.users;
const bcrypt = require('bcryptjs');

const rules = [
    body('email').not().isEmpty().withMessage('E-mail is required').isEmail().withMessage('E-mail is invalid'),
    body().custom(async (req) => {
        let email = req.email;

        // Checking email existence & passwords match
        let found = await Users.findOne({where: {email}});
        if (!found) throw new Error('A user with such email doesn\'t exist');
        return true;
    })
];

module.exports = {
    rules
};
