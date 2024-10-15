<script setup>
import { onMounted, ref } from 'vue'
let texto = ref('Hello World!')
onMounted(() => {
  setTimeout(() => {
    texto.value = 'Alterando texto';
  }, 2000)
})
</script>

<template>
  <h1>{{ texto }}</h1>

  <p>
    Ciclo de vida, ocorrendo antes, durante e depois da criação. Exemplo usando um lifecycle já
    implementado
  </p>
</template>
