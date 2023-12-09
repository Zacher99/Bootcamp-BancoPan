function aplicarDesconto(valor, desconto) {
    return valor - (valor * (desconto / 100))
}

function aplicarJuros(valor, juros) {
    return valor + (valor * (juros / 100))
}
const formadepagamento = 4
const precoEtiqueta = 100
if (formadepagamento === 1) {
    console.log(aplicarDesconto(precoEtiqueta, 10))
}
else if (formadepagamento === 2) {
    console.log(aplicarDesconto(precoEtiqueta, 15))
}
else if (formadepagamento === 3) {
    console.log(precoEtiqueta)
}
else if (formadepagamento === 4) {
    console.log(aplicarJuros(precoEtiqueta, 10))
}
else {
    console.log("forma de pagamento invalida")
}