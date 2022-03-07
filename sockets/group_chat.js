let h = require('./helpers');
const to = require('../helpers/getPromiseResult');

let usersController = require('../controllers/usersController');
let groupChatController = require('../controllers/chat_mongo/groupChatController');
let groupChatNotificationsController = require('../controllers/notifications/groupChatNotificationsController');


exports.setSeen = async (data, io) => {
    console.log('set seen')

    let {group_name} = data;

    console.log('group seen!!!', group_name)
    await to(groupChatController.updateSeen(data));
    data.group_messages = await groupChatController.getGroupMessages(
        {return: true, group_id: data.group_id}
    );
    io.sockets.in(group_name).emit('getSeen', data)
}