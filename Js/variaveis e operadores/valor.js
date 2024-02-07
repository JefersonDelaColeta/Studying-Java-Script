const valorProduto = 100;
const condiçãoPagamento = 'duass'; 

if(condiçãoPagamento == 'avista'){
    const debito = valorProduto * 0.1;
    const valorFinal = valorProduto - debito;
    console.log(valorFinal)
}else if (condiçãoPagamento == 'pix'){
    const desconto = valorProduto * 0.15;
    const valorFinal = valorProduto - desconto;
    console.log(valorFinal)
}else if (condiçãoPagamento == 'duas'){
    const valorFinal = valorProduto;
    console.log(valorFinal)
}else{
    const juros = valorProduto * 0.1;
    const valorFinal = valorProduto + juros;
    console.log(valorFinal)
}