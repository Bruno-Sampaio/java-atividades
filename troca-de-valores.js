var a = 999
var b = 555

console.log("a", a)
console.log("b", b)

var temporaria = a

a = b
b = temporaria  

console.log("a", a)
console.log("b", b)

/*
utilização de parametros em rotorno nas funções
*/ 

function troca(a, b){
    var temporaria = a;
    a = b;
    b = temporaria;
    return {a, b};
}
console.log(troca(6, 5));