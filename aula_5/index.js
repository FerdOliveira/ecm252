// Síncrona
function hello (nome){
    return `Hello, ${nome}`
}

const resultado = hello("F7, O Tal")
console.log(resultado)

//Promise
function helloPromise (nome){
    return new Promise(function(resolve, reject){
        resolve(`Hello, ${nome}`)
    })
}

helloPromise("F7, o Tal").then(res => console.log(res))

// Async
async function helloAsync(nome){
    return `Hello, ${nome}`
}

const promise = helloAsync("F7, o Tal")

promise.then(res => console.log(res))

function fatorial(n){
    if(n < 0)
        return Promise.reject("Valor não pode ser negativo")
    let res = 1
    for(let i = 2; i<= n; i++)
        res *= i
    return Promise.resolve(res)
}
console.log(fatorial(5))

async function chamadaComAsyncAwait(){
    try{
        const f1 = await fatorial(30)
        console.log(f1)
        const f2 = await fatorial(20)
        console.log(f2)
    }
    catch(e){
        console.log(e)
    }
}

chamadaComAsyncAwait()