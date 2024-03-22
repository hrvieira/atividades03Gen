const leia = require('readline-sync');

let continuar = true, idade = 0, idades = 0, pessoas = 0, genero = 0, dev = 0, backend = 0,mulheresFront = 0, quarentoesMobile = 0, nBinarioFStackMenos30 = 0;

while(continuar === true){
     idade = leia.questionFloat("Idade:\n");
     idades = idades + idade;
     pessoas = pessoas + 1;

     genero = leia.keyInSelect(["Mulher Cis","Homem Cis","Não Binário","Mulher Trans","Homem Trans","Outros"],"Identidade de Gênero:\n");
     genero = genero + 1;

     dev = leia.keyInSelect(["Backend","Frontend","Mobile","FullStack"],"Pessoa Desenvolvedora:\n");
     dev = dev + 1;
     if(dev === 1){
          backend = backend + 1;
     }else if((genero === 1 || genero === 4) && dev === 2){
          mulheresFront = mulheresFront + 1;
     } else if((genero === 2 || genero === 5) && idade > 40){
          quarentoesMobile = quarentoesMobile + 1;
     } else if(genero === 3 && dev === 4 && idade < 30){
          nBinarioFStackMenos30 = nBinarioFStackMenos30 + 1;
     }
     continuar = leia.keyInYNStrict("Deseja continuar:\n")
}
console.log(`Total de pessoas desenvolvedoras Backend: ${backend}\n\nTotal de Mulheres Cis e Trans desenvolvedoras Frontend: ${mulheresFront}\n\nTotal de Homens Cis e Trans desenvolvedores Mobile maiores de 40 anos: ${quarentoesMobile}\n\nTotal de Pessoas Não Binárias desenvolvedoras FullStack menores de 30 anos: ${nBinarioFStackMenos30}\n\nO número total de pessoas que responderam à pesquisa: ${pessoas}\n\nA média de idade das pessoas que responderam à pesquisa: ${idades/pessoas}`)