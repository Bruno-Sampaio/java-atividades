function media(){
 var medias = 3;
 var media1 = 7;
 var media2 = 9;
 var media3 = 8;

somaMedias = media1 + media2 + media3;
console.log("soma media = ", somaMedias);

media = somaMedias / medias;
console.log("media = ", media);
}
media()

/*
utilização de parametros em rotorno nas funções
*/ 

function media1(medias1, media11, media21, media31){
    return (media11 + media21 + media31) / medias1;
}
console.log("soma media = ", media1(3, 7, 9, 8));