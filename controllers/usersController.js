const db = require('../models');
const Users = db.users;

const OpenVidu = require('openvidu-node-client').OpenVidu;

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

exports.getSession = async (req, res) => {
    const {email, sessionName} = req.query;
    console.log('OK')
    // console.log(req.query)
    // The video-call to connect
    let user = await Users.findOne({
        where: {email: email}
    }, res);

    var OPENVIDU_URL = 'https://localhost:4443';
    var OPENVIDU_SECRET = 'MY_SECRET';


    var OV = new OpenVidu(OPENVIDU_URL, OPENVIDU_SECRET);
    var properties = {};
    console.log('aaaa')
    OV.createSession().then(session => {
        let tokenOptions = {
            role: "PUBLISHER",
            data: JSON.stringify({username: user.username}),
            // session: session.sessionId,
            // kurentoOptions: {"videoMaxSendBandwidth": 700, "allowedFilters": ["GStreamerFilter", "ZBarFilter"]}

        };

        console.log(tokenOptions)
        session.generateToken(tokenOptions).then(token => {
            res.status(200).json(token);
        }).catch(error => {
            console.log('token generation error')
            console.log(error)
            res.status(500).json({msg: error.toString()})
        });
    }).catch(error => {
        console.log('session creation error')
        console.log(error)
        res.status(500).json({msg: error})
    });

}