//desestruturando arrays e objetos.

//array
let cores = ["branco", "azul", "preto", "roxo"]

let [corBranco, corAzul] = cores;
console.log(corBranco)


//objeto literal
let pessoa = {
    nome: "Lucas",
    altura:"1.80",
    peso:"80kg"
    
    
}
let {nome, altura} = pessoa;
console.log(nome)