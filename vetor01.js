const leia = require('readline-sync');

const vetor = [2,5,1,3,4,9,7,8,10,6];

console.log(vetor);
let num = leia.questionInt(`Digite o número que você deseja encontrar:\n`);
let contador = 0;

while(num !== vetor[contador] && contador <= vetor.length){
     contador++;
}

if(num === vetor[contador]){
     console.log(`O número ${num} está localizado na posição: ${contador}`);
} else if(contador > vetor.length) {
     console.log(`O número ${num} não foi encontrado!`);
}