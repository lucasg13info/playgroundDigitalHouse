//Alicando a função Object.assign no Javascript para adicionar itens a um objeto

// Declarando o objeto
const objeto = {
    id: 1,
    nome: "Lucas",
};

//Adicionando itens ao objeto
objeto.idade = 22;
objeto.profissao = "Desenvolvedor";
objeto.nacionalidade = "Brasileiro";

console.log(objeto)
// {   id: 1, nome: 'Lucas', idade: 22, profissao: 'Desenvolvedor', nacionalidade: 'Brasileiro' }



//--------------------------------------------------------------------------------------------------------------------------------------------
//Visando clareza no código podemos utilizar a função Objetct.assign para atribuir mais valores ao objeto de uma só vez, como descrito abaixo:
//--------------------------------------------------------------------------------------------------------------------------------------------


// Declarando o objeto
const objeto = {
    id: 1,
    nome: "Lucas",
};

//Adicionando itens ao objeto com Object.assign
Object.assign(objeto, {idade: 22, profissao: "Desenvolvedor", nacionalidade: "Brasileiro" });
console.log(objeto)

