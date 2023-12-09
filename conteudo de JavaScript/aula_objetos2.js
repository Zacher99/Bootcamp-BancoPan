class Pessoa {
    name;
    peso;
    altura;
    constructor(name, peso, altura) {
        this.name = name
        this.peso = peso
        this.altura = altura
    }
    calcularImc() {
        return this.peso / (this.altura * this.altura)
    }
    classificarImc() {
        const imc = this.calcularImc()
        if (imc < 18.5) {
            return 'Abaixo do peso'
        }
        else if (imc <= 25) {
            return 'Peso normal'
        }
        else if (imc <= 30) {
            return 'Acima do peso'
        }
        else if (imc <= 40) {
            return 'Obeso'
        }
        else {
            return 'Obesidade Grave'
        }
    }
}


const zacher = new Pessoa('Zacher', 80, 1.80);
const gabriel = new Pessoa('Gabriel', 50, 1.78);
console.log(gabriel.classificarImc())
console.log(zacher.classificarImc())
