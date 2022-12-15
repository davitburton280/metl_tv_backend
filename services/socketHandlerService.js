const SocketHandlers = require('../mongoose/socket_handlers')

class SocketHandlerService {

    create = async ({ user_id, socket }) => {
        const element = await SocketHandlers.create({ user_id, socket })
        return element._id
    }

    update = async ({ user_id, socket }) => {
        await SocketHandlers.updateOne({ user_id }, { socket })
    }

    attach = async ({ user_id, socket }) => {
        const existsElement = await SocketHandlers.findOne({ user_id })
        if (existsElement) {
            await SocketHandlers.updateOne({ user_id }, { socket })
        } else {
            await SocketHandlers.create({ user_id, socket })
        }
    }

    getByUser = async (user_id) => {
        return await SocketHandlers.findOne({ user_id })
    }

    delete = async (user_id) => {
        await SocketHandlers.deleteOne({ user_id })
    }

}

module.exports = new SocketHandlerService()