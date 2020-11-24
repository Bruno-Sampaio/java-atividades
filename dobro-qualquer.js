function dobrar(){
     var numeroQualquer = 6;
     var resultado;

     resultado = numeroQualquer * 2 ;

     console.log("resultado: ", resultado);
}     
     dobrar()

/*
utilização de parametros em rotorno nas funções
*/ 

function dobrar1(numeroQualquer){
     return numeroQualquer * 2;
}
console.log("Dobro é = ", dobrar1(8));