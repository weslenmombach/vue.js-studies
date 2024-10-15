<template>
    <div>
      <p>
        {{ `Meu nome é ${nome} e minha idade é: ${idade} anos` }}
      </p>
  
      <p>
        {{ num1 + num2 }}
      </p>
    </div>
  </template>
  
  <script setup>
  let nome = 'Oito'
  let idade = 26
  let num1 = 2134
  let num2 = 321
  </script>
  