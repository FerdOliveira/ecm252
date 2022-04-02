const express = require('express')
const axios = require('axios')
const app = express()
app.use(express.json())

app.post('/eventos', (res, req) => {
    const evento = req.body

    axios.post('localhost:4000/eventos', evento)
    axios.post('localhost:5000/eventos', evento)
    res.statusCode(200).json({msg: "ok"})
})

app.listen(1000, () => {
    console.log("Barramento de eventos. Porta 1000")
})