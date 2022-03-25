const db = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const Posts = db.posts;
const Groups = db.groups;
const Users = db.users;
const to = require('../helpers/getPromiseResult');
const showIfErrors = require('../helpers/showIfErrors');

exports.add = async (req, res) => {
    if (!showIfErrors(req, res)) {
        const data = req.body;
        let {group_id, author_id} = data;
        if (!group_id) {
            group_id = null;
            data.group_id = group_id;
        }
        let p = await Posts.create(data);
        req.query.author_id = author_id;
        req.query.group_id = group_id;
        this.get(req, res);
    }
};

exports.get = async (req, res) => {
    let {author_id, group_id} = req.query;
    let where = {};
    if (author_id) {
        where.author_id = author_id;
    }
    if (group_id) {
        where.group_id = group_id;
    }
    let posts = await Posts.findAll({
        where: where,
        include: [
            {
                model: Users, as: 'post_author', attributes: [
                    'first_name', 'last_name', 'username', 'email', 'avatar'
                ]
            },
            {
                model: Groups, as: 'post_group', attributes: [
                    'id', 'name', 'custom_name'
                ]
            }
        ],
        order: [
            ['created_at', 'desc']
        ]
    });
    res.json(posts);
};

exports.getById = async (req, res) => {
    let {id} = req.query;
    let post = await Posts.findOne({
        where: {id},
        include: [
            {
                model: Users, as: 'post_author', attributes: [
                    'first_name', 'last_name', 'username', 'email', 'avatar'
                ]
            },
            {
                model: Groups, as: 'post_group', attributes: [
                    'id', 'name'
                ]
            }
        ],
        order: [
            ['created_at', 'desc']
        ]
    });
    res.json(post);
}

exports.remove = async (req, res) => {

}

