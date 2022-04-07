const fs = require("fs");

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

console.log("Ta tudo comentado pra não cagar o resto do script")

// // Execução Sícrona ou Bloqueante
// function demorada(){
//     const atualMais2Segundos = new Date().getTime() + 2000
//     while (new Date().getTime() <= atualMais2Segundos);
//     const d = 8 + 4
//     return d
// }

// const a = 2 + 3
// const b = 5 + 9
// const d = demorada()
// /*
// o valor de e não depende do valor devolvido
// pela função demorada.
// */
// const e = 2 + a + b
// console.log(e)

// // Execução Assíncrona ou Não Bloqueante

// /* 
// A função setTimeout recebe dois parâmetros, uma função e um valor em milissegundos, 
// a função será executada apenas quando os milissegundos se esgotarem, sendo assim o resto do código continua executando.
// Basicamente, a setTimeout adia a execução da função passada em X milissegundos. 
// */
// setTimeout(() => {
//     const f = demorada()
//     console.log("Sou de um setTimeout, me ignora", f)
// }, 500)

// const g = a + b
// console.log(g)

// /* 
// Obs.: a função setTimeout enfileira a execução da função, ou seja, mesmo que
// os milissegundos se esgotem a função apenas será executada depois do bloco principal.
// Por exemplo:
// */

// setTimeout(function(){
//     console.log('Dentro da setTimeout')
// },0)

// const h = new Date().getTime() + 1000
// while (new Date().getTime() <= a);
// console.log('Fora da setTimeout')

// /*
// Em JavaScript, a execução é single thread, ou seja, o programador não consegue criar
// threads separadas, apenas o próprop o próprio ambiente de execução pode (NodeJS, navegador).
// É o caso da leitura de um arquivo que pode ser executado em uma thread separada pelo ambiente.
// */

// let abrirArquivo = function (nomeArquivo) {
//     let exibirConteudo = function (erro, conteudo) {
//         if (erro) {
//             console.log(`Deu erro: ${erro}`);
//         } else {
//             console.log(conteudo.toString());
//         }
//     };
//     fs.readFile(nomeArquivo, exibirConteudo);
// };

// abrirArquivo('arquivo.txt')
// abrirArquivo("../aula_3/arquivo.txt");

// =============================================================
console.log("\n=============================================================")

// O Inferno de Callbacks
console.log("O Inferno de Callbacks\n")

// Callbacks: são funções passadas para outras funções como parametro para completar algum tipo de rotina

console.log("Ta tudo comentado pra não cagar o resto do script")

// const abrirArquivo = function (nomeArquivo) {
//     const exibirConteudo = function (erro, conteudo) {
//         if (erro) {
//             console.log(`Deu erro: ${erro}`);
//         } else {
//             console.log(conteudo.toString());
//             const dobro = +conteudo.toString() * 2;
//             const finalizar = function (erro){
//                 if(erro){
//                     console.log('Deu erro tentando salvar o dobro')
//                 }
//                 else{
//                     console.log("Salvou o dobro com sucesso");
//                 }
//             }
//             fs.writeFile('dobro.txt', dobro.toString(), finalizar);
//         }
//     };
//     fs.readFile(nomeArquivo, exibirConteudo);
//  };
//  abrirArquivo("arquivoNumero.txt");

// =============================================================
console.log("\n=============================================================")

// Promises
console.log("Promises\n")

 // Promises: é um objeto por meio do qual uma função pode propagar um resultado ou um erro em algum momento no futuro

function calculoDemorado(numero){
    return new Promise(function (resolve, reject){
        let response = 0
        for(let i = 1; i <= numero; i++){
            response += 1
        }
        resolve(response)
    })
}

calculoDemorado(10).then( (response) => {
    console.log("Resposta: ", response)
})
.catch((reject) => console.log(reject))


