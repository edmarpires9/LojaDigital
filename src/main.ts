/* Bem-vindo, aplicativo criado por Edmar Chagas Pires.
Para utilizar este aplicativo este passo a passo irá lhe guiar
1. Instale o NodeJS.
2. Inicie o powershell como administrador e digite o comando Set-ExecutionPolicy Unrestricted para habilitar a execução de scripts .PS1.
3. Abra o terminal e realize a instalação global do nestjs através do comando npm i -g @nestjs/cli.
4. Faça o download deste repositorio para sua maquina local.
5. Abra o terminal no diretorio da sua maquina local onde você salvou este projeto e digite o comando npm install para fazer a criação da pasta node_modules.
Feito isto é hora de desfrutar dessa aplicação com comando
$ npm run start
Você também pode iniciar essa aplicação de forma que ela reflita imediatamente as alterações feitas neste código através do comando
$ npm run start:dev
Para maiores informações consulte a documentação oficial do NestJS ou utilize nest --help.
*/

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
