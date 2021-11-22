const express = require('express');
const router = express.Router();
const librosController = require('../controllers/usersController.js');
/* GET home page. */
router.get('/', librosController.index);
router.get('/crear', librosController.crear);
router.post('/', librosController.guardar);
router.post('/eliminar/:id', librosController.eliminar);
router.get('/editar/:id', librosController.editar);
router.post('/actualizar', librosController.actualizar);
module.exports = router;