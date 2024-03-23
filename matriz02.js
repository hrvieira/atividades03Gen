const leia = require('readline-sync');
// todos os códigos comentados foram usado para teste.
let matriz = new Array(10).fill(0);

// let arrTeste = [4.0,5.0,7.0,3.0,2.5,6.5,4.7,8.0,10.0,8.5,9.5,8.0,9.0,6.5,7.6,8.2,5.0,5.0,5.0,6.3,7.0,8.0,9.0,8.5,5.5,3.5,2.5,1.0,8.0,9.0,10.0,9.5,5.6,5.8,6.5,7.0,7.5,8.5,9.5,10.0];
// let arr = 0;

for(let iLinha = 0; iLinha < matriz.length; iLinha++){
     matriz[iLinha] = Array(4);//.fill(0);
}

for(iLinha = 0; iLinha < matriz.length; iLinha ++){
     for(let iColuna = 0; iColuna < 4; iColuna ++){
          matriz[iLinha][iColuna] = leia.questionInt(`Digite a ${iColuna}º do participante[${iLinha+1}]:\n`);
          //arrTeste[arr];
          //arr++;
     }
}

// let matriz = [[4.0,5.0,7.0,3.0],
// [2.5,6.5,4.7,8.0],
// [10.0,8.5,9.5,8.0],
// [9.0,6.5,7.6,8.2],
// [5.0,5.0,5.0,6.3],
// [7.0,8.0,9.0,8.5],
// [5.5,3.5,2.5,1.0],
// [8.0,9.0,10.0,9.5],
// [5.6,5.8,6.5,7.0],
// [7.5,8.5,9.5,10.0]];

console.table(matriz);

let vetorMedia = new Array(10);
let soma = 0;
let media = 0;

for(let iLinha = 0; iLinha < matriz.length; iLinha ++){
     for(let iColuna = 0; iColuna < matriz[iLinha].length; iColuna ++){
          soma += matriz[iLinha][iColuna];
     }

     media = (soma/matriz[iLinha].length).toFixed(1);
     vetorMedia[iLinha] = media;
     media = 0;
     soma = 0;
}

console.log(`Vetor de média de alunos: ${vetorMedia}`);