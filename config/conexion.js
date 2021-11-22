const { createPool } = require('mysql');
const con = createPool({
    host: a,
    user: a,
    password: a,
    database: a,
    connectionLimit: 10
});



console.log('APP is Running');
module.exports = con;
