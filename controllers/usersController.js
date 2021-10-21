require('dotenv').config()
/* OPENVIDU CONFIGURATION */

const OpenVidu = require('openvidu-node-client').OpenVidu;
const OpenViduRole = require('openvidu-node-client').OpenViduRole;

// // Check launch arguments: must receive openvidu-server URL and the secret
// if (process.argv.length !== 4) {
//     console.log("Usage: node " + __filename + " OPENVIDU_URL OPENVIDU_SECRET");
//     process.exit(-1);
// }
// For demo purposes we ignore self-signed certificate
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Environment variable: URL where our OpenVidu server is listening
let OPENVIDU_URL = 'https://localhost:4443';
if (process.env.NODE_ENV === 'staging') {
    OPENVIDU_URL = 'https://staging.metl.tv/';
} else if (process.env.NODE_ENV === 'production') {
    OPENVIDU_URL = 'https://metl.tv/'
}
// Environment variable: secret shared with our OpenVidu server
var OPENVIDU_SECRET = 'MY_SECRET';

// console.log(OPENVIDU_URL, OPENVIDU_SECRET);

// Entrypoint to OpenVidu Node Client SDK
var OV = new OpenVidu(OPENVIDU_URL, OPENVIDU_SECRET);

// Collection to pair session names with OpenVidu Session objects
var mapSessions = {};
// Collection to pair session names with tokens
var mapSessionNamesTokens = {};

/* CONFIGURATION */

const db = require('../models');
const Users = db.users;
const UsersCards = db.users_cards;
const Videos = db.videos;
const Tags = db.tags;
const Channels = db.channels;
const PrivacyTypes = db.privacy_types;
const StocksOrderType = db.stocks_ordering_types;
const UsersConnection = db.users_connection;

const url = require('url');

const jwt = require('jsonwebtoken');

const sequelize = require('sequelize');
const Op = sequelize.Op;

const bcrypt = require('bcryptjs');


const moment = require('moment');
const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);

const to = require('../helpers/getPromiseResult');
const getFullName = require('../helpers/getFullNameCol');

exports.getSession = async (req, res) => {
    const {email, sessionName, role} = req.query;
    console.log('OK')
    console.log(req.query)
    console.log('ROLE:' + role + '!!!!!')
    let user = await Users.findOne({
        where: {email: email}
    }, res);

    // The video-call to connect
    const tokenOptions = {
        data: JSON.stringify({serverData: {username: user.username}}),
    };
    console.log(tokenOptions)
    console.log(mapSessions)


    // console.log(tokenOptions)
    if (mapSessions[sessionName]) {
        // Session already exists
        console.log('Existing session ' + sessionName);

        // Get the existing Session from the collection
        var mySession = mapSessions[sessionName];

        tokenOptions.role = 'SUBSCRIBER';

        // Generate a new token asynchronously with the recently created tokenOptions
        mySession.generateToken(tokenOptions)
            .then(token => {

                // Store the new token in the collection of tokens
                mapSessionNamesTokens[sessionName].push(token);

                const urlParts = url.parse(token, true);
                res.status(200).json(token);
                // res.status(200).send({...urlParts.query, ...{href: urlParts.href}});
            })
            .catch(error => {
                console.log('token generation error')
                console.log(error.toString())
                res.status(500).json({msg: error.toString()})
            });
    } else {
        console.log("EXISTS" + role)
        if (role === 'SUBSCRIBER') {
            res.status(500).json({msg: 'Session doesn\'t exist'})
        }

        // New session
        console.log('New session ' + sessionName);


        // Create a new OpenVidu Session asynchronously
        OV.createSession()
            .then(session => {

                console.log('Session created!')

                // Store the new Session in the collection of Sessions
                mapSessions[sessionName] = session;
                // Store a new empty array in the collection of tokens
                mapSessionNamesTokens[sessionName] = [];

                tokenOptions.role = 'PUBLISHER';


                // Generate a new token asynchronously with the recently created tokenOptions
                session.generateToken(tokenOptions)
                    .then(token => {

                        console.log('Token generated!')

                        // Store the new token in the collection of tokens
                        mapSessionNamesTokens[sessionName].push(token);

                        const urlParts = url.parse(token, true);

                        res.status(200).json(token);

                        // res.status(200).send({...urlParts.query, ...{href: urlParts.href}});
                    })
                    .catch(error => {
                        console.log('token generation error')
                        res.status(500).json({msg: error.toString()})
                    });
            })
            .catch(error => {
                console.log('session creation error!!!')
                console.log(error)
                res.status(500).json(error)
            });
    }

};


exports.leaveSession = (req, res) => {
    console.log(req.query)
    const {role} = req.query;
    if (role === 'publisher') {
        delete mapSessions[req.query.sessionName];
        console.log(mapSessions)
    }
    console.log('Leaved session!!!!!')

    res.json('Leaved session');
};

exports.changeAvatar = async (req, res) => {
    let {id, avatar} = req.body;
    let data = req.body;

    uploadAvatar(req, res, async (err) => {

        // await Users.update({avatar: avatar}, {where: {id: id}});
        await Channels.update({avatar: avatar}, {where: {id: id}});

        await this.changeJwt(data, res);

    });

};

exports.changeCover = async (req, res) => {
    let {id, cover} = req.body;
    let data = req.body;


    uploadCover(req, res, async (err) => {
        // await Users.update({cover: cover}, {where: {id: id}});
        await Channels.update({cover: cover}, {where: {id: id}});
        await this.changeJwt(data, res);
    });
};

exports.changeJwt = async (data, res, ret = false) => {

    let user = await Users.findOne({
        where: {id: data.id}, include: [
            {model: Channels, as: 'channel'},
            {model: StocksOrderType, as: 'stocks_order_type'},
            {model: UsersCards}
        ]
    });


    let full_name = user[`first_name`] + ' ' + user[`last_name`];
    let {
        password,
        ...details
    } = user.toJSON();
    if (res) {
        res.json({
            token: jwt.sign(details, 'secretkey', {
                expiresIn: '8h'
            }),
            user_id: user.id,
            full_name
        })
    } else if (ret) {
        return jwt.sign(details, 'secretkey', {
            expiresIn: '8h'
        });
    }
};

exports.getUserInfo = async (req, res) => {
    console.log('get user info!!!!')
    let data = req.query;
    let excludeFields = ['password', 'role_id', 'status_id', 'verification_code', 'phone']
    let user = await Users.findOne({
        where:
            [
                sequelize.where(sequelize.fn('BINARY', sequelize.col('username')), data.username),
                // {name: sequelize.col('videos->privacy.name')}
                // {'$videos.privacy.name$': 'Public'}
                // [{model: PrivacyTypes}, sequelize.col(`name`), 'Public']
            ]
        ,
        attributes: {exclude: excludeFields},
        include: [
            {model: Channels, as: 'channel'},
            {
                model: Videos,
                as: 'videos',
                include: [
                    {model: Tags, as: 'tags'},
                    {model: PrivacyTypes, as: 'privacy'}
                ],
                // where: sequelize.where(sequelize.col('`videos`.`privacy`.`name`'), 'Public')
            }],
        order: [[{model: Videos}, sequelize.col(`created_at`), 'desc']]
    });

    let {videos, ...rest} = user.toJSON();
    if (!+data.own_channel) {
        console.log('not own channel')
        let ret = {videos: videos.filter(t => t.privacy.name === 'Public'), ...rest};
        res.json(ret);
    } else {
        res.json(user)
    }
};

exports.saveProfileChanges = async (req, res) => {
    const {id, ...data} = req.body;

    uploadUserAvatar(req, res, async (err) => {

        let newPassword = data.password;
        // data.password = bcrypt.hashSync(newPassword, 10);
        await Users.update(data, {where: {id: id}});
        await this.changeJwt({id: id, ...data}, res);

    });
};

exports.createUsersConnection = async (data) => {

    let {from_id, to_id} = data;

    let where = [
        {
            user_id: from_id,
            connection_id: to_id
        },
        {
            user_id: to_id,
            connection_id: from_id
        },
    ]
    let found = await to(UsersConnection.findOne({
        where: {
            [Op.or]: where
        }
    }));

    console.log("FOUND:", !found)

    if (!found) {
        await to(UsersConnection.create({
            user_id: from_id,
            connection_id: to_id
        }))
    }

};

exports.blockUser = async (req, res) => {
    let {user_id, connection_id, block} = req.body;

    let where = [
        {
            user_id,
            connection_id
        },
        {
            user_id: connection_id,
            connection_id: user_id
        },
    ]

    let result = await UsersConnection.update({is_blocked: block},
        {
            where: {
                [Op.or]: where
            }
        });

    res.json(result);
};

exports.getBlockedContactsIds = async (user_id, blocked = 0) => {
    let where = [
        {
            user_id
        },
        {
            connection_id: user_id,
        },
    ];


    let ids = await to(UsersConnection.findAll({
        attributes: ['user_id', 'connection_id'],
        raw: true,
        where: {
            is_blocked: blocked,
            [Op.or]: where,
        }
    }));

    return ids;
};

exports.getContacts = async (req, res) => {
    console.log('get contacts!!!');
    let {user_id, blocked} = req.query;
    let where = [
        {
            user_id
        },
        {
            connection_id: user_id,
        },
    ];


    let contacts = await to(UsersConnection.findAll({
        attributes: ['user_id', 'connection_id'],
        // raw: true,
        include: [
            {model: Users, as: 'connection', attributes: ['id','first_name','last_name', 'username']},
            {model: Users, as: 'user', attributes: ['id','first_name','last_name', 'username']}
        ],
        where: {
            is_blocked: blocked,
            [Op.or]: where,
        }
    }));

    let ret = [];
    contacts.map(c => {
        if (c.user_id !== user_id) {
            ret.push(c.user.toJSON())
        } else if (c.connection_id !== user_id) {
            ret.push(c.connection.toJSON())
        }
    });

    // console.log(ret)

    res.json(ret);
};

