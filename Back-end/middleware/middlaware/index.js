const path = require ('path')

let usuariosArquivo = path.join("..","data", "usuarios", "usuarios.json")


let extensao = path.extname(usuariosArquivo)


let diretorio = path.dirname(usuariosArquivo)

console.log(diretorio)