<script setup></script>

<template>
  <div class="resume">
    <h1 class="title"><a href="https://vuejs.org/" target="_blank">INTRODUÇÃO AO VUE.JS 3</a></h1>
    <p class="orientacao">Clique acima para acessar a documentação</p>
    <ul>
      <li>Vue CLI</li>
      <li>Git e Bitbucket</li>
      <li>Heroku (deploy)</li>
      <li>Vue Devtools</li>
    </ul>
  </div>
  <hr />
  <h2>First Steps</h2>
  <p>
    Vue CLI realizado através de cmd no prompt utilizando do NodeJs (ambiente server side
    javascript)
  </p>
  <p>Instalação de NPM - Gerenciador de pacotes do Node</p>
  <p>Instalação de Homebrew se for necessário</p>
  <p>Instalação do vue cli pelo npm e iniciando projeto</p>
  <p>Rede local e network, utilizadas para acessar no localhost ou via outro aparelho</p>
  <p>Criação de projeto vue com o comando - vue create nomeDoProjeto e indicação de opções de configurações</p>
  <p>Reserva de portas para aplicações rodando</p>

  <hr>
  <h2>DEFINIÇÃO DE SAÍDA DE PORTA</h2>
  <p>Basicamente, usamos do comando npm run serve -- --port 3001</p>

  <hr>

  <h1>Utilização de Vue UI</h1>
  <p>
    Utilizamos no terminal o comando vue ui e gerenciamos os projetos via o Vue UI, controlando na interface gráfica simplificando o que seria na linha de comando
  </p>
  <h2>Aula sobre:</h2>
  <ul>
    <li>Criação de projetos</li>
    <li>Importação de projetos</li>
    <li>Gerência de projetos e acessos</li>
    <li>Gerenciamento de plugins e dependências do projeto</li>
    <li>Dependências principais e dependências de desenvolvimento</li>
    <li>Configurações como Vue CLI e ESLint</li>
    <li>Tarefas, serve, build de produção e estatísticas do tamanho do projeto</li>
  </ul>
  <br>
  <p>Basicamente sobre as dependências, temos a questão de que o ambiente de desenvolvimento será mais pesado e o de execução não, por conta das dependências</p>
</template>

<style>
.resume {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title {
  text-align: center;
  border: 1px solid grey;
  border-radius: 15px;
  box-shadow: 10px 10px 25px black;
  width: 40%;
  padding: 10px;
}

a {
  text-decoration: none;
  color: black;
}

.orientacao {
  margin: 0px 0px 20px 0px;
}
</style>
