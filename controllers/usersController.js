// Opentok
const opentok = require('opentok');
const OT = new opentok(process.env.OPENTOK_API_KEY, process.env.OPENTOK_API_SECRET);

let sessions = {};


exports.getOpentokParams = async (req, res) => {
    const roomName = req.params.room;
    console.log(roomName)

    if (sessions[roomName]) {
        generateToken(roomName, res);
    } else {

        OT.createSession({mediaMode: "routed"}, (error, session) => {
            if (error) {
                console.log("Error creating session:", error)
            } else {
                sessions[roomName] = session.sessionId;
                generateToken(roomName, res);
            }
        })
    }
};

generateToken = (roomName, res) => {
    const tokenOptions = {
        role: "publisher",
        data: `roomname=${roomName}`
    };
    let token = OT.generateToken(sessions[roomName], tokenOptions);
    res.status(200);
    res.send({
        sessionId: sessions[roomName],
        token,
        apiKey: process.env.OPENTOK_API_KEY
    })
};
