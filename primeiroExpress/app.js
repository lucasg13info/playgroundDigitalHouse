const http = require('http');

http.createServer((req , res) => {
    res.writeHead(200, {"Content-type":"text/plain"})
    
    switch(req.url){
        case "/":
            res.end("Você está na página home!")
            break;
        case "/contato":
            res.end("Você está na página de contatos!")
            break;
        default:
            res.end("Você está no nosso servidor!")
    }

}).listen(3000);

