const express = require('express')
const dotenv = require('dotenv')
const app = express()

dotenv.config()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.send("Hola mundo con daemon!")
})

app.listen(process.env.SERVER_PORT, () => {
    console.log(`Aplicacion de ejemplo escuchando en el puerto ${process.env.SERVER_PORT}`)
})