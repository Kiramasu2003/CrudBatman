module.exports = {
    obtener: function (con, funcion) {

        con.query("SELECT * FROM libros;", funcion)

    },
    insertar: function (con, datos, funcion) {

        con.query("INSERT INTO libros (titulo, autor, editorial) VALUES(?, ?, ?);", [datos.titulo, datos.autor, datos.editorial], funcion)

    }

}