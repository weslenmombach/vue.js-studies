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
