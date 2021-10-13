const express = require('express');
const router = express.Router();
const revistasController = require('../controllers/revistasController.js');
/* GET home page. */
router.get('/', revistasController.index);
router.get('/crear', revistasController.crear);
router.post('/', revistasController.guardar);
router.post('/eliminar/:id', revistasController.eliminar);
router.get('/editar/:id', revistasController.editar);
router.post('/actualizar', revistasController.actualizar);


module.exports = router;