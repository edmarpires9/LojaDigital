/*Importa os decoratos necessarios para o bom funcionamento de nossa aplicação, entre eles:
Controller: Resposavel por conter a lógica de rotas api endpoint
Param: Permite utilizarmos os dados recebido através de parametros dentro de algum metodo
*/
import { Controller, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
//Para criar uma rota basta passar uma string para o decorator @controller
@Controller('Users')
//Criamos a classe UsersController para temos a liberade de exportar a mesma etc
export class UsersController{
    //Sempre que o cliente fizer uma requisição com verbo http get o decorator @Get() vai iniciar o metodo abaixo além de tentar pegar o parametro id fornecido no endpoint
    @Get('/:id')
    //O metodo getUsers recebe o decorator @Param() params: any para pegar o parametro que o cliente enviar e permitir que trabalhar com esse dado dentro do metodo
    public getUsers(
        @Param('id', ParseIntPipe) params: any
    ){
        return console.log(params);
    }
}