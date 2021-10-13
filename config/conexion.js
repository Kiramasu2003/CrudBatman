const { createPool } = require('mysql');
const con = createPool({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b4c0ab79565dbb',
    password: '2a755a35',
    database: 'heroku_aba1e06667d7fbf',
    connectionLimit: 10
});



console.log('APP is Running');
module.exports = con;
