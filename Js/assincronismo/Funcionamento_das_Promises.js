
const promessaDeUmNumeroQualquer = new Promise((resolve, reject) => {
    //processa algo se der certo ele ocasiona o resolve
    //se der errado ele ocasiona o reject
    const numero = parseInt(Math.random() *100)
    resolve (numero)
})

promessaDeUmNumeroQualquer.then((value) => {
    console.log(value)
})
.catch((error) => {
    console.log(error)
})
.finally(() =>{
    console.log('finalizou!')
})

