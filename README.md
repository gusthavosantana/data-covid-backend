<h1 align="center">Data Covid - Backend</h1>

<p align="center">Este projeto é uma API que é responsável por fornecer dados sobre Covid-19 no DF. Os dados são retornados no formato JSON.</p>

Índice
=================
<!--ts-->
   * [Pré-requisitos](#pre-requisitos)
   * [Instalação](#instalacao)
   * [Como usar](#como-usar)
   * [Features](#features)
   * [Tecnologias](#tecnologias)
   * [Testes](#testes)
<!--te-->



<h2 id="pre-requisitos">Pré-requisitos</h2>

- [Postgres](https://www.postgresql.org/download/). Caso não queira instalar o banco de dados na sua máquina, suba um container usando [Docker](https://hub.docker.com/_/postgres/).

<h2 id="instalacao">Instalação</h2>

### Clone este repositório
```
$ git clone https://github.com/gusthavosantana/data-covid-backend.git
```
### Acesse a pasta do projeto
```
$ cd data-covid-backend
```

### Instale as dependências
```
$ yarn
```
### Variáveis de ambiente
Copie o arquivo *.env.example*, renomeie para *.env* e preencha as variáveis de ambiente.

### Crie a base de dados
```
$ npx sequelize-cli db:create
```

### Crie as tabelas da base de dados
```
$ npx sequelize-cli db:migrate
```

### Execute os seeders para popular a base de dados
```
$ npx sequelize-cli db:seed:all
```

OBS: Caso precise reverter as alterações na estrutura do banco de dados, execute o comando `$ npx sequelize-cli db:migrate:undo:all`

<h2 id="como-usar">Como usar</h2>

### Inicie o servidor
```
$ yarn start
```

### Acesse a aplicação
Os endpoints disponíveis para a aplicação devem ter a seguinte url como perfixo: `http://localhost:5000`

<h2 id="testes">Testes</h2>

Neste projeto foram implementados somente testes ponta-a-ponta (e2e). Para executar os testes siga os passos a seguir:

Crie um banco de dados específico para testes
```
$ NODE_ENV=test npx sequelize-cli db:create
```

Execute os testes:
```
$ yarn test
```


<h2 id="features">Features</h2>

- [x] Buscar doses de vacina (total, percentual)
- [x] Buscar estoque de vacinas
- [x] Buscar doses por região
- [x] Buscar casos de covid (total/novos casos)
- [x] Buscar total por situação (recuperado/ativo)
- [x] Buscar total de casos por faixa etária
- [ ] Buscar dados de óbitos
- [ ] Buscar dados de testagem
- [ ] Permitir filtrar os dados

<h2 id="tecnologias">🛠 Tecnologias</h2>

As seguintes ferramentas foram usadas para construir este projeto:

- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Sequelize](https://sequelize.org/)

