const leia = require('readline-sync');
let matriz = new Array(3)
// const matriz = [[1,2,3],[4,5,6],[7,8,9]];

for(let iLinha = 0; iLinha < matriz.length; iLinha ++){
     matriz[iLinha] = new Array(3);
     for(let iColuna = 0; iColuna < matriz.length; iColuna ++){
          matriz[iLinha][iColuna] = leia.questionInt(`Digite um número[${iLinha}][${iColuna}]:\n`)
     }
}

console.table(matriz);
let somaPrincipal = 0, somaSecundaria = 0;
let diagonal1 = new Array(matriz.length);
let diagonal2 = new Array(matriz.length);

for(let iLinha = 0; iLinha < matriz.length; iLinha ++){
     for(let iColuna = 0; iColuna < matriz.length; iColuna ++){
          if(iColuna === iLinha){
               diagonal1[iLinha] = matriz [iLinha][iColuna];
          }
     }
}

for(let somei of diagonal1){
     somaPrincipal += somei;
}

for (iLinha = 0; iLinha < matriz.length; iLinha++) {
     diagonal2[iLinha] = matriz[iLinha][matriz.length - 1 - iLinha];
}

for(somei of diagonal2){
     somaSecundaria += somei;
}

console.log(`Elementos da Diagonal Principal: \n${diagonal1}\n`);
console.log(`Elementos da Diagonal Secundária: \n${diagonal2}\n`);
console.log(`Soma dos Elementos da Diagonal Principal: \n${somaPrincipal}\n`);
console.log(`Soma dos Elementos da Diagonal Secundária: \n${somaSecundaria}\n`);