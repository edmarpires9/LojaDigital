//Biblioteca para escrever no armazenamento persistido.
const fs = require("fs");
//Caminho do banco de dados
const DB_FILE_PATH = "core/db";

//Cria um content na memória
function create(content) {
    //Escreve no armazenamento persistido.
    fs.writeFileSync(DB_FILE_PATH, content);
   return content; 
}

//Chama a função create
create("Primeiro create")