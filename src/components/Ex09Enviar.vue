<script setup>

    function validForm(event){
        alert('Formulário enviado!');

        event.preventDefault();
    }

</script>

<template>
    <form action="https://youtube.com" @submit="validForm">
        <input type="submit" value="Enviar formulário">
    </form>
</template>