const express = require ('express');
const sobre = require('./routes/sobre')
const index = require('./routes/index')
const app = express();
const port = 3000;


app.use(index);
app.use(sobre);


app.listen(port), () => console.log("ESTOU VIVO !");