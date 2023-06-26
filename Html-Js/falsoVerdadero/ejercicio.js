function camisasComprar() {
    let number = parseFloat(document.getElementById("numberCamisa").value)
    let resultado = document.getElementById("resultado")

    if (number > 3) {
        resultado.textContent = "Por favor pagar con tarjeta"
    }
    else if (number < 3) {
        resultado.textContent = "Por favor pagar con efectivo"
    }
}