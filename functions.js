//Modo declarativo
function somar(a,b){
    //cod
    console.log("estou somando")
    return a + b;
}
let resultadoSoma = somar (1,2);
console.log(resultadoSoma);




//Modo expressão
let multiplicar = function(a,b){
    console.log("Estou multiplicando")
    return a * b;
}

let resultadoMultiplicar = multiplicar(2,10);
console.log(resultadoMultiplicar);
