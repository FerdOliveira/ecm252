require('dotenv').config()

const { APIKEY, PROTOCOL, BASE_URL, LANGUAGE, UNITS } = process.env


city = 'Itupeva'
const urlApi = `${PROTOCOL}://${BASE_URL}?q=${city}&appid=${process.env.APIKEYWEATHER}&lang=${LANGUAGE}&units=${UNITS}`
console.log(urlApi)