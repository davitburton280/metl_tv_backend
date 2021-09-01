// Express Validator
const {body} = require('express-validator');
const db = require('../models');
const Videos = db.videos;
const VideoTags = db.video_tags;
const bcrypt = require('bcryptjs');


const rules = [
    body('name').not().isEmpty().withMessage('The video name is required'),
    body().custom(async (req) => {
        let tags = JSON.parse(req.tags);

        // let rowTagsCount = await VideoTags.count({where: {video_id: req.video_id}});
        // console.log(rowTagsCount)
        // if (rowTagsCount > 5) throw new Error('We support only 5 tags per video');
        console.log(tags, tags.length)
        if (tags.length > 3) throw new Error('We support only 3 tags per video');
        return true;
    })
];

module.exports = {
    rules
};
