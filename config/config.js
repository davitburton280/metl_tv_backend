require('dotenv').config(); // this is important!
module.exports = {
    "development": {
        "username": "root",
        "password": null,
        "database": "secret_south",
        "host": "127.0.0.1",
        "dialect": "mysql",
        "operatorsAliases": 0,
        "logging": true
    },
    "test": {
        "username": "root",
        "password": null,
        "database": "database_test",
        "host": "127.0.0.1",
        "dialect": "mysql"
    },
    "production": {
        "username": process.env.PRODUCTION_DB_USER,
        "password": process.env.PRODUCTION_DB_PASS,
        "database": process.env.PRODUCTION_DB,
        "host": process.env.PRODUCTION_IP,
        "dialect": "mysql",
        "operatorsAliases": 0,
        "logging": true
    }
};
