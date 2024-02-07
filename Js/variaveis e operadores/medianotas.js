const nota1 = 5;
const nota2 = 1;
const nota3 = 7;
const media = (nota1+nota2+nota3)/3;

if(media <5){
    console.log('Média inferior a 5, reprovado ' + media)
}
else if(media >= 5 && media <= 7){
    console.log('Média entre 5 e 7, recuperção ' + media)
}
else{
    console.log('Média maior que 7, foi aprovado ' + media)
}
