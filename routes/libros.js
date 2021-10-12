const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController.js');
/* GET home page. */
router.get('/', librosController.index);
router.get('/crear', librosController.crear);
router.post('/', librosController.guardar);

module.exports = router;