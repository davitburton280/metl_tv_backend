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
const stripe = require('stripe')(process.env.STRIPE_TEST_PRIVATE_KEY);

const showIfErrors = require('../helpers/showIfErrors');

const moment = require('moment');

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

exports.changeJwt = async (data, res) => {

    let user = await Users.findOne({
        where: {id: data.id}, include: [
            {model: Channels, as: 'channel'},
            {model: StocksOrderType, as: 'stocks_order_type'}
        ]
    });


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

exports.getCustomerCards = async (req, res, getCount = false) => {
    let data = req.query;
    let userCards = await UsersCards.findOne({where: {user_id: data.user_id}});
    if (userCards) {
        await stripe.customers.listSources(
            userCards.toJSON().stripe_customer_id,
            {object: 'card'},
            async (err, cards) => {
                if (err) {
                    res.status(500).json(err);
                } else if (cards) {
                    let userCards = await UsersCards.findAll({
                        where: {user_id: data.user_id},
                        attributes: {exclude: ['id']},
                        raw: true
                    });
                    res.json(cards.data.map(t1 => ({...t1, ...userCards.find(t2 => t2.card_id === t1.id)})))
                }
            }
        );
    } else {
        if (getCount) {
            res.json([]);
        } else {
            res.status(500).json({msg: 'This user doesn\'t have any cards registered in our system'});
        }
    }
};

exports.getCardDetails = async (req, res) => {
    let {card_id} = req.query;
    let userCards = await UsersCards.findOne({where: {card_id}});
    if (userCards?.stripe_customer_id) {
        const card = await stripe.customers.retrieveSource(
            userCards?.stripe_customer_id,
            card_id
        );
        res.json({...card, ...userCards?.toJSON()});
    } else {
        res.status(500).json({msg: 'The specified card isn\'t found in database'});
    }
};

exports.createStripeUserCard = async (req, res) => {
    if (!showIfErrors(req, res)) {
        let data = req.body;
        let stripeUserFound = await UsersCards.findOne({where: {user_id: data.user_id}});
        if (!stripeUserFound) {
            let customer = await stripe.customers
                .create({
                    email: data.stripeEmail,
                });

            await this.createStripeCard(data, customer.id, res);

        } else {
            let card = {
                holder_name: data.holderName,
                number_part: data.last4,
                expiry_date: moment(data.exp_month + '/' + data.exp_year, 'MM/YYYY').format('MM/YYYY'),
                brand: data.brand,
                country: data.country
            };
            let stripeUserCardFound = await UsersCards.findOne({where: card});
            if (stripeUserCardFound) {
                res.status(500).json({msg: 'A card with such details already exists'})
            } else {
                await this.createStripeCard(data, stripeUserFound.stripe_customer_id, res);
            }

        }
    }


};

exports.createStripeCard = async (data, customer_id, res) => {

    await stripe.tokens.retrieve(
        data.stripeToken,
        async (err, token) => {
            let cardFingerprintFound = await UsersCards.findOne({where: {fingerprint: token.card.fingerprint}});
            if (cardFingerprintFound) {
                res.status(500).json({msg: 'The card fingerprint exists. Please use another card'});
            } else {

                stripe.customers.createSource(
                    customer_id,
                    {source: data.stripeToken}).then(async (d) => {
                    let userCard = {
                        card_id: d.id,
                        user_id: data.user_id,
                        brand: d.brand,
                        country: d.country,
                        stripe_customer_id: d.customer,
                        expiry_date: moment(d.exp_month + '/' + d.exp_year, 'MM/YYYY').format('MM/YYYY'),
                        holder_name: d.name,
                        number_part: d.last4,
                        name: data.name,
                        fingerprint: d.fingerprint
                    };

                    await UsersCards.create(userCard);
                    res.json('OK')
                }).catch(err => {
                    res.status(500).json({msg: err?.raw?.message})
                });


            }
        }
    );


};

exports.removeStripeCard = async (req, res) => {
    let data = req.query;
    console.log(data)

    await stripe.customers.deleteSource(
        data.stripe_customer_id,
        data.card_id,
        async (err, confirmation) => {
            if (confirmation.deleted) {
                await UsersCards.destroy({where: {user_id: data.user_id, card_id: data.card_id}});
                await this.getCustomerCards(req, res, true);
            }
        }
    );
};

exports.updateStripeCard = async (req, res) => {
    let {card_id, name} = req.body;
    console.log('update stripe card!!!')
    await UsersCards.update({name}, {where: {card_id}});
    res.json('OK');
    // await stripe.customers.updateSource(
    //     data.stripe_customer_id,
    //     data.card_id,
    //     {name: 'Jenny Rosen'},
    //     function (err, card) {
    //         // asynchronously called
    //     }
    // );
};

exports.setCardAsDefault = async (req, res) => {
    let {card_id, stripe_customer_id} = req.body;
    await stripe.customers.update(
        stripe_customer_id,
        {
            default_source: card_id
        }, async (err, customer) => {
            if (err) {
                res.status(500).json(err);
            } else {
                await UsersCards.update({is_primary: 0}, {where: {stripe_customer_id}});
                await UsersCards.update({is_primary: 1}, {where: {card_id}});
                res.json('OK');
            }
        }
    );
};