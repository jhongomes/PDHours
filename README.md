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
- [SQLITE](https://www.sqlite.org/index.html)
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

* `GET http://localhost:3333/squad/Backend`

``` name: Backend  ```

## Atualizar dados do esquadrão

* `http://localhost:3333/squad/{id}`

Request url parameters example:

```
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

```
    id: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4" 
```
<br/>

## Cadastrar funcionário
* `POST http://localhost:3333/employee`

Request body example:
 ```json
{
	"name": "Jhonatan Gomes",
	"estimatedHours": 12,
	"squadId": "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"
}
 ```

## Listar todos os funcionário

* `GET http://localhost:3333/employee`


## Buscar único funcionário por id

* `GET http://localhost:3333/employee/{id}`

Request url parameters example:

``` 
    id: "8f63c5a6-50cb-4968-9a27-5c951c1c94cf"
```

## Listar horas gastas de cada membro de uma determinada squad

* `GET http://localhost:3333/employee/hours/{squadId}`

Request url parameters example:

``` 
    squadId: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"
```

## Listar tempo total gasto de uma squad

* `GET http://localhost:3333/employee/hoursTotal/{squadId}`

Request url parameters example:

``` 
   squadId: "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"
```

## Atualizar dados do funcionário

* `PUT http://localhost:3333/employee/{id}`

Request url parameters example:

```
   id: "8f63c5a6-50cb-4968-9a27-5c951c1c94cf"
```

Body example:

```json
{
	"name": "Jhonatan Gomes",
	"estimatedHours": 13,
	"squadId": "fba1d606-146a-4e35-b474-2d1c2ba3c1e4"
}

```

## Remover funcionário
* `DELETE http://localhost:3333/employee/{id}`
  
Request url parameters example:

```
    id: "8f63c5a6-50cb-4968-9a27-5c951c1c94cf"
```

## Cadastrar report
* `POST http://localhost:3333/report`

Request body example:
 ```json
{
	"description": "Desenvolvendo desafio da PD",
	"employeeId": "8f63c5a6-50cb-4968-9a27-5c951c1c94cf",
	"spentHours": 8
}
 ```

## Listar todos os report

* `GET http://localhost:3333/report`


## Buscar único report por id

* `GET http://localhost:3333/report/{id}`

Request url parameters example:

``` 
    id: "8f63c5a6-50cb-4968-9a27-5c951c1c94cf"
```

## Atualizar dados de um report

* `PUT http://localhost:3333/report/{id}`

Request url parameters example:

```
   id: "8f63c5a6-50cb-4968-9a27-5c951c1c94cf"
```

Body example:

```json
{
	"description": "Desenvolvendo desafio da PD",
	"employeeId": "d956e245-4e1b-48c9-abf8-980db815343f",
	"spentHours": 6
}

```

## Remover report
* `DELETE http://localhost:3333/report/{id}`
  
Request url parameters example:

```
    id: "8f63c5a6-50cb-4968-9a27-5c951c1c94cf"
```


<p align="center">Feito por <a href="https://www.linkedin.com/in/jhonatan-gomes-de-souza-513a3a197?challengeId=AQFBHhiP4QdIHQAAAX3BFHIS5K2MDNtBpp5ivwl-velebU8gwQxxhLIz51nO-__MejbD6jfZvQdyKWzrLVGfHNChGYGu8GqyMA&submissionId=ebdd152b-6a1b-c116-99c3-2848b7bbe760" target="_blank">Jhonatan Gomes💜</a></p>