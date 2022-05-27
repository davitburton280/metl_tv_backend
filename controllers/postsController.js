const db = require('../models');
const sequelize = require('sequelize');
const Op = sequelize.Op;
const Posts = db.posts;
const Groups = db.groups;
const Posts_Comments = db.posts_comments;
const Users = db.users;
const UsersPosts = db.users_posts;
const UserComments = db.users_comments;
const to = require('../helpers/getPromiseResult');
const showIfErrors = require('../helpers/showIfErrors');
const { FILTER_SORTING_FIELDS,
    FILTER_SORTINH_VALUES } = require('../helpers/filters');

const LIKES_REACTION_STATUSES = {
    like: 1,
    dislike: -1,
    none: 0
};

const FILTER_PRIORITY_TYPES = {
    hot: 'hot',
    new: 'new',
    top: 'top',
    bestOfTheWeek: 'best_of_the_week'
};

exports.add = async (req, res) => {
    if (!showIfErrors(req, res)) {
        const data = req.body;
        let { group_id, author_id } = data;
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

exports.edit = async (req, res) => {
    const { id } = req.query;
    const user = req.decoded;

    const currentPost = await Posts.findOne({ where: { id: +id, author_id: user.id } });
    if (!currentPost) return res.status(400).send("wrong post id, or current post author is not a this user");
    const { group_id, description, cover_img } = req.body;

    await Posts.update({ group_id, description, cover_img }, { where: id, author_id: user.id });
    this.get(req, res);
}

const setSortingModel = (sorting_keyword) => {
    let sort = [FILTER_SORTING_FIELDS.postsFiltersFields.created_at, FILTER_SORTINH_VALUES.desc];

    if (sorting_keyword) {
        let sortingKey = null;
        switch (sorting_keyword) {
            case FILTER_PRIORITY_TYPES.hot:
                sortingKey = FILTER_SORTING_FIELDS.postsFiltersFields.likes;
                break;

            case FILTER_PRIORITY_TYPES.new:
                sortingKey = FILTER_SORTING_FIELDS.postsFiltersFields.created_at;
                break;


            case FILTER_PRIORITY_TYPES.top:
                sortingKey = FILTER_SORTING_FIELDS.postsFiltersFields.views;

                break;


            case FILTER_PRIORITY_TYPES.bestOfTheWeek:
                sortingKey = FILTER_SORTING_FIELDS.postsFiltersFields.views;
                break;

            default:
                sortingKey = null;
                break;
        };

        if (sortingKey) sort[0] = sortingKey;

    }

    return sort;
};

const castToPostsFilterModel = (model) => {
    let { author_id, group_id, search, offset, limit } = model, filter = {};
    if (author_id) {
        filter.author_id = author_id;
    }
    if (group_id) {
        filter.group_id = group_id;
    }
    if (search && search.length) {
        filter.description = {
            [Op.like]: '%' + search + '%'
        }
    }

    if ((offset && Number(offset) !== NaN) && (limit && Number(offset) !== NaN)) {
        offset = (+offset - 1) * +limit;
        limit = +limit;
    } else {
        offset = 0,
            limit = 10;
    };

    return { filter, offset, limit };

};

exports.get = async (req, res) => {
    let { author_id, group_id, search, offset, limit, sorting_keyword } = req.query;
    console.log('get posts!!!')
    const filter = castToPostsFilterModel({ author_id, group_id, search, offset, limit });
    const sort = setSortingModel(sorting_keyword);
    const [posts, totalCount] = await Promise.all([
        Posts.findAll({
            where: filter.filter,
            limit: filter.limit,
            offset: filter.offset,
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
                sort
            ]
        }),
        Posts.count({ where: filter.filter })
    ]);



    res.json({ posts, totalCount });
};

exports.getById = async (req, res) => {
    let { id } = req.query;
    let post = await Posts.findOne({
        where: { id },
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

    const postViewCount = post.views + 1;
    const userPost = await UsersPosts.findOne({ where: { user_id: req.decoded.id, post_id: id } });
    if (userPost && userPost.viewed === 0) {
        await Promise.all([
            Posts.update({ views: postViewCount }, { where: { id } }),
            UsersPosts.update({ viewed: 1 }, { where: { user_id: req.decoded.id, post_id: id } })
        ]);
        post.views = postViewCount;
        post.user_posts.forEach(x => {
            if ((x.users_posts.user_id === req.decoded.id) && (x.users_posts.post_id === +id)) {
                x.users_posts.viewed = 1;
            };
        });
    } else if (!userPost) {
        const newUserPost = await UsersPosts.create({ post_id: id, user_id: req.decoded.id, viewed: 1 });
        await Posts.update({ views: postViewCount }, { where: { id } });
        post.views = postViewCount;
        const user = await Users.findOne({ where: { id: req.decoded.id }, attributes: ["id", "username"] });
        user.dataValues.users_posts = [
            newUserPost
        ];
        console.log(post.user_posts, 'post.user_posts');
        post.user_posts.push(user);
    };

    res.json(post);
}

exports.vote = async (req, res) => {
    let { vote, post_id, user_id } = req.body;
    let p = await Posts.findOne({ where: { id: post_id }, attributes: ['id', 'votes'] });
    if (p) {

        console.log('vote!!!', req.body, p.votes, vote)

        let foundPostVote = await UsersPosts.findOne({
            where: {
                post_id, user_id
            }
        })

        if (!foundPostVote) {
            await UsersPosts.create({ post_id, user_id, voted: vote })
        } else {
            await UsersPosts.update({ voted: vote }, { where: { post_id, user_id } });
        }

        if (vote > 0 || foundPostVote) {
            let votesCount = p.votes + vote;
            await Posts.update({ votes: votesCount }, { where: { id: post_id } });
            // req.query.author_id = user_id;
        }
        this.get(req, res);
    }
}

exports.like = async (req, res) => {
    let { value, post_id } = req.body;
    const user = req.decoded;
    let response = { message: 'post liked status changed successfuly' };
    const existsPost = await Posts.findOne({ where: { id: post_id }, attributes: ['id', 'like'] });
    if (!existsPost) res.status(400).send({ message: 'wrong post id' });

    const existsUserPost = await UsersPosts.findOne({ where: { post_id, user_id: user.id } });

    if (existsUserPost) {

        if (existsUserPost.liked === 1) {

            if (value === LIKES_REACTION_STATUSES.like) { //! remove like
                await Promise.all([
                    UsersPosts.update({ liked: 0 }, { where: { post_id, user_id: user.id } }),
                    Posts.update({ likes: existsPost.likes - 1 > 0 ? existsPost.likes - 1 : 0 }, { where: { id: post_id } })
                ]);

                return res.send(response);
            }

            if (value === LIKES_REACTION_STATUSES.dislike) {
                await Promise.all([
                    UsersPosts.update({ liked: 0, disliked: 1 }, { where: { post_id, user_id: user.id } }),
                    Posts.update({ likes: existsPost.likes - 1 > 0 ? existsPost.likes - 1 : 0, dislikes: existsPost.dislikes + 1 }, { where: { id: post_id } })
                ]);

                return res.send(response);
            }

        };


        if (existsUserPost.disliked === 1) {

            if (value === LIKES_REACTION_STATUSES.like) { //! remove like
                await Promise.all([
                    UsersPosts.update({ liked: 1, disliked: 0 }, { where: { post_id, user_id: user.id } }),
                    Posts.update({ dislikes: existsPost.dislikes - 1 > 0 ? existsPost.dislikes - 1 : 0, likes: existsPost.likes + 1 }, { where: { id: post_id } })
                ]);

                return res.send(response);
            }

            if (value === LIKES_REACTION_STATUSES.dislike) {
                await Promise.all([
                    UsersPosts.update({ disliked: 0 }, { where: { post_id, user_id: user.id } }),
                    Posts.update({ dislikes: existsPost.dislikes - 1 > 0 ? existsPost.dislikes - 1 : 0 }, { where: { id: post_id } })
                ]);

                return res.send(response);
            }

        };

        //?
    } else {
        if (value === LIKES_REACTION_STATUSES.like) {

            await Promise.all([
                UsersPosts.create({
                    post_id, user_id: user.id, liked: 1
                }),
                Posts.update({ likes: existsPost.likes + 1 }, { where: { id: post_id } })
            ]);

            return res.send(response);

        } else if (value === LIKES_REACTION_STATUSES.dislike) {

            await Promise.all([
                UsersPosts.create({
                    post_id, user_id: user.id, disliked: 1
                }),
                Posts.update({ disliked: existsPost.disliked + 1 }, { where: { id: post_id } })
            ]);

            return res.send(response);

        }
    }

    return res.send(response);
};

exports.comment = async (req, res) => {
    const { post_id, is_reply, comment_id, comment } = req.body;
    const user = req.decoded;

    const post = await Posts.findOne({ where: { post_id } });

    //! TODO add field to post, such us comments count

    if (!post) res.status(400).send({ message: 'Wrong post id, or post is not available' }); // post checking

    const replyedComment = await Posts_Comments.findOne({ where: { id: comment_id } });

    const body = {
        post_id,
        user_id: user.id,
        comment: comment,
        is_reply: is_reply,
        to_comment_id: replyedComment ? comment_id : null,
        to_user_id: replyedComment ? replyedComment.user_id : null,
    };

    await Posts_Comments.create(body);
    await P
    return res.send({ message: 'Comment successfuly added' });
};

exports.getComments = async (req, res) => {
    const { post_id, offset, limit } = req.query;
    let filter = { post_id };
    const sort = [FILTER_SORTING_FIELDS.postsFiltersFields.created_at, FILTER_SORTINH_VALUES.desc];

    const [list, totalCount] = await Promise.all([
        Posts_Comments.findAll({
            where: filter,
            limit: +limit,
            offset: (+offset - 1) * +limit,
            order: [
                sort
            ]
        }),
        Posts_Comments.count({ where: filter })
    ]);

    return res.send({ list, totalCount });
};

exports.getCommentReplys = async (req, res) => {
    const { comment_id } = req.query;
    const comment = await Posts_Comments.findOne({ where: { id: comment_id } });
    if (!comment) return res.status(400).send({ message: 'Wrong comment id or comment is not available' });
    const sort = [FILTER_SORTING_FIELDS.postsFiltersFields.created_at, FILTER_SORTINH_VALUES.desc];

    const list = await Posts_Comments.findAll({
        where: {
            to_comment_id: comment_id
        },
        order: sort
    });
    return res.send({ message: 'ok', list });
};

exports.reactionPostComment = async (req, res) => {
    const { comment_id, reaction } = req.body;
    const user = req.decoded;

    const postComment = await Posts_Comments.findOne({ where: { id: comment_id } });
    const userComment = await UserComments.findOne({ where: {
        comment_id: postComment.id,
        user_id: user.id
    } });

    if (!userComment) {
        await UserComments.create({
            user_id: user.id,
            comment_id: postComment.id,
            liked: reaction === LIKES_REACTION_STATUSES.like ? 1 : 0,
            disliked: reaction === LIKES_REACTION_STATUSES.dislike ? 1 : 0
        });
    } else {

        if (userComment.liked === 1) {

            if (reaction === LIKES_REACTION_STATUSES.none) {

                await Promise.all([
                    UserComments.update({
                        liked: 0,
                    }, { where: { user_id: user.id, comment_id: postComment.id } }),
                    Posts_Comments.update({ likes: postComment.likes - 1 > 0 ? postComment.likes - 1 : 0 }, { where: { id: postComment.id } })
                ])

            } else if (reaction === LIKES_REACTION_STATUSES.dislike) {
                await Promise.all([
                    UserComments.update({
                        liked: 0,
                        disliked: 1
                    }, { where: { user_id: user.id, comment_id: postComment.id } }),
                    Posts_Comments.update({ likes: postComment.likes - 1 > 0 ? postComment.likes - 1 : 0, dislikes: postComment.dislikes + 1 }, { where: { id: postComment.id } })
                ])
            }

        } else if (userComment.disliked === 1) {

            if (reaction === LIKES_REACTION_STATUSES.like) {
                await Promise.all([
                    UserComments.update({
                        disliked: 0,
                        liked: 1
                    }, { where: { user_id: user.id, comment_id: postComment.id } }),
                    Posts_Comments.update({ dislikes: postComment.dislikes - 1 > 0 ? postComment.dislikes - 1 : 0, likes: postComment.likes + 1 }, { where: { id: postComment.id } })
                ])
            } else if (reaction === LIKES_REACTION_STATUSES.none) {
                await Promise.all([
                    UserComments.update({
                        disliked: 0
                    }, { where: { user_id: user.id, comment_id: postComment.id } }),
                    Posts_Comments.update({ dislikes: postComment.dislikes - 1 > 0 ? postComment.dislikes - 1 : 0 }, { where: { id: postComment.id } })
                ])
            }

        } else if (userComment.disliked === 0 && userComment.liked === 0) {

            if (reaction === LIKES_REACTION_STATUSES.like) {
                await Promise.all([
                    UserComments.update({
                        liked: 1
                    }, { where: { user_id: user.id, comment_id: postComment.id } }),
                    Posts_Comments.update({ likes: postComment.likes + 1 }, { where: { id: postComment.id } })
                ])
            } else if (reaction === LIKES_REACTION_STATUSES.dislike) {
                await Promise.all([
                    UserComments.update({
                        disliked: 1
                    }, { where: { user_id: user.id, comment_id: postComment.id } }),
                    Posts_Comments.update({ dislikes: postComment.dislikes + 1 }, { where: { id: postComment.id } })
                ])
            }

        }

    }

    return res.send({ message: 'Reaction saved' });

};

exports.remove = async (req, res) => {
    const { idList } = req.body;
    const user = req.decoded;
    await Promise.all([
        Posts.destroy({
            where: {
                id: {
                    [Op.in]: idList
                },
                author_id: user.id
            }
        }),
        UsersPosts.destroy({
            where: {
                post_id: {
                    [Op.in]: idList
                },
                user_id: user.id
            }
        })
    ]);

    return res.send({ message: "Post(s) successfuly deleted" });

};

