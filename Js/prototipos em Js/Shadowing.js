

const pessoa = {
    idade: 18
}

const jeferson = {
    nome: 'Jeferson',
    idade: 30,
    __proto__:pessoa
}

console.log(jeferson.idade);