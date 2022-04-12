const db = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const Posts = db.posts;
const Groups = db.groups;
const Users = db.users;
const UsersPosts = db.users_posts;
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
    console.log('get posts!!!')
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
            },
            {
                model: Users, as: 'user_posts', attributes: ['id', 'username']
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
                    'id', 'name', 'custom_name'
                ]
            },
            {
                model: Users, as: 'user_posts', attributes: ['id', 'username']
            }
        ],
        order: [
            ['created_at', 'desc']
        ]
    });
    res.json(post);
}

exports.vote = async (req, res) => {
    let {vote, post_id, user_id} = req.body;
    let p = await Posts.findOne({where: {id: post_id}, attributes: ['id', 'votes']});
    if (p) {
        let votesCount = p.votes + vote;
        console.log('vote!!!', req.body, p.votes, vote, votesCount)

        let foundPostVote = await UsersPosts.findOne({
            where: {
                post_id, user_id
            }
        })

        if (!foundPostVote) {
            await UsersPosts.create({post_id, user_id, liked: vote})
        } else {
            await UsersPosts.update({liked: vote}, {where: {post_id, user_id}});
        }

        await Posts.update({votes: votesCount}, {where: {id: post_id}});
        // req.query.author_id = user_id;
        this.get(req, res);
    }
}


exports.remove = async (req, res) => {

}

