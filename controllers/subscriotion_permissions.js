const db = require('../models')
const sequelize = require('sequelize')
const Op = sequelize.Op
const SubscriotionPermission = db.subscriotion_permission

exports.create = async (req, res) => {
    const { name, description, custom_fields } = req.body
    await SubscriotionPermission.create({
        name, description, custom_fields: custom_fields ? custom_fields : {}
    })
    return res.send({ message: ')' })
}

exports.getList = async (req, res) => {
    let filter = {}
    const { idList } = req.query
    const data = JSON.parse(idList)
    if (idList && (Array.isArray(data)) && data.length) {
        filter['id'] = { [Op.in]: data }
    }

    const list = await SubscriotionPermission.findAll({ where: filter })

    return res.send({ message: 'ok', data: list })
}