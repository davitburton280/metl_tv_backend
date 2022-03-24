let h = require('./helpers');
let usersController = require('../controllers/usersController');

exports.postAdded = async (data, usersGroups, socket, io) => {
    let {from_user, group} = data;
    let groupName = group?.name;
    let onlineContactIds = [];

    let notification = await h.savePostNotification({
        ...data,
        type: `post_added`
    });
    console.log('post added!!!', groupName)

    let contacts = await usersController.getContacts({return: true, user_id: from_user.id});
    await Promise.all(contacts.map(async (c) => {
        let onlineContactId = usersGroups[c.username]?.socket_id;
        onlineContactIds.push(onlineContactId);
        console.log('map!!!', c.username, usersGroups[c.username])
        if (onlineContactId) {
            socket.broadcast.to(onlineContactId).emit('getPostAdded', {
                ...data,
                notification
            });
        }
    }));

    if (groupName) {
        let groupSocketsIds = await io.in(groupName).allSockets();
        let filteredSocketIds = [...groupSocketsIds].filter(sid => !onlineContactIds.includes(sid))
        console.log('groupName', groupName, filteredSocketIds)
        filteredSocketIds.map(fid => {
            socket.broadcast.to(fid).emit('getPostAdded', {
                    ...data,
                    notification
                }
            );
        })
    }


}