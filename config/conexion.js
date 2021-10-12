const mysql = require('mysql');
const con = mysql.createConnection({
    host: 'us-cdbr-east-04.cleardb.com',
    user: 'b4c0ab79565dbb',
    password: '2a755a35',
    database: 'heroku_aba1e06667d7fbf'
});

con.connect(
    (err) => {
        if (!err) {
            console.log('Conexión establecida')
        }
        else {
            console.log('Error de conexion ' + err.message + ' : ' + err.code + ' ' + err.name);
        }
    }
);
module.exports = con;