const express = require('express');
const app = express();

const port = process.env.PORT || 3001;
const server = require('http').createServer(app);
const cors = require('cors');
const path = require('path');


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


// Passport.js config
const passport = require('passport');
require('./config/google-passport-strategy')(passport);
require('./config/facebook-passport-strategy')(passport);
app.use(passport.initialize({}));

// Routes
app.use('/auth', require('./routes/auth'));

let dist = path.join(__dirname, 'dist/');
console.log(dist)

app.use(express.static(dist));


// Separating Angular routes
app.get('*', (req, res, next) => {
    if (!req.url.includes('phpmyadmin')) {
        res.sendFile(dist + 'index.html');
    } else {
        res.status(404).send('Not found');
    }
});



