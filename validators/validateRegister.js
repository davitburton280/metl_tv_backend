const {NO_SPACE_PATTERN, TEXT_ONLY_WITHOUT_SPECIALS_PATTERN, NUMBER_AFTER_TEXT_PATTERN} = require('../config/constants');

const {body} = require('express-validator');
const db = require('../models');
const Users = db.users;


const rules = [
    body('first_name')
        .matches(TEXT_ONLY_WITHOUT_SPECIALS_PATTERN).withMessage('First name should contain only alphabetical characters')
        .not().isEmpty().withMessage('First name is required'),
    body('last_name')
        .matches(TEXT_ONLY_WITHOUT_SPECIALS_PATTERN).withMessage('Last name should contain only alphabetical characters')
        .not().isEmpty().withMessage('Last name is required'),
    body('username')
        .not().isEmpty().withMessage('Username is required')
        .matches(NUMBER_AFTER_TEXT_PATTERN).withMessage('Please write alphabetical characters before numbers for username'),
    body('email').not().isEmpty().withMessage('E-mail is required').isEmail().withMessage('E-mail is invalid'),
    body('password')
        .matches(NO_SPACE_PATTERN).withMessage('Password should not contain spaces')
        .not().isEmpty().withMessage('Password is required'),
    // body('birthday')
    //     .not().isEmpty().withMessage('Birth day is required'),
    body().custom(async (req) => {
        let email = req.email;

        // Retrieving a user with request email
        let user = await Users.findOne({where: {email: email}});

        if (user != null) throw new Error('E-mail exists');

        let userByUsername = await Users.findOne({where: {username: req.username}});

        if(userByUsername){

        }

        if (req.password !== req.confirm_password) {
            throw new Error('Passwords don\'t match');
        }
    }),



];

module.exports = {
    rules
};
