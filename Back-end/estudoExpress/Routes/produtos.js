const express = require ('express');
const router = express();
const ProdutoController = require ('../controllers/ProdutoController')


router.get('/produto', ProdutoController.criarProduto)
router.get('/deletar/:id', ProdutoController.deletarProduto)

module.exports = router;