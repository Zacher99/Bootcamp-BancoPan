class pagamento {
    constructor(price, payment) {
        this.price = price
        this.payment = payment
    }
    paymentType() {
        if (this.payment === "Débito") {
            console.log('O valor no débito fica: ' + (this.price - (this.price * 0.1)))

        }
        else if (this.payment === "Dinheiro" || this.payment === "Pix") {
            console.log('O valor em dinheiro ou pix fica: ' + (this.price - (this.price * 0.15)))
        }
        else if (this.payment === "Duas Vezes") {
            console.log('O valor em até duas vezes fica: ' + (this.price))
        }
        else {
            console.log('O Valor em três vezes ou mais fica: ' + (this.price + (this.price * 0.1)))
        }
    }

}


let debito = new pagamento(100, "Débito")
let pix = new pagamento(899.90, "Pix")

debito.paymentType()
pix.paymentType()