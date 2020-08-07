const Sequelize = require ('sequelize')
const config = require('../config/database')
const ProdutoController = {
    index: async (req, res) =>{
        var connection = new Sequelize('locadora',' root', '',{
            host: 'localhost',
            dialect: 'mysql'
            });
            console.log(connection)
    }
}

module.exports = ProdutoController;