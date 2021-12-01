// Express Validator
const {body} = require('express-validator');
const db = require('../models');
const Users = db.users;
const bcrypt = require('bcryptjs');

const rules = [
    body('message').not().isEmpty().withMessage('Message is required'),
    body().custom(async (req) => {
        let message = req.message;
console.log("OK",message.trim() === "")

        if (message.trim() === "") throw new Error('Empty messages not allowed');
        return true;
    })
];

module.exports = {
    rules
};
