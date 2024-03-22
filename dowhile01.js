const leia = require('readline-sync');

let num = 0, numbs = 0;
do{
     num = leia.questionInt("Digite um número:\n");
     if(num > 0){
          numbs = numbs + num;
     }
} while(num !== 0);
console.log(`A soma dos números positivos é: ${numbs}`);