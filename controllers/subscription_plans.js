const db = require('../models')
const sequelize = require('sequelize')
const Op = sequelize.Op
const SubscriotionPlans = db.subscriotion_plans

exports.create = async (req, res) => {
    const { name, description, cost, permissions } = req.body
    await SubscriotionPlans.create({
        name, description, cost, permissions: permissions && Array.isArray(permissions) ? permissions : []
    })
    return res.send({ message: ')' })
}

exports.get = async (req, res) => {
    return res.send({ message: 'ok', data: await SubscriotionPlans.findAll({}) })
}