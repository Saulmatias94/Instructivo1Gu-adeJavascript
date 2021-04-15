// Obtenemos el button y lo almacenamos en una variable llamada "btn"
var btnsuma = document.getElementById("btnsuma");
/* Obtenemos el div que muestra el resultado y lo
almacenamos en una variable llamada "resultado" */
var resultado = document.getElementById("res")
/* Obtenemos los dos input y los almacenamos en variables "inputUno" y "inputDos" */
var inputUno = document.getElementById("input-uno");
var inputDos = document.getElementById("input-dos");

var btnresta = document.getElementById("btnresta");
var btnmulti = document.getElementById("btnmulti");
var btndiv = document.getElementById("btndiv");
var valor = document.getElementById("input-uno")
var valor1 = document.getElementById("input-dos")


// Añadimos el evento click a la variable "btn"
btnsuma.addEventListener("click", function () {
    /* Obtenemos el valor de cada input accediendo a su atributo "value" */
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    /* Llamamos a una función que permite realizar la suma de los números y los
    mostramos al usuario" */
    var n3 = valor.value;
    var n4 = valor1.value;

    if (validacion(n3, n4)) {
        resultado.innerHTML = suma(n1, n2);

    } else {
        window.alert('[ERROR] El campo debe tener un valor numerico');

    }


});

btnresta.addEventListener("click", function () {

    var n1 = inputUno.value;
    var n2 = inputDos.value;
    var n3 = valor.value;
    var n4 = valor1.value;

    if (validacion(n3, n4)) {
        resultado.innerHTML = resta(n1, n2);

    } else {
        
        window.alert('[ERROR] El campo debe tener un valor numerico');

    }

});
btnmulti.addEventListener("click", function () {

    var n1 = inputUno.value;
    var n2 = inputDos.value;
    var n3 = valor.value;
    var n4 = valor1.value;

    if (validacion(n3, n4)) {
        resultado.innerHTML = multiplicar(n1, n2);

    } else {
        window.alert('[ERROR] El campo debe tener un valor numerico');

    }


});
btndiv.addEventListener("click", function () {
    var n1 = inputUno.value;
    var n2 = inputDos.value;
    var n3 = valor.value;
    var n4 = valor1.value;

    if (validacion(n3, n4)) {
        resultado.innerHTML = dividir(n1, n2);

    } else {
        window.alert('[ERROR] El campo debe tener un valor numerico');

    }


});

/* Función que retorna la suma de dos números */
function suma(n1, n2) {
    // Es necesario aplicar parseInt a cada número
    return parseInt(n1) + parseInt(n2);
}
function resta(n1, n2) {

    return parseInt(n1) - parseInt(n2);
}
function multiplicar(n1, n2) {

    return parseInt(n1) * parseInt(n2);
}
function dividir(n1, n2) {

    return parseInt(n1) / parseInt(n2);
}

function validacion(n1, n2) {
    if (isNaN(n1) || isNaN(n2)) {
        return false;
    }
    else {
        return true;
    }
}