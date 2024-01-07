//Biblioteca para escrever no armazenamento persistido.
import fs, { readFileSync } from "fs"; //ES6
//Caminho do banco de dados
const DB_FILE_PATH = "core/db";

//Cria um content na memória
function create(content:string) {
    const todo = {
        content: content,
    }
    //Escreve no armazenamento persistido.
    fs.writeFileSync(DB_FILE_PATH,JSON.stringify(todo));
   return content; 
}

function read() {
    const db = readFileSync(DB_FILE_PATH, "utf-8");
    return db;
}

//Chama a função create
console.log(read());