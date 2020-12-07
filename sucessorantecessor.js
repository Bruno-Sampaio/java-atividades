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

function antecessor1(numeroQualquer){
    return numeroQualquer - 1;
}
console.log("antecessor = ", antecessor1(3));

function sucessor1(numeroQualquer){
    return numeroQualquer + 1;
}
console.log("sucessor = ", sucessor1(3));