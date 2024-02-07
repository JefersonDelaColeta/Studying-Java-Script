 function escrevaMeuNome(nome){
    return'Meu nome é ' + nome;
 }

 function maiorDeIdade(idade){
    if(idade >=18){
        console.log(escrevaMeuNome('Jeferson') + ' Maior de idade');
    }else{
        console.log(escrevaMeuNome('Cledson') + ' Menor de Idade');
    }
 }

 maiorDeIdade(18);
