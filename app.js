const express = require('express');
global.app = express();

const port = process.env.PORT || 3001;
const server = require('http').createServer(app);
const cors = require('cors');
const path = require('path');

const ONE_DAY = 1000 * 60 * 60 * 24;
const IN_PRODUCTION = process.env.NODE_ENV === 'production';

// Listen
const session = require('express-session');
const https = require('https');

// Multer
require('./helpers/multer');


// Server configuration
app.use(session({
    name: 'sid',
    saveUninitialized: true,
    resave: false,
    secret: 'MY_SECRET',
    cookie: {
        maxAge: ONE_DAY
    },
    secure: IN_PRODUCTION
}));
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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Mongoose
//Import the mongoose module
const mongoose = require('mongoose');

//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.0.1/metltv';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});


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
app.use('/video', require('./routes/video'));

let dist = path.join(__dirname, 'dist/');
console.log(dist);

app.use(express.static(dist));


// Separating Angular routes
app.get('*', (req, res, next) => {

    console.log(/dashboard|sessions|openvidu|recordings|api/.test(req.url))
    if (/dashboard|sessions|openvidu|recordings|api/.test(req.url)) {
        console.log('aaaa')
        next();
    } else if (!req.url.includes('phpmyadmin')) {
        res.sendFile(dist + 'index.html');
    } else {
        res.status(404).send('Not found');
    }
});




