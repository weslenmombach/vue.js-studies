<script setup>
import Exemplo11Props2 from './Ex11Props2.vue'

let cidade = 'Campo Bom'
let cidades = ['Guaíba', 'Canela', 'Gramado', 'Canoas']

function message() {
  alert('Função criada no componente: Ex11Props1')
}
</script>

<template>
  <Exemplo11Props2 nome="Weslen" idade="25" :cidade="cidade" :vetor="cidades" :funcao="message" />
  <p>As propriedades no código acima são flexíveis, posso enviar qualquer tipo de informação</p>
</template>
