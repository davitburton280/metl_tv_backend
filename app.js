require('dotenv').config()
const express = require('express');
global.app = express();

const compression = require('compression');
app.use(compression());

const port = process.env.PORT || 3001;
const server = require('http').createServer(app);
const cors = require('cors');
const path = require('path');


const ONE_DAY = 1000 * 60 * 60 * 24;
const IN_PRODUCTION = process.env.NODE_ENV === 'production';

// Listen
// const session = require('express-session');
const https = require('https');

// Socket io
// const http = require('http').Server(app);
const io = require('socket.io')(server, {
    cors: {
        origin: '*'
    }
});
const {socket} = require('./helpers/socket');
socket(io);

// const redis = require('redis');
// global.redisClient = redis.createClient({
//     host: '127.0.0.1'
// });
//
// if (!redisClient.isOpen) {
//     console.log('redis connection!!!')
//     redisClient.connect().then(a => a);
// }
//
//
// redisClient.on('connect', () => console.log('::> Redis Client Connected'));
// redisClient.on('error', (err) => console.log('<:: Redis Client Error', err));

// Multer
require('./helpers/multer');

app.set('trust proxy', 1);

// Server configuration
// app.use(session({
//     name: 'sid',
//     saveUninitialized: true,
//     resave: false,
//     secret: 'MY_SECRET',
//     cookie: {
//         maxAge: ONE_DAY
//     },
//     secure: IN_PRODUCTION
// }));
// var options = {
//     key: fs.readFileSync('openvidukey.pem'),
//     cert: fs.readFileSync('openviducert.pem')
// };
// https.createServer(options, app).listen(5000);


// Cors
app.use(cors(require('./config/cors')));

const bodyParser = require('body-parser');

// Start server on pre-defined port
server.listen(port, () => {
    console.log('server is listening on port ' + port)
});

// Dotenv used to read process.env
require('dotenv').config();


// Body-parser
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true, parameterLimit: 50000}));

// Mongoose
//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
let mongoDB = `mongodb://${process.env.MONGO_IP_PORT}/admin`;

if (process.env.NODE_ENV === 'production') {
    mongoDB = `mongodb://${encodeURIComponent(process.env.MONGO_USER)}:${encodeURIComponent(process.env.MONGO_PASS)}@${process.env.MONGO_IP_PORT}/metltv_chat`;
}


console.log("MONGO URL",mongoDB)
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true}).then(t => {
    console.log(mongoose.connection.readyState)
    console.log('mongo connected')
});


//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


// Passport.js config
const passport = require('passport');
require('./config/google-passport-strategy')(passport);
require('./config/facebook-passport-strategy')(passport);
app.use(passport.initialize({}));


app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));
app.use('/videos', require('./routes/videos'));
app.use('/playlists', require('./routes/playlists'));
app.use('/channels', require('./routes/channels'));
app.use('/stocks', require('./routes/stocks'));
app.use('/cards', require('./routes/cards'));
app.use('/webhooks', require('./routes/webhooks'));
app.use('/stripe/customers', require('./routes/stripe/customers'));
app.use('/stripe/accounts', require('./routes/stripe/accounts'));
app.use('/stripe/payments', require('./routes/stripe/payments'));
app.use('/stripe/products', require('./routes/stripe/products'));
app.use('/chat/direct', require('./routes/chat/direct'));
app.use('/chat/group', require('./routes/chat/group'));
app.use('/chat/video', require('./routes/chat/video'));
app.use('/notifications', require('./routes/notifications'));


let dist = path.join(__dirname, 'dist/');
console.log(dist);

// Static resources
app.use(express.static(dist));
app.use('/uploads/', express.static(path.join(__dirname, './public/uploads')));


// Separating Angular routes
app.get('*', (req, res, next) => {

    // console.log(/dashboard|sessions|openvidu|recordings|api/.test(req.url))
    if (/dashboard|sessions|openvidu|recordings|api/.test(req.url)) {
        // console.log('aaaa')
        next();
        // res.json('Openvidu route')
    } else if (!req.url.includes('phpmyadmin')) {
        console.log('Angular route!')
        res.sendFile(dist + 'index.html');
    } else {
        res.status(404).send('Not found');
    }

});

const videoController = require('./controllers/videoController');
app.use(async (err, req, res, next) => {
    if (err.code === 'LIMIT_FILE_SIZE') {
        req.body.bigFileDetected = true;
        req.query = req.body;
        console.log(err)
        if (err.field === 'video_stream_file') {
            await videoController.removeVideo(req, res);
        } else {
            res.status(500).json({msg: 'The file size should not exceed 3Mb'})
        }
    }
    // Handle any other errors
});


