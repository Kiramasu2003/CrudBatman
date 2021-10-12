const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController.js');
const revistasController = require('../controllers/revistasController.js');
/* GET home page. */
router.get('/', revistasController.index);

module.exports = router;