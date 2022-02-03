// Express Validator
const {body} = require('express-validator');
const db = require('../models');
const Users = db.users;

const ChatGroups = db.chat_groups;

const rules = [
    body('name').not().isEmpty().withMessage('Group name is required'),
    body().custom(async (req) => {
        let group = await ChatGroups.findOne({where: {name: req.name}});
        console.log('!!!!!!!!!!')
        console.log(group)
        console.log('!!!!!!!!!!')
        if (group) throw new Error('A group with such name exists');


        // if (user.verification_code !== +req.code) {
        //     throw new Error('Verification code is wrong')
        // }
        return true;
    })
];

module.exports = {
    rules
};
