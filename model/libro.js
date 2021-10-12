module.exports = {
    obtener: function (conexion, funcion) {

        conexion.query("SELECT * FROM libros", funcion)

    },
    insertar: function (conexion, datos, funcion) {

        conexion.query("INSERT INTO libros (titulo, autor, editorial) VALUES(?, ?, ?)", [datos.nombre, datos.autor, datos.editorial], funcion)

    }

}