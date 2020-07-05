//Conceitos basicos para se aplicar em uma primeira aula

// var minhaVariavel = "oi";
// console.log(minhaVariavel)

// let minhaVariavel1 = "tudo bem";
// console.log(minhaVariavel);

// const minhaVariavel2 = "aula01";
// console.log(minhaVariavel2);


// // FUNÇÕES Forma de passar um conjunto de instruções para o cód
// function nomedaFuncao(parametro1, parametro2) {
//     //escopo da função
//     let minhaVariavel2 = "minha função"
//     console.log(minhaVariavel2);
// };


// function bomDiaPessoal() {
//     console.log("Bom dia o sol já nasceu");   
// }

// //Chamando a função
// bomDiaPessoal();


// // //função com parametros
// // function somar(numero1, numero2){
// //     console.log(numero1 + numero2);
// //     console.log(numero1 - numero2);

// // }

// //executando a função com o retorno
// // somar(1,5);

// //funções nativas

// // let a = Number(150);
// // let b = Number("150");

// // console.log(a + b);



// //condicional
// function ePar(numero){
//     if(numero % 2 == 0){
//         return true;
//     }else {
//         return false;
//     }
// }


// console.log(ePar(4));
// console.log(ePar(5));



// //OBJETO GENERICO - OBJETO SERVE PARA ARMAZENAR VÁRIAS INFORMAÇÕES DE UMA SÓ VEZ
// let objetoGenerico = {
//     propriedade: "valor",
//     propriedade1: "valor2",
//     propriedade2: "valor3"
// }

// console.log(objetoGenerico);


// //Retornar apenas o valor de uma propriedade
// console.log(objetoGenerico.propriedade2)


//CACHORRO
let cachorro = {
    nome: "Bolt",
    idade: 4,
    sexo: "M",
    castrado: true,
    vacinado: ["Raiva", "Verme", "Cinomose"],
}

// // //mostra o objeto inteiro
// // console.log(cachorro);

// // // quero uma propriedade
// // console.log(cachorro.nome);

// // let nomeCachorro = cachorro.nome;
// // console.log("Oi " + nomeCachorro + " é hora de tomar banho ");



// //Cachorro é castrado e qual seu sexo?
// function eCastrado(cachorroTestado){
//     if (cachorro.castrado === true && cachorro.sexo == "M"){
//         console.log("O " + cachorro.nome + " é cadastrado e de sexo " + cachorro.sexo)
//     }else{
//         console.log("Não é castrado")
//     }
// }

// eCastrado(cachorro.castrado);





// ARRAY DE CACHORROS
let cachorros = [
    {
        nome: "Malu",
        idade: 3,
        sexo: "M",
        castrado: true,
        servicos: ['banho', 'tossa'],
    },
    {
        nome: "Batman",
        idade: 2,
        sexo: "M",
        castrado: false,
        servicos: ["banho", "tosa", "corte de unha"]
    },
    {
        nome: "Mel",
        idade: 4,
        sexo: "F",
        castrado: false,
        servicos: ["banho", "corte de unha"]
    }
];

//TODOS OS DADOS DO ARRAY
//console.log(cachorros);

//UM CACHORRO EM ESPECÍFICO.
console.log(cachorros[2].nome, cachorros[2].sexo)



