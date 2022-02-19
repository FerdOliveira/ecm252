// Constantes
console.log("= Constantes ============")
const endereco = `Rua rua`
const idade = 27
console.log("=========================\n")


// Tipagem dinâmica
console.log("= Tipagem dinâmica ============")
let a = 2
console.log(a)
A = "abc"
console.log(a)
console.log("===============================\n")

// Variável
console.log("= Variável ===============")
    // let: escopo global | não pode ser redeclarada
let variavelLet = 3    

    // var: escopo local  | pode ser redeclarada
var variavelVar = 4    
console.log(variavelVar)
var variavelVar = 6  
console.log(variavelVar)
console.log("==========================\n")


// Variável pode ser declarada apenas depois de seu uso, não gera erro de compilação
console.log("= Variável usada antes da declaração ===============")
console.log("Oi, " + nome)
if(idade >= 18){
    var nome = "F7"
    console.log("Parabéns, " + nome)
    console.log("Você pode dirigir!")
}
console.log("Quem hosta de JavaScript é maluco!")
console.log("====================================================\n")


