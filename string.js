// //lenght - Quantidade de strings, conta também os espaços
// let texto = "Oi eu sou o Lucas"
// console.log(texto.length);


// //indexOf (se retornar valor negativo significa que não existe a palavra ou letra)
// console.log(texto.indexOf("s"))


// //slice - Pega uma fatia da informação
// console.log(texto.slice (0,3))


// //trim - remove espaços em branco no início e no fim 
// console.log(texto.trim())


// //slip - tranforma a string em um array
// console.log(texto.split(" "))

// //replace - trocar nomes
// let textoNovo = texto.replace("Oi", "olá")
// console.log(textoNovo)



function dominio(textoOld, procurar, troca){
    return textoOld.replace(procurar, troca)

}
let novo = dominio ("br.digitalhouse.com" ,"br.digitalhouse.com", "http://br.digitalhouse.com") 
console.log (novo);





// function substituicaoRapida(texto, procurar, substituir){
//     return texto.replace(procurar, substituir);
//   }
  
//   let textoNovo = substituicaoRapida('Olá tudo bem','bem','mal');
//   console.log(textoNovo) //'Boa noite'