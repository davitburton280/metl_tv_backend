const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const Users = db.users;
const UserConnectionNots = db.users_connection_notifications;

exports.saveNotification = async (data) => {
    // console.log(data)
    let fields = {
        from_id: data.initiator_id,
        to_id: data.receiver_id,
        connection_id: data.connection_id,
        msg: data.msg
    };
    // console.log(fields)
    await UserConnectionNots.create(fields);

    return 'OK';
};

exports.getCurrentUserNotifications = async (data) => {
    let t = await UserConnectionNots.findAll({
        include: [
            {model: Users, as : 'from_user', attributes: ['id','username','avatar','first_name','last_name']},
            {model: Users, as : 'to_user', attributes: ['id','username','avatar','first_name','last_name']},
        ],
        where: {to_id: data.user_id},
        order: ['created_at']
    });
    let notifications = JSON.parse(JSON.stringify(t)).map(n=> {
        n.type = 'users_connection_notifications';
        return n;
    });
    return notifications;
};

exports.removeNotification = async (req,res) =>{
    // await UserConnectionNots.destroy({id: data.notification_id});
};