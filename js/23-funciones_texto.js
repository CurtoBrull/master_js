"use strict";

// Transformación de textos

var numero = 444;
var texto1 = "Bienvenido al curso de JS de VR, buen curso";
var texto2 = "Es muy buen curso";

var dato = numero.toString();
    dato = texto1.toUpperCase();
    dato = texto2.toLowerCase();

console.log(dato);

// Calcular longitud

var nombre = "Javier Curto Brull";
var nombre = ["hola", "hola"]; // Cuenta número de elementos

console.log(nombre.length);

// Concatenar

// var texto_total = texto1 + " " + texto2;

var texto_total = texto1.concat(" " + texto2);

console.log(texto_total);

// Buscar

var busqueda1 = texto1.indexOf("curso"); // 1ª coincidencia, de no existir da -1
var busqueda2 = texto1.search("curso"); // Igual que el anterior
var busqueda3 = texto1.lastIndexOf("curso"); // Última coincidencia
var busqueda4 = texto1.match("curso"); // Crea un array con los resultados
var busqueda5 = texto1.match(/curso/g); // Busqueda global
var busqueda6 = texto1.substr(4,6); // Saca desde el caracter X (4 en este caso) hasta Y puestos hacia delante (6 en este caso)
var busqueda7 = texto1.charAt(33); // Saca la letra que indiquemos
var busqueda8 = texto1.startsWith("Bienvenido"); // Da true o false segun empiece el string con el valor indicado
var busqueda9 = texto1.endsWith("Bienvenido"); // Da true o false segun termine el string con el valor indicado
var busqueda10 = texto1.includes("JS"); // Da true o false segun encuentre en el string el valor indicado

console.log(busqueda1); 
console.log(busqueda2); 
console.log(busqueda3); 
console.log(busqueda4); 
console.log(busqueda5);
console.log(busqueda6);
console.log(busqueda7);
console.log(busqueda8);
console.log(busqueda9);
console.log(busqueda10);