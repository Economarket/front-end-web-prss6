Tabela de conteúdos
-----------

<!--ts-->
* [Sobre](#sobre)
* [Tecnologias](#tecnologias)
* [Instalação](#instalação)
* [Uso](#uso)
* [Padrões](#padrões)
  * [Arquitetura](#arquitetura)
  * [Código](#código)
  * [Criação de branch](#criação-de-branch)
  * [Commits](#commits)
  * [Code Review](#code-review)
  * [Merge](#merge)


  
<!--te-->

Sobre
-----------

A EconoMarket é uma plataforma para auxílio de consultas e compartilhamento de preços além de planejamento de compras, criada para a comparação de preços de supermercados, onde o usuário cadastra os preços, os produtos e sugere supermercados.

Tecnologias
-----------

As seguintes ferramentas foram usadas na construção do projeto:

* [Axios](https://axios-http.com/ptbr/docs/intro)
* [Node.js](https://nodejs.org/en/)
* [React](https://pt-br.reactjs.org/)

Instalação
-----------

Após realizar o clone do economarket-web deverá ser feita a instalação das dependências usando o comando abaixo:

```bash
# Instalação das dependências

$ npm i
```

Uso
-----------

Para rodar o projeto utilize o comando abaixo:

```bash
# Inicialização do projeto

$ npm start

# O servidor será inicializado na porta <http://localhost:3000>
```

Padrões
====
Arquitetura
-----------

<b>Estrutura das pastas de arquivos utilitários</b>

* Components - Nessa pasta ficam todos os componentes que são utilizados pela aplicação.
* Hooks - Nesta pasta ficam todos os hooks customizáveis da aplicação.
* Routes - Nessa pasta ficam todos os arquivos que gerenciam as rotas da aplicação.
* Services - Nessa pasta ficam todos os arquivos responsáveis por consumir serviços, como por exemplo o arquivo de configuração do axios para consumir APIs.

Código
-----------

* Todas as variáveis e nomes de arquivos devem ser em inglês.
* Todas as variáveis devem seguir o padrão camelCase.
* Todas as urls devem seguir o padrão kebab-case

Criação de branch
-----------

* Antes de começar a trabalhar em uma nova tarefa, lembre-se de criar uma branch para desenvolver. Não trabalhe na branch master.

* As branches criadas devem seguir a estrutura:

```bash
EMW-<nome-da-tarefa-do-trello>
```

Exemplo:

```bash
EMW-tela-de-login
```

Commits
-----------

* [ATENÇÃO] Evite realizar commits direto na master

Todos as mensagens de commit devem seguir o padrão abaixo:

```bash
<tipo>: assunto
```

Exemplo:

```bash
feat: add button component
```

`<tipo>` pode ser uma dessas opções:

* feat (Nova feature)
* fix (Correção de bugs)
* docs (Adicionando/mundando documentação)
* style (Mudança de CSS)
* refactor (Refatoração)
* perf (Melhoria de performance)
* test (Adicionando testes)
* revert (Revertendo alguma tarefa)
* chore (Outras tarefas)
* ci (Configuração de integração contínua)

Code Review
-----------
* O link do Pull Request (PR) deve ser anexado ao card do Trello.
* Todas as correções ou sugestões de mellhoria devem ser comentadas no PR.
* É necessário a aprovação de dois revisores no PR para que esse seja liberado para mergear.

Merge
-----------

Para dar merge  do Pull Request:

* [ATENCÃO] Ao fazer o merge de develop para master não excluir a branch develop.
* Ao mergear o PR escolha a opção Squash e exclua a branch utilizada, caso não seja a develop.

Endpoint Mapeados
-----------
GET http://localhost:8080/
POST http://localhost:8080/auth/logout
GET http://localhost:8080/auth/token/refresh
GET http://localhost:8080/permission
PUT http://localhost:8080/permission
POST http://localhost:8080/permission
GET http://localhost:8080/permission/{{id}}
DELETE http://localhost:8080/permission/{{id}}
PUT http://localhost:8080/register/brand
POST http://localhost:8080/register/brand
DELETE http://localhost:8080/register/brand/{{id}}
PUT http://localhost:8080/register/category
POST http://localhost:8080/register/category
DELETE http://localhost:8080/register/category/{{id}}
PUT http://localhost:8080/register/market
POST http://localhost:8080/register/market
DELETE http://localhost:8080/register/market/{{id}} 
PUT http://localhost:8080/register/product
POST http://localhost:8080/register/product
DELETE http://localhost:8080/register/product/{{id}}
GET http://localhost:8080/search/brand
GET http://localhost:8080/search/brand/{{id}}
GET http://localhost:8080/search/category
GET http://localhost:8080/search/category/{{id}}
GET http://localhost:8080/search/market
GET http://localhost:8080/search/market/{{id}}
GET http://localhost:8080/search/product
GET http://localhost:8080/search/product/market
GET http://localhost:8080/search/product/name
GET http://localhost:8080/search/product/{{id}}
PUT http://localhost:8080/shopping
POST http://localhost:8080/shopping
DELETE http://localhost:8080/shopping
GET http://localhost:8080/shopping/user/{{userId}}
GET http://localhost:8080/shopping/{{id}}
GET http://localhost:8080/user
PUT http://localhost:8080/user
POST http://localhost:8080/user
GET http://localhost:8080/user/{{id}}
DELETE http://localhost:8080/user/{{id}}



## Autores

[<img src="https://avatars.githubusercontent.com/u/67704047?s=400&u=50e40cfa5c84ecc20dbb0eb0b8b9a3587cb36fcc&v=4" width=115><br><sub>Andreza Emiliano</sub>]