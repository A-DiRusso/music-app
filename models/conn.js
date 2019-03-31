const pgp = require('pg-promise')();

const options = {
    host: 'localhost',
    database: 'music-app'
}

const db = pgp(options);
module.exports = db;