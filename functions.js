// //Modo declarativo

// function somar(a,b){
//     //cod
//     console.log("estou somando")
//     return a + b;
// }
// let resultadoSoma = somar (1,2);
// console.log(resultadoSoma);




// //Modo expressão
// let multiplicar = function(a,b){
//     console.log("Estou multiplicando")
//     return a * b;
// }

// let resultadoMultiplicar = multiplicar(2,10);
// console.log(resultadoMultiplicar);



// function saudar (nome, sobrenome ){
//     return 'olá, ' + nome + ' ' + sobrenome + '!';
// }
// saudar("Lucas", "Estefano");






//Exercício Playground
/* Escreva as três funções a seguir:

anterior: recebe um número como parâmetro e retorna esse número menos um.
triplo: recibe um número como parâmetro e devolve o triplo desse número.
anteriorDoTriplo: receba um número como parâmetro e, usando as duas funções anteriores, você terá que retornar o número. recebido multiplicado por 3 (três) e o resultado subtrai 1 (um).
*/


function anterior(num){
    let anteriorA = num -1;
    return anteriorA;
}

  function triplo(num1){
    let triploA = num1 * 3; 
      return triploA;
  }

  function anteriorDoTriplo(num2){
    let anteriorDoTriploA = num2
      return anteriorDoTriploA;
  }


 let resultadoAnterior = anterior(10);
    console.log(resultadoAnterior);

 let resultadoTriplo = triplo(10);
     console.log(resultadoTriplo);

 let resultadoAnteriorTriplo = anteriorDoTriplo(10);
     console.log(resultadoAnteriorTriplo *3 - 1);
