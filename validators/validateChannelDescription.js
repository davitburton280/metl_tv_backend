// Express Validator
const {body} = require('express-validator');
const db = require('../models');
const Videos = db.videos;
const VideoTags = db.video_tags;
const bcrypt = require('bcryptjs');


const rules = [
    body('description').not().isEmpty().withMessage('The channel description is required'),
    body().custom(async (req) => {
        let description = req.description;

        if (description.length > 100) throw new Error('Please write not more than 100 symbols');
        return true;
    })
];

module.exports = {
    rules
};
