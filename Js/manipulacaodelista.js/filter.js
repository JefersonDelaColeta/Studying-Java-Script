const lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const listaDeNumerosPAres = lista.filter((element) => {
    return (element % 2 === 0)
})

console.log(lista)
console.log(listaDeNumerosPAres)

//filter cria uma nova lista filtrando os elementos desejados da lista principal.