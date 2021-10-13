const con1 = require('../config/conexion');
const revista = require('../model/revista');
module.exports = {

    index: function (req, res) {

        revista.obtener(con1, function (err, datos) {
            console.log(datos);
            res.render('revistas/index', { title: 'Aplicación', revistas: datos });

        });

    },
    crear: function (req, res) {
        res.render('revistas/crear')
    },
    guardar: function (req, res) {
        console.log(req.body);

        revista.insertar(con1, req.body, function (err) {
            res.redirect('/revistas');
        });

    },
    eliminar: function (req, res) {
        console.log('Recepción de datos');
        console.log(req.params.id);
        revista.retornarDatosID(con1, req.params.id, function (err, registros) {

            revista.borrar(con1, req.params.id, function (err) {
                res.redirect('/revistas');
            })

        })
    },
    editar: function (req, res) {
        revista.retornarDatosID(con1, req.params.id, function (err, registros) {
            console.log(registros[0]);
            res.render('revistas/editar', { revista: registros[0] });
        });
    },
    actualizar: function name(req, res) {
        console.log(req.body.editorial);
        console.log(req.body.fecha);
        console.log(req.body.genero);

        if (req.body.editorial && req.body.fecha && req.body.genero) {
            revista.actualizar(con1, req.body, function (err) {
            });
        }
        res.redirect('/revistas');
    }
}