//lenght - Quantidade de strings, conta também os espaços
let texto = "Oi eu sou o Lucas"
console.log(texto.length);


//indexOf (se retornar valor negativo significa que não existe a palavra ou letra)
console.log(texto.indexOf("s"))


//slice - Pega uma fatia da informação
console.log(texto.slice (0,3))


//trim - remove espaços em branco no início e no fim 
console.log(texto.trim())


//slip - tranforma a string em um array
console.log(texto.split(" "))

//replace - trocar nomes
let textoNovo = texto.replace("Oi", "olá")
console.log(textoNovo)




//EXERCICIOS:

//Criar uma função chamada dominio que receberá uma String  "br.digitalhouse.com" e sua função será devolver "http://br.digitalhouse.com".
function dominio(textoOld, procurar, troca){
    return textoOld.replace(procurar, troca)

}
let novo = dominio ("br.digitalhouse.com" ,"br.digitalhouse.com", "http://br.digitalhouse.com") 
console.log (novo);



// Sua missão agora é criar uma função chamada "substituicaoRapida" que você recebe um texto, uma palavra para procurar e a palavra que substituirá a que você está procurando. A função deve retornar o texto com a palavra substituída.
function substituicaoRapida(texto, procurar, substituir){
    return texto.replace(procurar, substituir);
  }
  
  let textoNovo = substituicaoRapida('Olá tudo bem','bem','mal');
  console.log(textoNovo) //'Boa noite'





// Declare a string "Olá, sou Carlos!" e depois recorte a mesma para poder obter o nome "Carlos" em uma nova variável chamada nomeUsuario. IMPORTANTE: Para a resolução funcionar, lembre-se de usar a slice().
let apresentacao ="Olá, sou o Carlos!"
let nomeUsuario = apresentacao.slice(11, 17)

console.log(nomeUsuario)