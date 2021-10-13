const express = require('express');
const router = express.Router();
const revistasController = require('../controllers/revistasController.js');
/* GET home page. */
router.get('/', revistasController.index);
router.get('/', revistasController.index);
router.get('/crear', revistasController.crear);
router.post('/', revistasController.guardar);


module.exports = router;