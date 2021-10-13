module.exports = {
    obtener: function (conexion, funcion) {

        conexion.query("SELECT * FROM revistas", funcion)

    },
    insertar: function (conexion, datos, funcion) {

        conexion.query("INSERT INTO revistas (editorial, fecha, genero) VALUES(?, ?, ?)", [datos.editorial, datos.fecha, datos.genero], funcion)

    }

}