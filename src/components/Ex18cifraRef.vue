<script setup>
import { ref } from 'vue'

const inputNome = ref('')
const formulario = ref(null)
const resultado = ref('')

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
</template>

<style></style>
