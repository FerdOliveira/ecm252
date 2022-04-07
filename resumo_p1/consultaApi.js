const axios = require("axios")
const { get } = require("http")

const url = "https://rickandmortyapi.com/api/character"

axios
    .get(url)
    .then((response) => {
        return response.data.info.count
    })
    .catch((reject) => {
        return 826
    })
    .then((response) => {
        let maxCharacterNumber = response
        let luckNumber = Math.floor(Math.random() * maxCharacterNumber + 1)
        axios
            .get(url+`/${luckNumber}`)
            .then((response) => {
                if (response.data.gender.toUpperCase() === "FEMALE")
                    console.log("Você acabou de encontrar a", response.data.name)
                else
                console.log("Você acabou de encontrar o", response.data.name)
            })
    })

  
