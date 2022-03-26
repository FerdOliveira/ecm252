const express = require('express')
const app = express()

// Estamos aplicando um middleware
app.use((req, res, next) => {
    next()
})
app.use(express.json())

const lembretes = {"oi":"oi"}
contador = 0

// GET 
// localhost:4000/lembretes
app.get('/lembretes', (req, res) => {
    res.send(lembretes)
})

// POST
// localhost:4000/lembretes
app.post('/lembretes', (req, res) => {
    contador++
    //{texto: "Fazer café"}
    const {texto} = req.body
    lembretes[contador] = {contador, texto}
    res.status(201).send(lembretes[contador])
})

app.listen(4000, () => {
    console.log("Lembretes. Porta 4000.")
})
