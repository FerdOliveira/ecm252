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