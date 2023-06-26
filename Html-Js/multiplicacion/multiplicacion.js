function Multiplicar(){
let num1= parseInt(document.getElementById("numero1").value)
let num2= parseInt(document.getElementById("numero2").value)
let multiplicar = num1 * num2
//mostrar el resulado//
document.getElementById("resultado").textContent=" La Multiplicacion es "+ multiplicar;
}
