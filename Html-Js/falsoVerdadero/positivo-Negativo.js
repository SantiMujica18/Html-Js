function verificarNumero() {
    let number = parseFloat(document.getElementById("numberInput").value)
    let resultado = document.getElementById("resultado")

    if (number > 0) {
        resultado.textContent = "El numero es positivo"
    }
    else if (number < 0)
    {
        resultado.textContent = "El numero es negativo"
    }
    else {
        resultado.textContent = "El numero es cero"
    }
    
    
    
}