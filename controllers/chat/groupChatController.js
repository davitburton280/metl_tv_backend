const sequelize = require('sequelize');
const Op = sequelize.Op;

const db = require('../../models');
const GroupChatMessages = db.group_chat_messages;
const DirectChatMessages = db.direct_chat_messages;
const ChatGroups = db.chat_groups;
const ChatGroupsMembers = db.chat_groups_members;
const GroupChatMessagesSeen = db.group_chat_messages_seen;
const Videos = db.videos;
const Users = db.users;
const UsersConnection = db.users_connection;
const UsersConnectionMembers = db.users_connection_members;
const to = require('../../helpers/getPromiseResult');

const usersController = require('../usersController');
const m = require('../../helpers/multer');

const moment = require('moment');
const nl2br = require('../../helpers/nl2br');


exports.getGroupsMessages = async (req, res) => {
    let user_id;
    if (req.return) {
        user_id = req.user_id;
        // console.log("USER ID:"+user_id)
    } else {
        let data = req.query;
        user_id = data.user_id;
    }

    console.log('get groups messages!!!')

    let chatGroupsResult = await ChatGroupsMembers.findAll({where: {member_id: user_id}, attributes: ['group_id']});

    let chatGroups = JSON.parse(JSON.stringify(chatGroupsResult)).map(t => t.group_id);

    let where = {
        id: {[Op.in]: chatGroups}
    };

    let groupsMessages = await ChatGroups. findAll({

        where,
        attributes: ['id', 'name', 'avatar', 'creator_id'],
        include: [

            {
                model: GroupChatMessages,
                attributes: {exclude: ['video_id', 'to_id', 'to_user', 'updated_at']},
                as: 'chat_group_messages',
                include: [
                    {
                        model: Users,
                        as: 'from_user',
                        attributes: [['username', 'from'], 'id', 'avatar', 'first_name', 'last_name']
                    },
                    {
                        model: Users,
                        as: 'to_user',
                        attributes: [['username', 'from'], 'id', 'avatar', 'first_name', 'last_name'],
                    },
                    {
                        model: Users,
                        as: 'seen_by',
                        attributes: ['username', 'id', 'avatar', 'first_name', 'last_name'],
                        through: {}
                    }
                ],

            },

            {
                model: Users,
                as: 'chat_group_members',
                attributes: ['id', 'avatar', 'username',
                    [
                        sequelize.fn('concat', sequelize.col('`chat_group_members.first_name`'), ' ', sequelize.col('`chat_group_members.last_name`')), 'name'
                    ]
                ],
                // through: {attributes: ['confirmed']}
            },


        ],
        order: [
            ['name', 'asc'],
            [sequelize.col('`chat_group_messages`.`created_at`'), 'asc'],
        ]


    });

    let groupsFiltered = [];
    groupsMessages.map(gm => {
        let groupDetails = gm.toJSON();
        groupDetails.unseens = 0;
        const f = groupDetails?.chat_group_messages?.filter(m => {
            let found = false;
            if (m.from_id !== +user_id) {
                found = !m.seen_by.find(sb => sb.id === +user_id);
            }
            return found;
        });
        groupDetails.new_messages_count = f?.length;
        groupsFiltered.push(groupDetails);
    });

    res.json(groupsFiltered);
};

exports.getChatGroups = async (req, res) => {
    let {user_id, from_id} = req.query || req;
    console.log('get chat groups!!!')

    let arr = [
        sequelize.where(sequelize.col('`chat_group_members->chat_groups_members.member_id`'), user_id),
        {creator_id: user_id || from_id}
    ];


    let groups = await ChatGroups.findAll({
        include: [
            {
                model: GroupChatMessages,
                attributes: {exclude: ['video_id', 'to_id', 'to_user', 'updated_at']},
                as: 'chat_group_messages',
                include: [
                    {
                        model: Users,
                        as: 'from_user',
                        attributes: [['username', 'from'], 'id', 'avatar', 'first_name', 'last_name']
                    },
                    {
                        model: Users,
                        as: 'to_user',
                        attributes: [['username', 'from'], 'id', 'avatar', 'first_name', 'last_name'],
                    },
                    {
                        model: Users,
                        as: 'seen_by',
                        attributes: ['username', 'id', 'avatar', 'first_name', 'last_name'],
                        through: {}
                    }
                ],

            },
            {
                model: Users,
                as: 'chat_group_members',
                attributes: ['id', 'avatar', [sequelize.fn('concat', sequelize.col('chat_group_members.first_name'), ' ', sequelize.col('chat_group_members.last_name')), 'name'], 'username'],
                through: {attributes: ['confirmed']}
            }
        ],
        where: {
            [Op.or]: arr
        },
    });

    if (res) {
        res.json(groups);
    } else {
        return JSON.parse(JSON.stringify(groups));
    }
};

exports.createGroup = async (req, res) => {
    let data = req.body;
    let group = await ChatGroups.create(data);
    console.log(data)
    await to(ChatGroupsMembers.create({group_id: group.id, member_id: data.creator_id, confirmed: 1}));
    req.query.user_id = data.creator_id;
    // this.getChatGroups(req, res);
    this.getGroupsMessages(req, res);
};

exports.getGroupMembers = async (req, res) => {
    console.log('get group members!!!');
    const {group_id} = req.query;

    let members = await ChatGroups.findOne({
        include: [
            {
                model: Users,
                as: 'chat_group_members',
                attributes: ['id', 'avatar', [sequelize.fn('concat', sequelize.col('first_name'), ' ', sequelize.col('last_name')), 'name'], 'username'],
                // through: {attributes: ['confirmed']}
            }
        ],
        where: {id: group_id}
    });


    // let members = await ChatGroupsMembers.findAll({
    //     include: [
    //         {
    //             model: ChatGroups, as: 'group',
    //             include: [
    //                 {
    //                     model: Users,
    //                     as: 'chat_group_members',
    //                     attributes: ['id', 'avatar', [sequelize.fn('concat', sequelize.col('first_name'), ' ', sequelize.col('last_name')), 'name']],
    //                     through: {attributes: ['confirmed']}
    //                 }
    //             ]
    //         },
    //         // {
    //         //     model: Users, as: 'member', attributes:
    //         //         ['id', 'avatar', 'username', [sequelize.fn('concat', sequelize.col('first_name'), ' ', sequelize.col('last_name')), 'name']]
    //         // }
    //
    //     ], where: {group_id}
    // });
    res.json(members);
};

exports.addGroupMembers = async (req, res) => {
    const {group_id, member_ids} = req.body;
    let list = member_ids?.map(async (member) => {
        await to(ChatGroupsMembers.create({group_id, member_id: member.id, ...{confirmed: 0}}));
    });

    await Promise.all(list);
    req.query.group_id = group_id;
    this.getGroupMembers(req, res);
};

exports.removeGroupMember = async (req, res) => {
    const {group_id, member_id} = req.query;
    await ChatGroupsMembers.destroy({where: {group_id, member_id}});
    this.getGroupMembers(req, res);
};

exports.removeGroup = async (req, res) => {
    const {group_id} = req.query;
    let group = await ChatGroups.findOne({where: {id: group_id}, attributes: ['creator_id']});
    req.query.user_id = group.creator_id;
    await ChatGroupsMembers.destroy({where: {group_id}});
    await ChatGroups.destroy({where: {id: group_id}});
    this.getGroupsMessages(req, res);
};

exports.leaveGroup = async (req, res) => {
    const {group_id, member_id} = req.query;
    let group = await ChatGroups.findOne({where: {id: group_id}, attributes: ['creator_id']});
    if (+member_id !== group.creator_id) {
        // await ChatGroups.destroy({where: {id: group_id}});
        await ChatGroupsMembers.destroy({where: {group_id, member_id}});
        await ChatMessagesSeen.destroy({where: {group_id, user_id: member_id}});
        req.query.user_id = member_id;
        this.getGroupsMessages(req, res);
    } else {
        res.status(500).json({msg: 'The group owner cannot leave the group'});
    }

};

exports.changeGroupAvatar = async (req, res) => {

    uploadGroupAvatar(req, res, async (err) => {

        const {avatar, group_id, member_id} = req.body;
        let t = await to(ChatGroups.update({avatar: avatar}, {where: {id: group_id}}));
        req.query.user_id = member_id;
        this.getChatGroups(req, res);
    })
};

exports.acceptGroupJoin = async (req, res) => {
    const {group_id, member_id} = req.body;
    await ChatGroupsMembers.update({confirmed: 1}, {where: {group_id, member_id}});
    req.query.user_id = member_id;
    this.getChatGroups(req, res);
};

exports.declineGroupJoin = async (req, res) => {
    const {group_id, member_id} = req.body;
    await ChatGroupsMembers.destroy({where: {group_id, member_id}});
    req.query.user_id = member_id;
    this.getChatGroups(req, res);
};

exports.updateSeen = async (data) => {
    let {seen, from_id, to_id, group_id, message_id} = data;
    console.log('UPDATE SEEN!!!', group_id);

    let arr = [
        {
            to_id: from_id,
            from_id: to_id
        },
        {from_id, to_id}
    ];

    let where = {};

    if (!group_id) {
        where[Op.or] = arr;
        // where.id = message_id;
    } else {
        // where.group_id = group_id;
        console.log('GROUP!!!', from_id)
        let foundMessages = await GroupChatMessages.findAll({
            where: {
                group_id,
                [Op.not]:
                    {
                        from_id
                    }

            }
        });

        foundMessages.map(async (m) => {
            let found = await to(GroupChatMessagesSeen.findAll({
                where: {message_id: m.id, user_id: from_id}
            }));
            if (found.length === 0) {
                // console.log("FOUND:",found)
                let t = await to(GroupChatMessagesSeen.create({message_id: m.id, group_id, user_id: from_id}));
                // console.log(t)
            }
        });
    }

    // console.log("FROM ID" + data.from_id)
    // console.log(new Date());


    console.log(message_id)
    let foundMessages = await to(DirectChatMessages.findAll({
        where
    }));

    let updated = false;
    // console.log("ALREADY SEEN", JSON.parse(JSON.stringify(foundMessages)), foundMessages.find(fm => fm.seen === 0))
    if (!group_id) {
        if (foundMessages.find(fm => fm.seen === 0)) {
            updated = await to(DirectChatMessages.update({seen, seen_at: new Date()}, {
                where
            }));
        }
    }


    console.log(!!updated)
    return !!updated;
};

exports.saveGroupMessage = async (req, res) => {
    let data = req.body;
    data.to_id = data.to_id ? data.to_id : 0;
    data.message = nl2br(data.message, false);

    let msg = await to(GroupChatMessages.create(data));
    req.query.user_id = req.body.from_id;
    this.getGroupsMessages(req,res);
};