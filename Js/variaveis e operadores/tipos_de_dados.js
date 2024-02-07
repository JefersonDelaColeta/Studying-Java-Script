//Boolean
//NUll
//Undefined
//number
//string
//symbol-É algo único

//object (pode carregar ou não metodos)

//true, false tipo primitivo

//new Boolean(true) Objeto
 

//const x = Symbol('10');
//const  y = Symbol('10');
//console.log(x===y);

const pessoa = {
    nome: 'Jeferson',
    idade: 18,
    falar: function(){
        console.log(`Meu nome é ${this.nome}`)
    }
}

const y = pessoa.falar

pessoa.falar()
y()