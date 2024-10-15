<script setup>
import { ref } from 'vue'

const paciente = ref('João da Silva')

/*function setPaciente(e) {
  paciente.value = e.target.value
}*/

const sexo = ref('')
const plano = ref('')
const doencas = ref([])
const diagnostico = ref ('')
</script>

<template>
  {{ paciente }}
  <br />
  <!--<input type="text" :value="paciente" @:keyup="setPaciente($event)" />-->
  <!--Aqui temos um one way, pois está capturando os valores da variável paciente, uma única direção-->
  <!--Para ser um two way, adicionamos o v-on com uma direção ao evento setPaciente que altera o valor de paciente-->

  <!--Maneira mais enxuta de realizar, v-model facilita por não combinar v-bind e v-on-->
  <input type="text" v-model="paciente" />

  <hr />

  <input type="radio" value="f" v-model="sexo" name="sexo" /> Feminino
  <input type="radio" value="m" v-model="sexo" name="sexo" /> Masculino
  <br />
  {{ sexo }}
  <hr />

  <select v-model="plano">
    <!--Por boas práticas, utilizamos o disable para orientar o usuário, como um placeholder-->
    <option value="" disableD>Selecione o plano</option>
    <option value="1">Basic 1</option>
    <option value="2">Basic 2</option>
    <option value="3">Basic 3</option>
  </select>
  <br />
  {{ plano }}

  <hr />

  <input type="checkbox" value="100" v-model="doencas" /> Asma
  <input type="checkbox" value="101" v-model="doencas" /> Diabete
  <input type="checkbox" value="102" v-model="doencas" /> Rinite
  <br />
  {{ doencas }}

  <hr>
  <textarea v-model="diagnostico"></textarea>
  <br>
  {{ diagnostico }}

  <hr />

  <h1>ANOTAÇÕES</h1>

  <p>
    - Ajuda na atualização do two way data bind (Atualiação de mão dupla) entre atributos e
    formulários
  </p>
  <p>Pra input radio, definimos o name</p>
  <p>v-model é sincronia entre campos realacionado a atributos da instância do vue e vice-versa. Two ways.</p>
</template>

<style></style>
