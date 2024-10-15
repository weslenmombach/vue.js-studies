<script setup>
import { onMounted, ref, computed } from 'vue'

const vetor = ref([])

onMounted(() => {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((data) => (vetor.value = data))
})

const pacientes = ref([])
const inputNome = ref('')
const inputIdade = ref('')
const inputPlano = ref('')

function adicionarPaciente() {
  if (inputNome.value && inputIdade.value && inputPlano.value) {
    pacientes.value.push({
      nome: inputNome.value,
      idade: inputIdade.value,
      plano: inputPlano.value
    })
  }
};

const ultimoPaciente = computed(() => {
  if (pacientes.value.length === 0) {
    return 'Nenhum paciente cadastrado'
  }
  const key = pacientes.value.length - 1
  let txt = ''
  txt += 'Nome: ' + pacientes.value[key].nome + ' | '
  txt += 'Idade: ' + pacientes.value[key].idade + ' | '
  txt += 'Plano: ' + pacientes.value[key].plano

  return txt.toUpperCase
});

// Propriedade computada para pacientes com plano "Ouro"
const pacientesOuro = computed(() => {
  return pacientes.value.filter((p) => p.plano === 'Ouro')
});


</script>

<template>
  <div>
    <h1>Requisições</h1>
    <p>Trabalhando com API falsa e listagem de requisições</p>

    <table>
      <tr v-for="v in vetor" :key="v.id">
        <td>{{ v.userId }}</td>
        <td>{{ v.id }}</td>
        <td>{{ v.title }}</td>
        <td>{{ v.body }}</td>
      </tr>
    </table>

    <hr />

    <div>
      <h4>Adicionar pacientes</h4>
      <span>Nome:</span>
      <input type="text" v-model="inputNome" />
      <span>Idade:</span>
      <input type="text" v-model="inputIdade" />
      <span>Plano:</span>
      <input type="text" v-model="inputPlano" />
      <button @click="adicionarPaciente">Adicionar Paciente</button>
      <hr />

      <h4>Último paciente cadastrado</h4>
      <p v-if="pacientes.length > 0">
        {{ ultimoPaciente }}
      </p>
      <hr />

      <h4>Pacientes cadastrados</h4>
      <p v-for="p in pacientes" :key="p.nome">{{ p.nome }}</p>

      <hr />

      <h4>Pacientes do Plano Ouro</h4>
      <p v-for="p in pacientesOuro" :key="p.nome">{{ p.nome }}</p>
    </div>
  </div>

  <h1>Anotações</h1>

  <p>
    Com o uso de propriedades computadas, não precisamos de muitas informações em double mustaches.
  </p>
</template>
