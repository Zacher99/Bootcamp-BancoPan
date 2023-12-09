let precoGasolina = 6.66;
let precoEtanol = 5.79;
let tipoCombustivel = 'Etanol';
let gastoKmCombustivel = 8;
let distanciaViagem = 100;
if (tipoCombustivel === "Etanol") {
    let calculo = distanciaViagem / gastoKmCombustivel * precoEtanol
    console.log(calculo.toFixed(2))
} else {
    let calculo = distanciaViagem / gastoKmCombustivel * precoGasolina
    console.log(calculo.toFixed(2))
}
