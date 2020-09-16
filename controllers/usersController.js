// Opentok
const opentok = require('opentok');
const OT = new opentok(process.env.OPENTOK_API_KEY, process.env.OPENTOK_API_SECRET);


exports.getOpentokParams = async (req, res) => {
    OT.createSession((err, session) => {
        let sessionId = session.sessionId;
        res.json({
            apiKey: process.env.OPENTOK_API_KEY,
            sessionId,
            token: OT.generateToken(sessionId, {role: 'publisher'})
        })
    })
};
