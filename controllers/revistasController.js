const con = require('../config/conexion')
const revista = require('../model/revista')

module.exports = {

    index: function (req, res) {

        revista.obtener(con, function (err, datos) {
            console.log(datos);
            res.render('revistas/index', { title: 'Aplicación', revistas: datos });

        });


        res.render('revistas/index', { title: 'Hola' });
    },
    crear: function (req, res) {
        res.render('revistas/crear')
    },
    guardar: function (req, res) {
        console.log(req.body);

        libro.insertar(con, req.body, function (err) {
            res.redirect('/revistas');
        });

    }
}