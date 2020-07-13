var express = require('express');
var router = express.Router();
var ContatoController = require('../controllers/ContatoController')
var EstudantesController = require('../controllers/EstudantesController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/contato", ContatoController.index);

router.get("/estudantes", EstudantesController.index);



module.exports = router;
