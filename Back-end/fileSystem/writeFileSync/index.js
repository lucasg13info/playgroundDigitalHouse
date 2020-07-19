const fs = require('fs');
const path = require ('path')

let caminhoArquivo = path.join("prova.txt")

//Escreve o texto no arquivo
    //fs.writeFileSync(caminhoArquivo, "Prova 2")

//Escreve no final do conteudo existente
    fs.appendFileSync(caminhoArquivo, "Prova final")