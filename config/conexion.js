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
            console.log('Error de conexion: ' + err.name + ' : ' + err.message);
        }
    }
);

var connection;

function handleDisconnect() {
    connection = mysql.createConnection(con); // Recreate the connection, since
    // the old one cannot be reused.

    connection.connect(function (err) {              // The server is either down
        if (err) {                                     // or restarting (takes a while sometimes).
            console.log('error when connecting to db:', err);
            setTimeout(handleDisconnect, 2000); // We introduce a delay before attempting to reconnect,
        }                                     // to avoid a hot loop, and to allow our node script to
    });                                     // process asynchronous requests in the meantime.
    // If you're also serving http, display a 503 error.
    connection.on('error', function (err) {
        console.log('db error', err);
        if (err.code === 'PROTOCOL_CONNECTION_LOST') { // Connection to the MySQL server is usually
            handleDisconnect();                         // lost due to either server restart, or a
        } else {                                      // connnection idle timeout (the wait_timeout
            throw err;                                  // server variable configures this)
        }
    });
}

handleDisconnect();

module.exports = con;