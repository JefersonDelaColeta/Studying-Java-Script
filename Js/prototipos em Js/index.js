
//orientação a prótotipo


const pessoa = {
    genero:  'masculino'
}


const jeferson = {
    nome: 'Jeferson',
    idade: 18,
    __proto__: pessoa
}



console.log(jeferson.genero);
