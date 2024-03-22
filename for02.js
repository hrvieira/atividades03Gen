const leia = require('readline-sync');

let num;
let par = 0;
let impar = 0;

for(let i = 1; i <= 10; i++){
     num = leia.questionInt(`Digite o ${i}º número:\n`);

     if((num % 2) == 0){
          par = par + 1;
     } else {
          impar = impar + 1;
     }
}
console.log(`Total de números pares: ${par}\n\nTotal de números ímpares: ${impar}`);