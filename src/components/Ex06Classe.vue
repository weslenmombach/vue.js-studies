<script setup>
let validacao = true
</script>

<style>
.ok {
  color: green;
}
.falha {
  color: red;
}
.informativo {
  color: blue;
}
.aviso {
  color: blueviolet;
}
</style>

<template>
  <p :class="validacao ? 'ok' : 'falha'">Utilizando a diretiva class</p>
  <p class="informativo">
    Aqui temos a utilização de classe e estilização CSS, tendo também condicional para que intercale
    a alteração de cor conforme o valor da variável
  </p>

  <p class="aviso">
    Também utilizamos o :class quando queremos ter uma condicional para alterações, se for cor fixa,
    somente o class basta
  </p>
</template>
