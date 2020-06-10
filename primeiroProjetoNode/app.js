// Sevridor que apenas recebe a solicitação  (recebe o requests)
// const http = require('http');

// http.createServer((req, res) => {
    
//     console.log("Servidor está rodando ...")

// }) .listen(3000);


//Servidor que recebe o request e retorna o response
const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {"Content-Type":"test/plain"});
    res.end("Meu primeiro servidor!");

}) .listen(3000);