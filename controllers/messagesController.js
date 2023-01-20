const sequelize = require('sequelize')
const { Sequelize } = require('../models')
const Op = sequelize.Op

const db = require('../models')
const Users = db.users
const Conversations = db.conversations

const Messages = db.messages

const ChatService = require('../services/chat')

exports.castSortingModel = (key, value) => {
    if (!key) key = 'created_at'
    if (!value) value = 'desc'

    return [[key, value]]
}

async function createMessage(body, user) {
    let { id, parent_message, files, reactions, message } = body;
    const existsConversation = await Conversations.findOne({
        where: {
            id
        }
    })
    if (!existsConversation) return res.status(400).send({ message: 'wrong conversation id' })
    if (existsConversation.creator_id !== user.id && existsConversation.target_id !== user.id) return res.sendStatus(403)
    const data = await Messages.create({
        creator_id: user.id,
        conversation: id,
        message,
        seen_from: [],
        parent_message,
        files,
        edited: 0,
        deleted: 0,
        reactions
    })
    return {
        success: true,
        message: 'ok',
        data,
    };
}

exports.create = async (req, res) => {
    const data = await createMessage(req.body, req.decoded);
    return res.send(data)
}

exports.createForSocket = async (body, user) => {
    return await createMessage(body, user);
}

exports.update = async (req, res) => {
    let { message, files, reactions } = req.body
    const { id } = req.params
    const user = req.decoded

    const mess = await Messages.findOne({ where: { id } })
    if (!mess)  return res.status(400).send({ message: 'wrong message id' })
    if (mess.creator_id !== user.id) return res.sendStatus(403)

    let updateBody = {message, files, reactions}
    if (!message) delete updateBody.message
    if (!files || typeof files !== 'array') delete updateBody.files
    if (!reactions || typeof reactions !== 'array') delete updateBody.reactions

    await Messages.update(updateBody, { where: { id } })

    return res.send({ message: 'Message updated' })
}

exports.deleteForSocket = async (messageId, user) => {
    const existsMessage = await Messages.findOne({ where: { id: messageId, creator_id: user.id, deleted: { [Op.ne]: 1 } } })
    if (!existsMessage) {
        return {
            success: false,
            message: 'Message not found',
        }
    }

    await Messages.update({ deleted: 1 },{ where: { id: messageId } })

    return {
        success: true,
    }
}

exports.delete = async (req, res) => {
    let { id } = req.params
    const user = req.decoded
    if (!id) return res.status(400).send({ message: 'id in params required' })
    const existsMessage = await Messages.findOne({ where: { id, creator_id: user.id, deleted: { [Op.ne]: 1 } } })
    if (!existsMessage) return res.sendStatus(403)

    await Messages.update({ deleted: 1 },{ where: { id } })
    return res.send({ message: 'ok' })
}

exports.getListByConversation = async (req, res) => {
    const user = req.decoded
    const { id } = req.params
    const page = req.query.page || 1, limit = req.query.page || 20

    if (!id) return res.status(400).send({ message: 'conversation id in params required!' })
    
    let filter = {
        conversation: id
    }

    const sorting = this.castSortingModel()

    const data = await Messages.findAndCountAll({
        where: filter,
        order: sorting,
        limit,
        offset: (page - 1) * limit
    })

    return res.send({ message: 'ok', data })
}