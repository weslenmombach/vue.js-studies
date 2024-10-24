import { dirname } from 'path'
import { fileURLToPath } from 'url'
import express from 'express'

const __dirname = dirname(fileURLToPath(import.meta.url))
//Aqui declaro o dirname pois por conta do ES então, aplicamos manualmente o __dirname em um ambiente de módulos ES

const app = express()
//responder a requisição feita para o servidor web por meio de comando/rota get

app.use(express.static(__dirname + '/dist/'))
//acima, basicamente carregamos a parte estática do projeto

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/dist/index.html')
})

app.listen(3000, function () {
  console.log('Servidor web rodando com express')
})
