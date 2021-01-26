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
var OPENVIDU_URL = process.env.NODE_ENV === 'production' ? 'https://metl.tv/' : 'https://localhost:4443';
// Environment variable: secret shared with our OpenVidu server
var OPENVIDU_SECRET = 'MY_SECRET';

console.log(OPENVIDU_URL, OPENVIDU_SECRET);

// Entrypoint to OpenVidu Node Client SDK
var OV = new OpenVidu(OPENVIDU_URL, OPENVIDU_SECRET);

// Collection to pair session names with OpenVidu Session objects
var mapSessions = {};
// Collection to pair session names with tokens
var mapSessionNamesTokens = {};

/* CONFIGURATION */

const db = require('../models');
const Users = db.users;
const Videos = db.videos;
const Channels = db.channels;

const url = require('url');

const jwt = require('jsonwebtoken');

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

                console.log(tokenOptions)


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

        console.log('aaaaa')
        await Users.update({avatar: avatar}, {where: {id: id}});
        await Channels.update({avatar: avatar}, {where: {id: id}});

        await changeJwt(data, res);

    });

};

exports.changeCover = async (req, res) => {
    let {id, cover} = req.body;
    let data = req.body;


    uploadCover(req, res, async (err) => {
        await Users.update({cover: cover}, {where: {id: id}});
        await Channels.update({cover: cover}, {where: {id: id}});
        await changeJwt(data, res);
    });
};

let changeJwt = async (data, res) => {

    let user = await Users.findOne({where: {id: data.id}, include: [{model: Channels, as: 'channel'}]});


    let full_name = user[`full_name`];
    let {
        password,
        ...details
    } = user.toJSON();
    res.json({
        token: jwt.sign(details, 'secretkey', {
            expiresIn: '8h'
        }),
        user_id: user.id,
        full_name: full_name
    })
};

exports.getUserInfo = async (req, res) => {
    let data = req.query;
    let user = await Users.findOne({
        where: {username: data.username},
        include: [{model: Channels, as: 'channel'}, {model: Videos, as: 'videos'}]
    });
    console.log('OK!!!' + req.query.username)
    res.json(user);
};
