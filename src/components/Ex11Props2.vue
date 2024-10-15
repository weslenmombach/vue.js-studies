<script setup>
import { defineProps } from 'vue'

// Obtenção de props
const props = defineProps(['nome', 'idade', 'cidade', 'vetor', 'funcao'])
</script>

<template>
  <h1>Nome: {{ props.nome }}</h1>
  <h1>Idade: {{ props.idade }}</h1>
  <h1>Cidade: {{ props.cidade }}</h1>

  <ul>
    <li v-for="(v, index) of props.vetor" :key="index">{{ v }}</li>
  </ul>

  <button style="background-color: green; color: white; border: 1px solid; padding: 10px; border-radius: 8px;" @click="funcao">Clique aqui</button>
</template>
