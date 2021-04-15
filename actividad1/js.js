var btnenviar = document.getElementById("enviar");
var resultado = document.getElementById("resultado");
var inputUno = document.getElementById("num1");
var inputDos = document.getElementById("num2");

btnenviar.addEventListener("click", function () {

    var n1 = inputUno.value;
    var n2 = inputDos.value;
  

    if (validacion(n1, n2)) {
        resultado.innerHTML = Math.random() * (n2 - n1) + n1;;

    } else {
        
        window.alert('[ERROR] El campo debe tener un valor numerico');

    }

});
function validacion(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        return false;
    }
    else {
        return true;
    }
}
