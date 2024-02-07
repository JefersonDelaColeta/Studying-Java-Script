const lista = [{nome: 'Jeferson'}, {nome: 'Andressa'}, {nome: 'Andre'}]


console.log(
lista.map(e=> e.nome)
.filter((e) => e.startsWith('A'))
.join('; '))



//console.log(lista.map((e) => e.nome).join('; '))
