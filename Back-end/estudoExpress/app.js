const express = require ('express');
const rotaHome = require ('./routes/home')
const rotaContact = require ('./routes/about')

const app = express();


app.use(rotaHome)
app.use(rotaContact)


app.listen(3000, ()=>{
    console.log("Servidor rodando na porta 3000")
});