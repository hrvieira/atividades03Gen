const leia = require('readline-sync');

let num1, num2;

num1 = leia.questionInt("Digite o primeiro número do intervalo:\n");

num2 = leia.questionInt("Digite o último número do intervalo:\n");

if(num1 < num2) {
      console.log(`No Intervalo entre ${num1} e ${num2}:\n`);

      for(let contador = num1; contador <= num2; contador++){
            
            if(((contador % 3) == 0) && ((contador % 5) == 0)){
                  console.log(`${contador} é múltiplo de 3 e 5`);
            }
      }
} else {
      console.log("O intervalo é inválido!\n\nSaindo do programa!");
}