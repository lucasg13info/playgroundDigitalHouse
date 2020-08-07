const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/ProdutoController')

/* Listar itens do banco */
router.get('/', ProdutoController.index);



module.exports = router;