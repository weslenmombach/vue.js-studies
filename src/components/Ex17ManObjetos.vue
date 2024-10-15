<script setup>
import { computed, ref } from 'vue'

const tamanhoTexto = ref(30)

/*const estilos = ref({
  background: 'blue',
  width: 150 + 'px',
  height: 150 + 'px',
  padding: 10 + 'px',
  fontSize: 20 + 'px'
})*/

const estilos = computed(() => {
  let width = Math.floor(Math.random() * 100 + 100)
  let height = Math.floor(Math.random() * 100 + 100)
  let background = 'blue'

  let horas = new Date()

  if (horas.getHours() > 18) {
    background = 'red'
  }

  return {
    background: background,
    width: width + 'px',
    height: height + 'px',
    padding: 10 + 'px',
    fontSize: tamanhoTexto.value + 'px'
  }
})
</script>

<template>
  <h1>Exemplo como utilizar objetos pra setar valores no style do HTML através de v-bind.</h1>
  <hr />

  <div :style="estilos">Definindo styles com objetos</div>
  <!--<button @click="estilos.background = 'red'">Alterar fundo</button>-->
  <button @click="tamanhoTexto += 5">Aumente a fonte</button>
  <hr />
  <h2>Observations</h2>
  <p>
    <span>OBS:</span>Quando tiver um caracter especial no style do vue.js como " - ", utilizo de uma
    letra maiúscula pra não precisar colocar aspas simples ou duplas
  </p>

  <hr />

  <h1>Convertendo propriedade style para propriedade computada</h1>
  <p>Computada é propriedade formada em algo dinâmico, lógica</p>
  <p>Com propriedades computadas podemos implementar as mais variadas lógicas</p>
  <div :style="estilos">Definindo styles com objetos</div>
</template>

<style></style>
