let originsWhitelist = [
    'http://localhost:4200',
    'http://localhost:4201',
    'http://localhost:3000',
    'https://metl.tv',
];
let corsOptions = {
    origin: function (origin, callback) {
        let isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
        callback(null, isWhitelisted);
    },
    credentials: true
};

module.exports = corsOptions;
