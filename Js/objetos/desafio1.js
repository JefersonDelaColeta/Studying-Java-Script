class Carro{

    marca;
    cor;
    gastoMedioPorKm;

    
    constructor (marca, cor, gastoMedioPorKm){
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;  
    }

    calcularGastoDePercurso(distancia, valor){
        return (distancia * this.gastoMedioPorKm * valor)
    }
}

const uno = new Carro('Fiat', 'azul',1/12);
console.log (uno.calcularGastoDePercurso(70, 5));

const palio =  new Carro ('Fiat', 'preto', 1/10);
console.log (palio.calcularGastoDePercurso(70, 5));