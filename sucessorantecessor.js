function antecessor(){
 var numeroQualquer = 3;

 antecessor = numeroQualquer - 1;

console.log("antecessor = ", antecessor);

}
antecessor()

function sucessor(){
 var numeroQualquer = 3;

 sucessor = numeroQualquer + 1;

console.log("sucessor = ", sucessor)

}
sucessor()

/*
utilização de parametros em rotorno nas funções
*/ 

function antecessor1(numeroQualquer1){
    return numeroQualquer1 - 1;
}
console.log("antecessor = ", antecessor1(3));

function sucessor1(numeroQualquer2){
    return numeroQualquer2 + 1;
}
console.log("sucessor = ", sucessor1(3));