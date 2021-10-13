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

    },
    eliminar: function (req, res) {
        console.log('Recepción de datos');
        console.log(req.params.id);
        libro.retornarDatosID(con, req.params.id, function (err, registros) {

            libro.borrar(con, req.params.id, function (err) {
                res.redirect('/libros');
            })

        })
    },
    editar: function (req, res) {
        libro.retornarDatosID(con, req.params.id, function (err, registros) {
            console.log(registros[0]);
            res.render('libros/editar', { libro: registros[0] });
        });
    },
    actualizar: function name(req, res) {
        console.log(req.body.titulo);
        console.log(req.body.autor);
        console.log(req.body.editorial);

        if (req.body.titulo && req.body.autor && req.body.editorial) {
            libro.actualizar(con, req.body, function (err) {
            });
        }
        res.redirect('/libros');
    }
}