import express from 'express';
const app = express()

//responder a requisição feita para o servidor web por meio de comando/rota get

app.get('/', function(req, res){
    res.send('Olá, sou um servidor web Node com Express')
})

app.listen(3000, function(){
    console.log('Servidor web rodando com express')
})