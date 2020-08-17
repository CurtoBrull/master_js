'use strict';

var numero = 12;
var texto = 'Hola mundo soy una variable global';

function holaMundo(texto) {
    var hola_mundo = "Texto dentro de la función";
    console.log(texto);
    console.log(numero.toString()); // transformamos a String con .toString despues de la variable
    console.log(hola_mundo);
}

// Llamando a la función

holaMundo(texto);

// hola_mundo No funciona ya que se ha creado la variable dentro de una funcion
// de forma local

// console.log(hola_mundo);