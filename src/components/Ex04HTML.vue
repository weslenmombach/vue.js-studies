<script setup>
let texto = 'Aprendendo diretiva v-html'
let texto02 =
  '<p style="color:purple">O v-html reproduz corretamente aquilo que colocamos, diferente da interpolação</p>'
</script>

<template>
  <div v-html="texto"></div>
  <div v-html="texto02"></div>
</template>
