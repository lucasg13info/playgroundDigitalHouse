//Importando módulos
const fs = require('fs');
let moment = require('moment');


//Executando os módulos 
let dados = fs.readFileSync(__dirname + '/dados.txt', 'utf8') //___dirname = nome do arquivo
let data = moment().format('MMM do YY') //() serve para executar o moment
console.log(data)