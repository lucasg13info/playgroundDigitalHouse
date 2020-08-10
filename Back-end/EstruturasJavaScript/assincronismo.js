//Define o tempo que irá executar cada parte do cod, usa o setTimeout para isso

function alarme1(){
    return "Hora de acordar são 08:00h";
}

function alarme2(){
    return "Está perto da sua hora de acordar são 7:50h"

}
//Só executa depois de 2s
setTimeout(function(){
    console.log(alarme1())
}, 2000)

//Executa antes
console.log(alarme2())
