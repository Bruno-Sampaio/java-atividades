function subitrair(){
    var minuendo = 2;
    var subtraendo = 8;
    resultado = subtraendo - minuendo;

    console.log("subtração = ", resultado);
}
subitrair()

function multiplicar(){
    var multiplicador = 3;
    var multiplicado = 3;
    resultado = multiplicador * multiplicado;

    console.log("multiplicação = ", resultado);
}
multiplicar()

function dividir(){
    var divisor = 4;
    var dividendo = 16;
    resultado = dividendo / divisor;

    console.log("divisão = ", resultado);
}
dividir()

function somar(){
    var numero  = 3;
    var numero1 = 4;
    resultado = numero + numero1;

    console.log("soma = ", resultado);
}
somar()

/*
utilização de parametros em rotorno nas funções
*/ 

function subitrair1(subtraendo, minuendo){
    return subtraendo - minuendo;
}
console.log("subtração = ", subitrair1(8, 2));

function multiplicar1(multiplicador, multiplicado){
    return multiplicador * multiplicado;
}
console.log("multiplcação = ", multiplicar1(3, 3));

function dividir1(divisor, dividendo){
    return dividendo / divisor;
}
console.log("divisão = ", dividir1(4, 16));

function somar1(numero, numero1){
    return numero + numero1;
}
console.log("soma = ", somar1(3, 4));