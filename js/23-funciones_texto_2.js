"use strict";

var numero = 444;
var texto1 = "Bienvenido al curso de JS de VR   ";
var texto2 = "Es muy buen curso";


// replace reemplaza el valor 1 por el 2
var busqueda = texto1.replace("JS", "JavaScript")

console.log(busqueda);

// slice Separa string desde el caracter indicado (11), se puede indicar tambien hasta donde cortar (11, 19)
var busqueda2 = texto1.slice(11, 19)
console.log(busqueda2);

// split corta y mete en un array
var busqueda3 = texto1.split()
console.log(busqueda3);
// se puede usar un separador con (" ") para guardar un array con todas las palabras del string
var busqueda4 = texto1.split(" ")
console.log(busqueda4);

// trim recorta espacios por delante y detras que pueda tener
var busqueda5 = texto1.trim()
console.log(busqueda5);
console.log(`${texto1} tiene ${texto1.length} caracteres incluidos espacios al final`);
console.log(`El mismo texto con .trim() tiene ${busqueda5.length}`);