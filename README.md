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
GET http://api-economarket.herokuapp.com/<br/>
POST http://api-economarket.herokuapp.com/auth/logout<br/>
GET http://api-economarket.herokuapp.com/auth/token/refresh<br/>
GET http://api-economarket.herokuapp.com/permission<br/>
PUT http://api-economarket.herokuapp.com/permission<br/>
POST http://api-economarket.herokuapp.com/permission<br/>
GET http://api-economarket.herokuapp.com/permission/{{id}}<br/>
DELETE http://api-economarket.herokuapp.com/permission/{{id}}<br/>
PUT http://api-economarket.herokuapp.com/register/brand<br/>
POST http://api-economarket.herokuapp.com/register/brand<br/>
DELETE http://api-economarket.herokuapp.com/register/brand/{{id}}<br/>
PUT http://api-economarket.herokuapp.com/register/category<br/>
POST http://api-economarket.herokuapp.com/register/category<br/>
DELETE http://api-economarket.herokuapp.com/register/category/{{id}}<br/>
PUT http://api-economarket.herokuapp.com/register/market<br/>
POST http://api-economarket.herokuapp.com/register/market<br/>
DELETE http://api-economarket.herokuapp.com/register/market/{{id}} <br/>
PUT http://api-economarket.herokuapp.com/register/product<br/>
POST http://api-economarket.herokuapp.com/register/product<br/>
DELETE http://api-economarket.herokuapp.com/register/product/{{id}}<br/>
GET http://api-economarket.herokuapp.com/search/brand<br/>
GET http://api-economarket.herokuapp.com/search/brand/{{id}}<br/>
GET http://api-economarket.herokuapp.com/search/category<br/>
GET http://api-economarket.herokuapp.com/search/category/{{id}}<br/>
GET http://api-economarket.herokuapp.com/search/market<br/>
GET http://api-economarket.herokuapp.com/search/market/{{id}}<br/>
GET http://api-economarket.herokuapp.com/search/product<br/>
GET http://api-economarket.herokuapp.com/search/product/market<br/>
GET http://api-economarket.herokuapp.com/search/product/name<br/>
GET http://api-economarket.herokuapp.com/search/product/{{id}}<br/>
PUT http://api-economarket.herokuapp.com/shopping<br/>
POST http://api-economarket.herokuapp.com/shopping<br/>
DELETE http://api-economarket.herokuapp.com/shopping<br/>
GET http://api-economarket.herokuapp.com/shopping/user/{{userId}}<br/>
GET http://api-economarket.herokuapp.com/shopping/{{id}}<br/>
GET http://api-economarket.herokuapp.com/user<br/>
PUT http://api-economarket.herokuapp.com/user<br/>
POST http://api-economarket.herokuapp.com/user<br/>
GET http://api-economarket.herokuapp.com/user/{{id}}<br/>
DELETE http://api-economarket.herokuapp.com/user/{{id}}<br/>



## Autores

[<img src="https://avatars.githubusercontent.com/u/67704047?s=400&u=50e40cfa5c84ecc20dbb0eb0b8b9a3587cb36fcc&v=4" width=115><br><sub>Andreza Emiliano</sub>]