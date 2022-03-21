// Express Validator
const {body} = require('express-validator');
const db = require('../models');



const rules = [
    // body('name').not().isEmpty().withMessage('Playlist name is required'),
    body('description').not().isEmpty().withMessage('Playlist description is required'),
    // body('privacy').not().isEmpty().withMessage('Playlist privacy is required'),
];

module.exports = {
    rules
};
