const {NO_SPACE_PATTERN, TEXT_ONLY_WITHOUT_SPECIALS_PATTERN, NUMBER_AFTER_TEXT_PATTERN} = require('../config/constants');

const {body} = require('express-validator');
const db = require('../models');
const Users = db.users;


const rules = [
    body('full_name')
        .matches(TEXT_ONLY_WITHOUT_SPECIALS_PATTERN).withMessage('Full name should contain only alphabetical characters')
        .not().isEmpty().withMessage('Full name is required'),
    body('username')
        .not().isEmpty().withMessage('Username is required')
        .matches(NUMBER_AFTER_TEXT_PATTERN).withMessage('Please write alphabetical characters before numbers for username'),
    body('email').not().isEmpty().withMessage('E-mail is required').isEmail().withMessage('E-mail is invalid'),
    body('password')
        .matches(NO_SPACE_PATTERN).withMessage('Password should not contain spaces')
        .not().isEmpty().withMessage('Password is required'),
    body('birthday')
        .not().isEmpty().withMessage('Birth day is required'),
    body().custom(async (req) => {
        let email = req.email;

        // Retrieving a user with request email
        let user = await Users.findOne({where: {email: email}});

        if (user != null) throw new Error('E-mail exists');

        if (req.password !== req.confirm_password) {
            throw new Error('Passwords don\'t match');
        }
    }),



];

module.exports = {
    rules
};
