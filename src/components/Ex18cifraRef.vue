<script setup>
import { ref } from 'vue'

const inputNome = ref('')
const formulario = ref(null)
const resultado = ref('')
const texto1 = ref('Vai tomando')
const texto2 = ref('Esquizofrenia')

function cadastrar() {
  let nome = inputNome.value
  let comentario = formulario.value.querySelector('textarea').value //Aqui ao invés de utilizar a posição do array, utilizo o querySelector pra buscar diretamente o textarea

  resultado.value = `${nome} disse "${comentario}"`
}
</script>

<template>
  <h1>REFERENCIANDO ELEMENTOS HTML COM $ref</h1>
  <p>
    Ref nos permite referenciar elementos HTML e seus elementos filhos, pinçar os elementos do DOM.
    No ref, as chaves apontam pro elemento HTML que podemos selecionar e manter na propriedade. É um
    atributo somente do Vue. Usamos também para capturar e manipular elementos no DOM.
  </p>
  <hr />
  <form ref="formulario">
    <div>
      <span>Nome:</span>
      <input type="text" v-model="inputNome" />
    </div>
    <button @click.prevent="cadastrar">Cadastrar</button> <br />
    <span>Comentário: </span> <textarea></textarea>
  </form>
  <hr />
  {{ resultado }}

<!--LEMBRETE DE SEMPRE: Não usar this. em Vue3, apenas o .value-->
>  <hr>
  <h1>AULA SOBRE DOM</h1>
  <p>DOM - Interface que mostra como os elementos são lidos pelos browsers. Os documentos ao serem lidos, tem a criação de um objeto, o DOM. Define formas de acesso e outras. Pode ser manipulado de forma dinâmica</p>
  <p>VIRTUAL DOM - Conceito. Representação virtual do DOM, mantida em memória JavaScript e sincronizada com DOM real, feito por framework, tipo Vue.js.</p>
  <p>Caso o Virtual DOM perceba que não teve alteração real, ele nem faz o sincronismo. Calcula diferenças e faz atualiação no DOM real apenas daquilo que teve impacto.</p>
  <br>
  <h1>
    COMPORTAMENTOS INESPERADOS
  </h1>
  <p>Não precisa se preocupar tanto em relação a isso, pois basicamente o Vue.js faz toda essa manipulação de DOM e Virtual DOM pra nós. Com isso, evita-se problemas referentes a manipulação do DOM, mas não é impossível de ocorrer. <br>
    * Estudar mais</p>
  <hr>
  <div>
    <h1>{{ texto1 }}</h1>
    <p>{{ texto2 }}</p>
    
  </div>
  <p>Aqui foi realizado conforme a aula porém não apresentou problemas, não sendo necessário o $mount <br>
  Basicamente é usado para recuperar uma isntância do vue e passar o valor dela. Quando necessário "montarmos" algo, podemos usar o createApp().mount()</p>
</template>

<style></style>
