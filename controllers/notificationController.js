const sequelize = require('sequelize');
const Op = sequelize.Op;
const db = require('../models');
const comments = db.comments
const notifications = db.notifications

exports.create = async (req, res) => {
    
}

exports.getList = async (req, res) => {
    try {
        const user_id = req.decoded.id
        const filter = {
            user_id
        }
        
        const data = await notifications.findAndCountAll({where: filter})
        return res.send({ message: 'ok', data })
    } catch (error) {
        return res.status(500).send({ message: 'Something went wrong in get notification api' })
    }
}

exports.updateState = async (req, res) => {
    try {
        let { id } = req.params
        const user_id = req.decoded.id
        if (!id) return res.status(400).send({ message: 'Id in params is required' })

        const notification = await notifications.findOne({ where: {id, user_id} })
        if (!notification) return res.status(400).send({ message: 'Wrong notification id in params' })

        await notifications.update({ seen: 1 }, { where: { id } })

        return res.send({ message: 'Notification state updated' })
    } catch (error) {
        return res.status(500).send({ message: 'Something went wrong in update notification state api' })
    }
}

exports.upadteStateForAll = async (req, res) => {
    try {
        const user_id = req.decoded.id
        await notifications.update({ seen: 1 }, { where: { user_id } })
        return res.send({ message: 'All notifications updated' })
    } catch (error) {
        return res.status(500).send({ message: 'Something went wrong in update all notifications state api' })
    }
}

exports.delete = async (req, res) => {
    try {
        let { id } = req.params
        const user_id = req.decoded.id
        if (!id) return res.status(400).send({ message: 'Id in params is required' })

        const notification = await notifications.findOne({ where: {id, user_id} })
        if (!notification) return res.status(400).send({ message: 'Wrong notification id in params' })

        await notifications.destroy({ where: { id } })

        return res.send({ message: 'Notification deleted' })
    } catch (error) {
        return res.status(500).send({ message: 'Something went wrong in delete notification api' })
    }
}
