const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../models');
const Users = db.users
const comments = db.comments

exports.create = async (body, user) => {
    let { post_id, video_id, is_reply, comment, parent_comment, files } = JSON.parse(body)
    const model = {
        user_id: user.id,
        post_id: post_id || null,
        video_id: video_id || null,
        is_reply,
        comment,
        parent_comment: parent_comment || null,
        likes: 0,
        dislikes: 0,
        reply_count: 0,
        files: files || []
    }

    const data = await comments.create(model)
    delete data.dataValues.user_id
    data.dataValues.user = {
        first_name: user.first_name,
        last_name: user.last_name,
        username: user.username,
        email: user.email,
        avatar: user.avatar
    }
    let filter = {
        post_id, video_id
    }

    if (!post_id) delete filter.post_id
    if (!video_id) delete filter.video_id

    // const list = await comments.findAll({ where: filter, order: [['id','desc']], limit: 5 })
    // limit: +limit,
    // offset: (+offset - 1) * +limit,
    // order: [
    //     sort
    // ]

    console.log(data.dataValues);
    return {
        success: true, message: 'ok', data: {
            room: `${post_id ? 'post' : 'video'}_room_${post_id || video_id}`,
            comment: data.dataValues
        }
    }
}

exports.addComment = async (req, res) => {
    let { post_id, video_id, is_reply, comment, parent_comment, files } = req.body
    return await this.create({ post_id, video_id, is_reply, comment, parent_comment, files }, req.decoded)
}

exports.getList = async (req, res) => {
    try {
        let { id, type } = req.params
        let { page, limit } = req.query
        if (!id) return res.status(400).send({ success: false, message: 'id in params is required' })
        if (!type) return res.status(400).send({ success: false, message: 'type in params is required' })

        if (!page) page = 1
        if (!limit) limit = 20

        let filter = {}
        if (type === 'video') {
            filter['video_id'] = id
        } else if (type === 'post') {
            filter['post_id'] = id
        } else {
            return res.status(400).send({ success: false, message: 'type in params must be video or post' })
        }

        const { count, rows } = await comments.findAndCountAll({
            where: filter,
            limit,
            offset: (page - 1) * limit,
            include: [
                {
                    model: Users, as: 'user', attributes: [
                        'first_name', 'last_name', 'username', 'email', 'avatar'
                    ]
                }
            ],
            order: [
                ['created_at', 'desc']
            ],
        })

        return res.send({ success: true, message: 'ok', data: { count, rows } })
    } catch (error) {
        return res.status(500).send({ success: false, message: 'Something went wrong' })
    }

}
