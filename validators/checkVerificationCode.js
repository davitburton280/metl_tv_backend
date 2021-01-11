// Express Validator
const {body} = require('express-validator');
const db = require('../models');
const Users = db.users;
const bcrypt = require('bcryptjs');

const rules = [
    body('email').not().isEmpty().withMessage('E-mail is required').isEmail().withMessage('E-mail is invalid'),
    body().custom(async (req) => {
        let user = await Users.findOne({where: {email: req.email}});
        if (!user) throw new Error('A user with such email doesn\'t exist');

        console.log('!!!!!!!!!!')
        console.log(user.verification_code, req.code)
        console.log('!!!!!!!!!!')
        if (user.verification_code !== +req.code) {
            throw new Error('Verification code is wrong')
        }
    })
];

module.exports = {
    rules
};