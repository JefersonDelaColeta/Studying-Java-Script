function Aplicardesconto (valor, desconto){
    return (valor - (valor *(desconto / 100)));
}
function aplicarJuros(valor, juros){
    return (valor + (valor *(juros/100)));
}

const valorProduto = 100;
const condiçãoPagamento = 'pix'; 


function classificarDesconto(){
    if(condiçãoPagamento == 'avista'){
        console.log(Aplicardesconto(valorProduto, 10));
    }else if (condiçãoPagamento == 'pix'){
        console.log(Aplicardesconto(valorProduto, 15));
    }else if (condiçãoPagamento == 'duas'){
        console.log(valorProduto);
    }else{
        console.log(aplicarJuros(valorProduto, 10));
    }
}

