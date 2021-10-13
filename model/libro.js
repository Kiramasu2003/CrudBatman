module.exports = {
    obtener: function (con, funcion) {

        con.query("SELECT * FROM libros;", funcion)

    },
    insertar: function (con, datos, funcion) {

        con.query("INSERT INTO libros (titulo, autor, editorial) VALUES(?, ?, ?);", [datos.titulo, datos.autor, datos.editorial], funcion)

    },
    retornarDatosID: function (con, id, funcion) {
        con.query("SELECT * FROM libros WHERE id = ?", [id], funcion);
    },
    borrar: function (con, id, funcion) {
        con.query("DELETE FROM libros WHERE id = ?", [id], funcion);
    },
    actualizar: function (con, datos, funcion) {
        con.query("UPDATE libros SET titulo=?, autor=?, editar=?"
            + "  WHERE id = ?", [datos.titulo, datos.autor, datos.editorial, datos.id], funcion);
    }


}