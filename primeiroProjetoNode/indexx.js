//Importando módulos 1 do próprio node, 2 externa (que instalamos) e 3 que nós criamos. 
const fs = require('fs');
let moment = require('moment');
const superHerois = require('./superHerois/')


//Executando os módulos 
let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8') //___dirname = nome do arquivo
let data = moment().format('MMM do YY') //() serve para executar o moment

console.log(data)


console.log(superHerois)




let nome = 'Scooby';
let idade = 7;
let gostaDeComer = true;

let cachorro  = {
    nome,
    idade,
    gostaDeComer
}

module.exports = cachorro