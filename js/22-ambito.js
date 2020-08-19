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

// la variable hola_mundo no es accesible desde el exterior de la funcion ya que se ha creado la variable dentro de una funcion y tiene un alcance local

console.log(hola_mundo);