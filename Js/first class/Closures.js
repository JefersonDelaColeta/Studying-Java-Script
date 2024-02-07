

function soma (x) {
    return (y) => {
        return x + y;
    }
}
//console.log(soma(10)(20))

const somaParcial = soma(10)

console.log(somaParcial(20))
console.log(somaParcial(30))
console.log(somaParcial(40))

//Clouser armazena ou lembra onde foi armazenada determinada função.

