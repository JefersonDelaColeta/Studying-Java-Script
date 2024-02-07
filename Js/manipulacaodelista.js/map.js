
class Pessoa{
    constructor(nome){
        this.nome = this.nome
    }
}


const lista = [new Pessoa('Jeferson'), new Pessoa('Andressa'), new Pessoa('Vitor'), new Pessoa ('José')]

const listaNomes = []

for(let i = 0; i < lista.length; i++){
    const element = lista[i];
    listaNomes.push(element.name)
}

console.log(listaNomes)