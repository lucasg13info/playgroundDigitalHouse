const ProdutoController = {
    criarProduto: (req, res)=>{
        res.send("Criando um prduto");
    },
    deletarProduto:(req, res) =>{
        const {id} = req.params;

        res.send ("Deletando o produto com id: " + id);
    }
    
}

module.exports = ProdutoController;