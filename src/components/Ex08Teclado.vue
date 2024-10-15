<script setup>
function message() {
  alert('Alerta novo de teclado')
}
</script>

<template>
  <input type="text" @keyup.enter="message" />

  <p>Importante usar quando um cliente usa caracter específico ou algo do tipo. Importante pra validações.</p>
</template>
