const express = require('express');
const router = express.Router();
const revistasController = require('../controllers/revistasController.js');
/* GET home page. */
router.get('/', revistasController.index);

module.exports = router;