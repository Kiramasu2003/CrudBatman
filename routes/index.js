const express = require('express');
const router = express.Router();
const librosController = require('../controllers/usersController');
const revistasController = require('../controllers/revistasController');
/* GET home page. */
router.get('/', function (req, res, next) {
    res.redirect('/libros');
});

module.exports = router;
