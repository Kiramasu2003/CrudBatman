module.exports = {
    obtener: function (conexion, funcion) {

        conexion.query("SELECT * FROM revistas", funcion)

    },
    insertar: function (conexion, datos, funcion) {

        conexion.query("INSERT INTO revistas (editorial, fecha, genero) VALUES(?, ?, ?)", [datos.editorial, datos.fecha, datos.genero], funcion)

    },
    retornarDatosID: function (con, id, funcion) {
        con.query("SELECT * FROM revistas WHERE id = ?", [id], funcion);
    },
    borrar: function (con, id, funcion) {
        con.query("DELETE FROM revistas WHERE id = ?", [id], funcion);
    },
    actualizar: function (con, datos, funcion) {
        con.query("UPDATE revistas SET editorial=?, fecha=?, genero=?"
            + "  WHERE id = ?", [datos.editorial, datos.fecha, datos.genero, datos.id], funcion);
    }

}