
const pessoa = {
    nome: 'Jeferson',
    idade:18
}

function gritar(prefixo){
    console.log(prefixo, this.nome)
}


//objetos tem metodos.
//apply é o contexto depois os atributos.

gritar.apply(pessoa, ['Olaaaaa'])
gritar.call(pessoa, 'Olaaaaa')


