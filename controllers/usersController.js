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

const url = require('url');

const jwt = require('jsonwebtoken');

const sequelize = require('sequelize');
const Op = sequelize.Op;

const bcrypt = require('bcryptjs');


const moment = require('moment');
const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);

const to = require('../helpers/getPromiseResult');
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
            sequelize.where(sequelize.fn('BINARY', sequelize.col('username')), data.username)
        ,
        attributes: {exclude: excludeFields},
        include: [
            {model: Channels, as: 'channel'},
            {
                model: Videos,
                as: 'videos',
                include: [{model: Tags, as: 'tags'}, {model: PrivacyTypes, as: 'privacy'}]
            }],
        order: [[{model: Videos}, sequelize.col(`created_at`), 'desc']]
    });

    res.json(user);
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

exports.getStripeCustomerInfo = async (req, res) => {
    let {stripe_customer_id} = req.query;
    const customer = await stripe.customers.retrieve(
        stripe_customer_id
    );
    res.json(customer)
};

exports.createStripeAccount = async (req, res) => {
    let {email, ret, user_id, ...accountData} = req.body;
    console.log("CREATE STRIPE ACCOUNT" + email)
    // let acc = await to(stripe.accounts.create({
    //     type: "custom",
    //     business_type: "individual",
    //     country: "US",
    //     email,
    //     capabilities: {
    //         card_payments: {requested: true},
    //         transfers: {requested: true},
    //     },
    //     tos_acceptance: {
    //         ip: req.ip,
    //         date: moment().format('X')
    //     },
    //     individual: {
    //         address: {
    //             country: "US",
    //             city: "New York",
    //             state: "New York",
    //             line1: "13 Street",
    //             line2: "47 W",
    //             postal_code: "10001",
    //         },
    //         email,
    //         dob: {day: 30, month: 3, year: 1986},
    //         id_number: "000000000",
    //         first_name: "John",
    //         last_name: "Doe",
    //         phone: "000 000 0000"
    //     },
    //     business_profile: {
    //         mcc: '5734',
    //         url: "https://metl.tv/",
    //         // support_address: {
    //         //     city: "New York",
    //         //     country: "US",
    //         //     line1: "13 Street",
    //         //     line2: "47 W",
    //         //     postal_code: "10001",
    //         //     state: "New York"
    //         // }
    //     },
        // external_account: {
        //     object: 'bank_account',
        //     currency: 'USD',
        //     country: 'US',
        //     account_holder_type: 'individual',
        //     account_holder_name: "Jenny Rosen",
        //     routing_number: '110000000',
        //     account_number: '000123456789'
        //     // token: 'tok_1JDTf1KqYIKd5fEIm8QKJEtQ'
        // }
        // external_account: 'tok_visa_debit_transferSuccess',
            // {
        //     object: 'card',
        //     number: ['4242 4242 4242 4242'],
        //     exp_month: ['02'],
        //     exp_year: ['24'],
        //         currency: 'USD',
        //         country: 'US',
        //         account_holder_type: 'individual',
        //         account_holder_name: "Jenny Rosen",
        //
        //     // token: 'tok_1JDTf1KqYIKd5fEIm8QKJEtQ'
        // }

    // }));

    let acc = await to(stripe.accounts.create({
        type: "custom",
        business_type: "individual",
        country: "US",
        capabilities: {
            card_payments: {requested: true},
            transfers: {requested: true},
        },
        tos_acceptance: {
            ip: req.ip,
            date: moment().format('X')
        },
        ...accountData
    }), res);

    console.log("ACCOUNT!!!!!!!", acc.id, user_id)

    await UsersCards.update({stripe_account_id: acc.id}, {where: {user_id}});


    if (ret) {
        return acc;
    } else if (!res.headersSent) {
        res.json(acc)
    }
};

exports.createStripeAccountLink = async (req, res) => {
    const {user_id} = req.query;
    let account = await stripe.accounts.create({
        type: "express",
        business_type: "individual",
        capabilities: {
            card_payments: {requested: true},
            transfers: {requested: true},
        },
        country: 'US',
    });

    await UsersCards.update({stripe_account_id: account.id}, {where: {user_id}});

    const accountLink = await stripe.accountLinks.create({
        account: account.id,
        refresh_url: process.env.API_URL,
        return_url: process.env.API_URL,
        type: 'account_onboarding',
        // collect: 'eventually_due',
    });

    res.json(accountLink)
};

exports.getStripeAccount = async (req,res) =>{
    let {stripe_account_id} = req.query;
    const account = await stripe.accounts.retrieve(
        stripe_account_id
    );
    res.json(account)
};