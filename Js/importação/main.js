const {gets, print}= require('./aula01');

const numerosSorteados = [];

for(let j =0; j < 5; j++){
    const numerosSorteados= gets();
    numerosSorteados.push(numerosSorteados);
}

let maiorValor=0;

for(let i =0; i< numerosSorteados; i++){
    const numerosSorteados = numerosSorteados[i]
    if(numerosSorteados > maiorValor){
        maiorValor = numerosSorteados;
    }
}

print(maiorValor);
