let h = require('./helpers');
const to = require('../helpers/getPromiseResult');

let usersController = require('../controllers/usersController');
let directChatController = require('../controllers/chat_mongo/directChatController');
let usersConnectionNotificationsController = require('../controllers/notifications/directChatNotificationsController');


exports.unreadLastMessages = async (data, io) => {
    console.log('unread messages!!!')
    let {from_username, to_username} = data;
    if (!data.group) {

        let toUserSocketId = h.getSocketId(to_username);
        let fromUserSocketId = h.getSocketId(from_username);

        await directChatController.unreadMessages(data);
        data.direct_messages = await to(directChatController.getConnectionMessages(
            {return: true, connection_id: data.connection_id}
        ));

        console.log(toUserSocketId, fromUserSocketId)
        io.to(toUserSocketId).emit('getSeen', data)
        io.to(fromUserSocketId).emit('getSeen', data)

    }
}

exports.setSeen = async (data, io) => {
    console.log('set seen')

    let {from_username, to_username, connection_id} = data;

    console.log('direct seen!!!')
    let fromUserSocketId = h.getSocketId(from_username);
    let toUserSocketId = h.getSocketId(to_username);

    await directChatController.updateSeen(data);
    data.direct_messages = await directChatController.getConnectionMessages(
        {return: true, connection_id}
    );
    io.to(toUserSocketId).emit('getSeen', data)
    io.to(fromUserSocketId).emit('getSeen', data)
}