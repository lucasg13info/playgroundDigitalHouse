let dia = "sexta";

if (dia == "domingo"){
    console.log(" Vou para a praia!")

}else if (dia == "sexta"){
    console.log("Vou ao cinema")
}else{
    console.log("Vou dormir")
}


let linguagem = "javascript"

if (linguagem === "javascript"){
    console.log("Estou aprendendo")
}else{
    console.log("Vou aprender mais pra frente")
}



function podePassar(nome){
    if (nome === "Natalia") {
        return false;
    }else if (nome !== "Natalia"){
        return true;
    }
    
}

podePassar("Natalia");
