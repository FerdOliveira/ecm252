const express = require('express')
const app = express()

app.use(express.json())

// GET
// localhost:5000/lembretes/{id}/observacoes
app.get('lembretes/:id/observacoes', (res, req) => {

})

// POST
// localhost:5000/lembretes/{id}/observacoes
app.post('lembretes/:id/observacoes', (res, req) => {

})

app.listen(5000, () => {
    console.log("Lembretes. Porta 5000")
})

