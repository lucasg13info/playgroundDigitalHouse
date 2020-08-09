const somar = (numeroA, numeroB) => numeroA + numeroB;

const calculadora = (numeroA, numeroB, operacao)  => operacao(numeroA, numeroB)

console.log(calculadora(10,20, (numeroA, numeroB) => numeroA - numeroB))























//estudos
/* função 1 */const soma = (numA, numB) => numA +numB;
/* função dois que passa como parametro função 1*/const calculator = (numA, numB, callback)=> callback(numA, numB)

console.log(calculator(10,20, soma))

