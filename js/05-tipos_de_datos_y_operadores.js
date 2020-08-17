'use strict'

// OPERADORES

var numero1 = 7;
var numero2 = 12;
var operacion = numero1 * numero2;

console.log(operacion);
alert("El resultado es: " + operacion);

// TIPOS DE DATOS
// Entero, string, decimal, booleano, array, objeto

var numero_entero = 44;
console.log(numero_entero);
var cadena_texto = "hola";
console.log(cadena_texto);
var verdadero_o_falso = true; // O false
console.log(verdadero_o_falso);

var numero_falso = "33.33";

console.log(Number(numero_falso)+7); // A numero

console.log(parseInt(numero_falso)+7); // A numero Sin decimales
console.log(parseFloat(numero_falso)+7); // A numero Con decimales

console.log(String(numero_entero)+4); // A texto

console.log(typeof numero_entero);
console.log(typeof cadena_texto);
console.log(typeof verdadero_o_falso);
console.log(typeof numero_falso);





