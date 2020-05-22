//IF ternário
let dia = "segunda";

let resultado = dia == "domingo"?"Vou a praia":"fico em casa" 
console.log(resultado)



//Condicional Switch
switch(dia){
    case "segunda":
        console.log("Vou tomar café");
        break;
    case "quarta":
        console.log("Vou ao cinema");
        break

    default:
        console.log("Não vou fazer nada!")
}


//adaptando código com switch case
let dia = 'segunda-feira'

function fimDeSemana(dia) {	
	if (dia == 'sexta-feira') {
    	console.log('Bom fim de semana!')
	} else if (dia == 'segunda-feira') {
    	console.log('Boa semana!')
	} else {
    	console.log('Bom dia!')
	}
}


switch(dia){
	case "segunda-feira":
		console.log('Boa semana!')
		break;
	case "sexta-feira":
		console.log('Bom fim de semana!')
		break

	default:
	console.log('Bom dia!')
}




//Aulas com switch
let dia = "sabado";
function fimDeSemana(dia){
	switch(dia){
	case "segunda":
		console.log('você tem aulas!')
		break;
	case "quarta":
		console.log('você tem aulas!')
		break
	case "sexta":
		console.log('você tem aulas!')
		break

	default:
	console.log("você não tem aulas")
}
}

fimDeSemana(dia)