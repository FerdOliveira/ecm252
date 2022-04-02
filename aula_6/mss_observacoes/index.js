const express = require('express')
const {v4: uuidv4} = require('uuid')
const app = express()

app.use(express.json())

const observacoesPorLembreteId = {}

// GET
// localhost:5000/lembretes/{id}/observacoes
app.get('lembretes/:id/observacoes', (res, req) => {
    
})

// POST
// localhost:5000/lembretes/{id}/observacoes
app.post('lembretes/:id/observacoes', (res, req) => {
    const idObs = uuidv4()
    //const texto = req.body.texto
    const { texto } = req.body
    const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] || [] // OU Lógico -> se observacoesPorLembreteId[req.params.id] não existir o valor atribuido será []
    /* 
    const observacoesDoLembrete = observacoesPorLembreteId[req.params.id] 
    if(observacoesDoLembrete === undefined)
        observacoesDolembrete = []
    */
    observacoesPorLembrete.push({id: idObs, texto: texto})
    observacoesPorLembreteId[req.params.id] = observacoesDoLembrete
    res.status(201).send(observacoesDoLembrete)
})

app.listen(5000, () => {
    console.log("Lembretes. Porta 5000")
})

