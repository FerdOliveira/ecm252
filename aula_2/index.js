// Coersão Implícita
const n1 = 2
const n2 = '3'
const n3 = n1 - n2
console.log(n3)

const n4 = n1 + n2
console.log(n4)

// Comparações 
    // https://dorey.github.io/JavaScript-Equality-Table/unified/
console.log(" 1 == '1' : " + (1 == '1'))   // Coersão implícita + comparação de valores
console.log(" 1 === '1' : " + (1 === '1')) // Comparação de tipos + comparação de valores

// Vetores
const v1 = []
const v2 = [3, 'abc', true]
console.log(v1.length)
v1[0] = 'abc'
v1[2] = 3
v1[10] = 4.5
console.log(v1.length)
console.log(v1)
console.log(v2)

    // Métodos auxiliares
const nomes = [
    "Ana Maria",
    "Renan",
    "Felipe",
    "Armando"
]
nomes.filter(() => {})
