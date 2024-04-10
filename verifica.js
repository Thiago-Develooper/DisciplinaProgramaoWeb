const express = require('express')
const app = express()
const path = require('path') //caminho

const PORT = process.env.PORT || 3000; //faz com que a porta seja 3000, de 3000 a 3099 podemos usar qualquer porta
app.listen(PORT, () => console.log(`Servidor rodando na posta ${PORT}`))
console.log('servidor iniciado com sucesso!')