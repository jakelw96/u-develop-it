const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'B@bylj2015',
        database: 'election'
    },
);

module.exports = db;