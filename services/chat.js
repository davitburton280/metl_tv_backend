const sequelize = require('sequelize')
const Op = sequelize.Opconversations

const db = require('../models')
const Users = db.users
const Conversations = db.conversations

exports.createConversation = async (user, targetUser) => {
    return await Conversations.create({
        creator_id: user,
        target_id: targetUser,
        lastMessage: null,
        deleted_from: [],
        muted_from: []
    })
}