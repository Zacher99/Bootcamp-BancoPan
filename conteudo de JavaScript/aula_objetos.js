class Carros {
    marca;
    cor;
    gastoMedioKm;
    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca
        this.cor = cor
        this.gastoMedioKm = gastoMedioKm
    }
    calcularViagem(distanciaViagem, precoCombustivel) {
        return distanciaViagem * this.gastoMedioKm * precoCombustivel
    }
}
const uno = new Carros('Fiat', 'Preto', (1/12));
const palio = new Carros('Fiat', 'Vermelho', 1/14)
console.log(uno.calcularViagem(70, 5));
console.log(palio.calcularViagem(70, 5));
