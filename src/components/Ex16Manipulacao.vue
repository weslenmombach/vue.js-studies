<script setup>
import { ref } from 'vue'

const eAzul = ref(false)
const eTextoBranco = ref(false)
const eDestaque = ref(false)
const eDestaque2 = ref(false)

const estilo1 = ref('azul')
const estilo2 = ref('text-branco')
const estilo3 = ref('destaque')
</script>

<template>
  <h1 id="app">Manipulação de Elementos HTML</h1>
  <p :class="{ azul: eAzul, ' text-branco': eTextoBranco, destaque: eDestaque }">
    Definição de classes com objetos, utilizando a diretiva v-bind (?)
  </p>
  <p>Sempre quando houver "-" nos objetos, utilizamos aspas simples ou duplas</p>

  <hr />

  <div class="botoes">
    <button @click="eAzul = !eAzul">
      <span v-text="eAzul ? 'Remover fundo' : 'Aplicar Fundo'"></span>
    </button>
    <button @click="eTextoBranco = !eTextoBranco">
      <span v-text="eTextoBranco ? 'Letra padrão' : 'Letra branca'"></span>
    </button>
    <button @click="eDestaque = !eDestaque">
      <span v-text="eDestaque ? 'Letra normal' : 'Letra destaque'"></span>
    </button>
  </div>

  <hr />

  <!--ERRO AQUI-->
  <h1>Realização de manipulação utilizando Arrays</h1>
  <p :class="[estilo1, { 'text-branco': true, destaque: eDestaque2 }]">
    Estilos sendo adicionados por arrays
  </p>
  <button @click="estilo1 = ''">Remover background</button>
  <button @click="eDestaque2 = !eDestaque2">Alterar Destaque</button>

  <p>
    Acima, temos um exemplo de usar o @click passando uma variável do array e atribuindo uma string
    vazia, fazendo com que a remoção não tenha volta
  </p>
  <br />
  <p>Também posso passar como objeto junto ao array</p>

  <hr />

  <h2>OBSERVAÇÕES</h2>
  <p>Posso combinar objetos, pares e atributos pra uma isntância em vue.js. Bom demais!</p>
</template>

<style>
.azul {
  background-color: rgba(63, 63, 228, 0.686);
}

.text-branco {
  color: white;
}

.destaque {
  font-weight: bold;
}

.botoes {
  display: flex;
  flex-direction: column;
}

.botoes button {
  border: 1px solid black;
  padding: 5px;
  border-radius: 10px;
  margin: 8px 8px;
  width: 20vw;
}
</style>
