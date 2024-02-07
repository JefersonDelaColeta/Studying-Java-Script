
function Pessoa (nome, idade){
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function(){
    console.log(`Meu nome é ${this.nome}`)
}

const jeferson = new Pessoa ('Jeferson', 18)
jeferson.falar();