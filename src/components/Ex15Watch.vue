<script setup>
import { ref, watch } from 'vue'

const paciente = ref('')
const pacientes = ref([
  { nome: 'João', idade: 32 },
  { nome: 'Jarlos', idade: 19 },
  { nome: 'Jarcela', idade: 40 },
  { nome: 'Jiruno', idade: 43 },
  { nome: 'Jeferson', idade: 58 }
])
const lista = ref([])

watch(paciente, (novoValor) => {
  lista.value = pacientes.value.filter((p) => p.nome.includes(novoValor))
  //Antes eu criava uma nova const para armazenar o valor e dava o console.log pra aparecer no console mesmo. Agora, pego o valor da lsita para essa função e visualizo através do double mustache lá no template da lista.
})
</script>

<template>
  <h1>Exemplo de Watch</h1>
  <p>Utilizado para monitorar mudanças no valor de um atributo</p>
  <p>
    Normalmente usamos o watch para operações assíncronas ou para reagir a mudanças em variáveis.
  </p>

  <hr />
  <span>Paciente: </span>
  <input type="text" v-model="paciente" />
  <hr />
  <h1>Lista</h1>
  <ul>
    <li v-for="p in lista" :key="p">{{ p.nome }}, {{ p.idade }}</li>
  </ul>
</template>

<style></style>
