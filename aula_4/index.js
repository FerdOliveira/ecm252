require('dotenv').config()
const axios = require('axios')

const { APIKEY, PROTOCOL, BASE_URL, LANGUAGE, UNITS } = process.env


city = 'Itupeva'
const url = `${PROTOCOL}://${BASE_URL}?q=${city}&appid=${process.env.APIKEYWEATHER}&lang=${LANGUAGE}&units=${UNITS}`


// IO-Bound
axios.get(url)
.then(res => {
    return res.data
})
.then(res => {
    return res.cnt
})
.then(res => {
    return res.list
})
 .then(res => {
     for(let previsao in res){
        if(previsao.main.feels_like >= 0)
            console.log("EITA QUENTINHO!")
     }
 })
