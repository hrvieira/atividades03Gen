const leia = require('readline-sync');

let idade = 1;
let menor = 0;
let maior = 0;

while(idade > 0){
     idade = leia.questionInt("Digite uma idade:\n");

     if(idade < 21 && idade > 0){
          menor += 1;
     } else if(idade > 50){
          maior += 1;
     }
}

console.log(`Total de pessoas menores de 21 anos: ${menor}\n\nTotal de pessoas maiores de 50 anos: ${maior}`);