//Biblioteca para escrever no armazenamento persistido.
import fs, { readFileSync } from "fs"; //ES6
//Caminho do banco de dados
const DB_FILE_PATH = "core/db";

//Cria um content na memória
function create(content:string) {
    
    const todo = {
        content: content,
    }

    const todos = [
        todo,
    ]

    //Escreve no armazenamento persistido.
    fs.writeFileSync(DB_FILE_PATH,JSON.stringify(todo));
   return content; 
}

//Faz a leitura de um arquivo de texto no armazenamento
function read() {
    const db = readFileSync(DB_FILE_PATH, "utf-8");
    return db;
}