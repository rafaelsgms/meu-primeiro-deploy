require ('dotenv').config()
const express = require('express')

const app = express()

app.use(express.json())

app.get('/', async (req,res) => {
    return res.json('Meu primeiro deploy <3')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Servidor em pé na porta ${port}`)
})