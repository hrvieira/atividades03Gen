const leia = require('readline-sync');

let vetor = [], impares = [], pares = [], j = 0, k = 0, soma = 0, contador = 0;

while(contador < 10){
     vetor[contador] = leia.questionInt(`Digite o ${contador+1}º número:\n`);
     contador++;
}

for(var i = 0; i < 10; i++){
     if((i % 2) === 1){
          impares[j] = vetor[i];
          j++;
     }
     if((vetor[i] % 2) === 0) {
          pares[k] = vetor[i];
          k++;
     }
     soma = soma + vetor[i];
}

console.log(`Elementos nos índices ímpares:\n${impares}\n\nElementos pares:\n${pares}\n\nSoma: ${soma}\n\nMédia: ${(soma/vetor.length).toFixed(2)}`);