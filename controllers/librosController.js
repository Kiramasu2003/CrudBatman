const con = require('../config/conexion');
const libro = require('../model/libro');
module.exports = {

    index: function (req, res) {

        libro.obtener(con, function (err, datos) {
            console.log(datos);
            res.render('libros/index', { title: 'Aplicación', libros:datos });

        });

    }
}