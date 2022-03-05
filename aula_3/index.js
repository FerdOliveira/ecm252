// Closure
// function f(){
//     let nome = "Joao"
//     function g (){
//         console.log(nome)
//     }
//     g()
// }
// f()

// Devolver uma nova coleção que possui todos os elementos de v que produza true
function filter(v, f){
    let retorno = []
    for(let i = 0; i < v.length; i++){
        if(f(v[i]) === true){
            retorno.push(v[i])
        }
    }
    return retorno
}
console.log(filter([1,2,3], e => e % 2 === 0))

// Produzir uma coleção nova quem para cada elemento de v[i] 
//  possui um valor resultante f(v[i])
function map(v, f){
    let retorno = []
    for(let i =0; i<v.length; i++){
        retorno.push(f(v[i]))
    }
    return retorno
}
console.log(map(['abcd', 'abc'], e => e.length))


function eAgora(){
    let cont = 1
    function f1(){
        console.log(cont)
    }
    cont++
    function f2(){
        console.log(cont)
    }
    // Isso é um objeto JSON
    return {f1,f2}
}

let res = eAgora()
res.f1()
res.f2()

// Declaração e funções

 const minhaFuncao = function (a,b){
     return a+b
 }
 const minhaFuncaoDois = (a,b) => a + b
 const calculo = {
     soma: (a, b) => a + b,
     sub: (a, b) => a - b
 }
console.log(calculo.soma(1,2))

// JSON

let c = {
    cnpj: 51186566833,
    endereco: {
        logradouro: 'Rua B',
        numero: 122,
        bairro: 'Vila A'
    },
    veiculos: [
        {
            marca: 'Ford',
            modelo: 'Ka',
            ano: 1995,
            revisoes: [
                {
                    data: '14/02/1996',
                    consultor: 'Fábio'
                },
                {
                    data: '13/02/1986',
                    consultor: 'João'
                }
            ]
        }      
    ]
}
console.log(c.veiculos[0].revisoes[1].consultor)


// Funções callback

const fs = require('fs')
const abrirArquivo = function (nomeArquivo){
    const exibirConteudo = (erro, conteudo) => {
        if(erro)
            console.log(`Deu erro: ${erro}`)
        else{
            console.log(`Conteúdo: ${conteudo.toString()}`)
            const triplo = +conteudo.toString() * 3
            const finalizar = (erro) => {
                if(erro)
                    console.log("Erro ao salvar o triplo")
                else
                    console.log('Salvou com sucesso')
            }
            fs.writeFile('triplo.txt', triplo.toString(), finalizar)
        }
    }
    fs.readFile(nomeArquivo, exibirConteudo)
    
}
abrirArquivo("arquivo.txt")