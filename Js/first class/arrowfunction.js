function funcao01(){
    console.log(this)
}

//arrow function, ela não tem contexto então,
// não é necessário utilizar o this.


const funcao02 = () =>{
    console.log(this)
}

const jef = {
    nome: 'Jeferson',
    funcao01,
    funcao02
}

jef.funcao01()
jef.funcao02()