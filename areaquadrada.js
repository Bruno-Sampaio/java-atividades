function areaQuadrado(){
      var lados = 4;
      var tamanhodosLados = 4;
      
      area = lados * tamanhodosLados;

      console.log("area = ", area)
}
areaQuadrado()

/*
utilização de parametros em rotorno nas funções
*/ 

function areaQuadrado2(lados, tamanhoLados){
      return lados * tamanhoLados;
}
console.log("area = ", areaQuadrado2(4, 4));