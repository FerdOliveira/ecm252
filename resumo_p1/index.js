// =============================================================
console.log("\n=============================================================")

// Variáveis
console.log("Variáveis\n")

// let  -> escopo local
// var  -> escopo global (é mantida apenas por conta da retro compatibilidade)
//const -> constante imutável

// Exemplo

let idade = 18

// A variável nomeLet não existe fora do escopo do If
console.log(" -- Antes do If -- ")
console.log(`nomeVar: ${nomeVar}`) // Exibe undefined, pois elá existe fora do escopo do If mas não teve atribuição ainda

if (idade >= 18){
    var nomeVar = "Felipe"
    let nomeLet = "Felipe"
    console.log(" -- Dentro do If --")
    console.log(`nomeVar: ${nomeVar} \nnomeLet: ${nomeLet}`)
}
console.log(" -- Depois do If --")
console.log(`nomeVar: ${nomeVar}`)

// =============================================================
console.log("\n=============================================================")

//Coerção
console.log("Coerção\n")

const n1 = 2;
const n2 = '3';

// Coerção implícita de n1, concatenação acontece
const n3 = n1 + n2;
console.log(n3);

// Coeração explícita, soma acontece
const n4 = n1 + Number (n2)
console.log(n4)

// =============================================================
console.log("\n=============================================================")

//Coerção
console.log("Comparação\n")

// Operador ==  -> ocorre coerção implícita para que os valores possam ser comparado
// Operador === -> não realiza coerção, caso os valores sejam de tipos diferentes retorna false

console.log ('1 == 1 ->' , 1 == 1)
console.log ('1 == "1" -> ' , 1 == "1") 
console.log ('1 === 1 -> ' , 1 === 1) 
console.log ('1 === "1" -> ' , 1 === "1")
console.log ('true == 1 -> ' , true == 1) 
console.log ('1 == [1] -> ' , 1 == [1])
console.log ('null == null -> ' , null == null)
console.log ('null == undefined -> ' , null == undefined)
console.log ('[] == false -> ' , [] == false)
console.log ('[] == [] -> ' , [] == [])

// =============================================================
console.log("\n=============================================================")

// Vetores
console.log("Vetores\n")

let vetor = []

vetor[2] = 3
vetor[3] = "Oi"

console.log("vetor[0] = ", vetor[0])
console.log("Tamanho = ", vetor.length)

const nomes = ["Ana", "Antonio", "Felipe", "Rodrigo", "Alex", "Matheus"]

const nomesComA = nomes.filter((nome) => nome.startsWith("A"))
console.log (nomesComA)

const iniciais = nomes.map((nome) => nome.charAt(0))
console.log (iniciais)

const valores = [1, 2, 3, 4]
const soma = valores.reduce((previous, current) => previous + current)
console.log(soma)

// =============================================================
console.log("\n=============================================================")

// Funções
console.log("Funções\n")

function hello (){
    console.log("Hello")
}
hello()

function hello (nome){
    console.log("Hello, ", nome)
}

hello()
hello("F7")





