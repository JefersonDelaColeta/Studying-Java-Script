const pessoa = {
    genero: 'masculino'
}


const jeferson = Object.create(pessoa)

jeferson.nome = 'Jeferson'

console.log(jeferson.genero)