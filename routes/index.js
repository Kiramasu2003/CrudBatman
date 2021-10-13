const express = require('express');
const router = express.Router();
const librosController = require('../controllers/librosController');
const revistasController = require('../controllers/revistasController');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.send("Bienvenido a la biblioteca");
});

module.exports = router;
