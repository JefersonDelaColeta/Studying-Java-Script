function incrementarJuros (valor, percentualJuros){

    const valordeAcrecimo = (percentualJuros/100) * valor;
    return valordeAcrecimo + valor;
}

console.log(incrementarJuros(100,10))
console.log(incrementarJuros(100,25))
