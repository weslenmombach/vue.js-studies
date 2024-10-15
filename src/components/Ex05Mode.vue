<script setup>
import { ref } from 'vue'

let texto = ref('')
</script>

<template>
  <input type="text" v-model="texto" />
  <p>
    {{ texto }}
  </p>

  <p>
    Neste caso, a variável não é reativa, toda informação que passamos não é exibida em tempo real.
    Pra mudar isso, utilizamos do ref ao invés de ''
  </p>

  <p>
    É uma via de mão dupla, do JS pro HTML e vice-versa, de forma reativa mostrando o que é digitado
  </p>
</template>
