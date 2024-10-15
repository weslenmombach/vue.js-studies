<script setup>
let nomes = ['Weslen', 'Gabriel', 'Guilherme']
</script>

<template>
  <ul>
    <li v-for="(nome, index) in nomes" :key="index">{{ nome }}</li>
  </ul>
</template>
