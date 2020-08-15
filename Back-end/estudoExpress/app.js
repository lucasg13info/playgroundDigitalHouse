const express = require ('express');
const rotaHome = require ('./Routes/home')
const rotaContact = require ('./Routes/about')
const rotaProdutos = require ('./Routes/produtos')

const app = express();


app.use(rotaHome)
app.use(rotaContact)
app.use(rotaProdutos)

app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000")
});