let pessoa = {
    nome: "Lucas",
    idade: 22,
    altura: 1.80
}

let listaCompras =[
    "pao", "presunto", "queijo"
]



//json.stringfy converte o objeto em texto
let json = JSON.stringify(pessoa);

//json.parse converte para um objeto
let objetoDeNovo = JSON.parse(json);
console.log(objetoDeNovo);
