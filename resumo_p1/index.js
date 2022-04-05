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

// Arrow Function

const triplo = (numero) => numero * 3
const dobroMsg = (numero) => {
    console.log(`O dobro de ${numero} é ${2*numero}.`)
}
console.log(triplo(7))
dobroMsg(1)

// =============================================================
console.log("\n=============================================================")

// Closures
console.log("Closures\n")

// Closures é um objeto formado por uma função e seu escopo

// Em paralelo com POO, é como um Closures são como um objeto de um único método

function ola(){
    let nome = 'João';
    return function (){
        console.log ('Olá, João');
    }
}
    
let olaResult = ola(); // olaResult é uma Closure

olaResult();

function saudacoesFactory(saudacao, nome){
    return function (){
    console.log (saudacao + ', ' + nome);
    }
}

let olaJoao = saudacoesFactory ('Olá', 'João');      // olaJoao é uma Closure
let tchauJoao = saudacoesFactory('Tchau', 'João');   // tchauJoao é uma Closure
olaJoao();
tchauJoao();


// =============================================================
console.log("\n=============================================================")

// JSON
console.log("JSON\n")

let pessoa = {
    nome: "Felipe",
    idade: 21,
    endereco: {
        logradouro: "Rua Tal",
        numero: 821
    }
}

console.log(pessoa.nome)
console.log(pessoa["nome"])
console.log(pessoa.endereco.logradouro)

let calculadora = {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b
}

console.log(calculadora.soma(2,3))

// =============================================================
console.log("\n=============================================================")

// Execução Síncrona e Assíncrona
console.log("Execução Síncrona e Assíncrona\n")


// Execução Sícrona ou Bloqueante
function demorada(){
    const atualMais2Segundos = new Date().getTime() + 2000
    while (new Date().getTime() <= atualMais2Segundos);
    const d = 8 + 4
    return d
}

const a = 2 + 3
const b = 5 + 9
const d = demorada()
/*
o valor de e não depende do valor devolvido
pela função demorada.
*/
const e = 2 + a + b
console.log(e)
