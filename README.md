# 📜 Sobre
  
  A PD Soluções deseja criar o sistema “PD Hours Control” para controle de horas dos membros. O funcionário reporta as atividades feitas. Ao término do seu dia de trabalho, descrevendo o que foi feito e a quantidade de horas gastas.

## Cadastro de esquadrão

**RF**

- Deve ser possível cadastrar uma esquadrão.
- Deve ser possível listar todas as esquadrão.
- Deve ser possível buscar uma única esquadrão por `name`.
- Deve ser possível buscar uma única esquadrão por `id`.
- Deve ser possível alterar as informações de uma esquadrão.
- Deve ser possível excluir uma esquadrão. 

**RN**

- Não deve ser possível cadastrar um esquadrão com `name` existente.
- Não deve ser possível buscar um esquadrão com `id` inválido.
- Não deve ser possível alterar o `name` já cadastrado no sistema.
- Não deve ser possível excluir esquadrão que não exista no sistema.

## Cadastro de funcionário

**RF**

- Deve ser possível cadastrar uma funcionário .
- Deve ser possível listar todos os funcionário.
- Deve ser possível buscar um único funcionário por `name`.
- Deve ser possível buscar um único funcionário por `id`.
- Deve ser possível alterar as informações de um funcionário.
- Deve ser possível excluir um funcionário.

**RN**

- Não deve ser possível buscar um único funcionário com `id` inválido.
- Não deve ser possível excluir funcionário que não esteja cadastrado no sistema.
- Não deve ser possível cadastrar um funcionário com `squadId` inválido.
- Não deve ser possível cadastrar um funcionário com `estimatedHours` min 1 hour and max 12 hours.


## Cadastro de report

**RF**

- Deve ser possível cadastrar uma report .
- Deve ser possível listar todos os report.
- Deve ser possível buscar um único report por `id`.
- Deve ser possível alterar as informações de um report.
- Deve ser possível excluir um report.

**RN**

- Não deve ser possível buscar um único report com `id` inválido.
- Não deve ser possível cadastrar um report com `employeeId` inválido.

<br>

# 🔧 Tecnologias utilizadas

- [Nodejs](https://nodejs.org/en/)
- [Express](http://expressjs.com/pt-br/)
- [Typescript](https://docs.microsoft.com/pt-br/archive/msdn-magazine/2015/january/typescript-understanding-typescript)
- [TypeORM](https://typeorm.io/#/)
- [Jest](https://jestjs.io)
- [VS Code](https://code.visualstudio.com/) com [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) e [ESlint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

<br>

# 🗳 Como baixar o projeto

⚠ É necessário possuir as seguintes ferramentas instaladas em seu computador:
- [Node.js](https://nodejs.org/en/). (Preferencialmente a versão 15.4.0)


⚠ Você pode usar tanto o [yarn](https://yarnpkg.com/) quanto o [npm]() para instalar as dependências.


<br/>

Clone o projeto para sua maquina local:
```bash
# Clone o projeto para sua maquina local
$ git clone https://github.com/jhongomes/PDHours.git

# Acesse a pasta do projeto
$ cd PDHours

# Instale todas as dependências do projeto
$ yarn 
ou
$ npm i

# Rode o comando para criar as mirations no SQLITE.
$ yarn typeorm migration:run
ou
$ npm run typeorm migration:run

# Rode o projeto
$ yarn dev
ou
$ npm run dev
```
<br />

# Rotas locais

## Cadastrar esquadrão
* `POST http://localhost:3333/squad`

Request body example:
 ```json
{
	"name": "Backend"
}

 ```

## Listar esquadrão

Request url parameters example:

* `GET http://localhost:3333/squad`

## Listar único esquadrão por nome

Request url parameters example:

* `GET http://localhost:3000/squad/Backend`

```json 

name: Backend   

```

## Atualizar dados do esquadrão

* `http://localhost:3333/squad/{id}`

Request url parameters example:

```json
    id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"

```

Body example:

```json
{
	"name": "Backend engineering"
}

```

## Remover esquadrão
* `http://localhost:3333/squad/{id}`
  
Request url parameters example:

```json
    id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4" 

```
