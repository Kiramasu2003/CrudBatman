const con = require('../config/conexion');
const libro = require('../model/libro');
module.exports = {

    index: function (req, res) {

        libro.obtener(con, function (err, datos) {
            console.log(datos);
            res.render('libros/index', { title: 'Aplicación', libros: datos });

        });

    },
    crear: function (req, res) {
        res.render('libros/crear')
    },
    guardar: function (req, res) {
        console.log(req.body);

        libro.insertar(con, req.body, function (err) {
            res.redirect('/libros');
        });

    }
}