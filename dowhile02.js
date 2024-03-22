const leia = require('readline-sync');

let num = 0, numbs = 0, contador = 0;
do{
     num = leia.questionInt("Digite um número:\n");
     if(num > 0 && num % 3 === 0){
          numbs += num;
          contador++;
     }
} while(num !== 0);
console.log(`A média de todos os números múltiplos de 3 é: ${(numbs/contador).toFixed(2)}`);