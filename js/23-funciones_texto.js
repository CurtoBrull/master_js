"use strict";

var numero = 444;
var texto1 = "Bienvenido al curso de JS de VR";
var texto2 = "Es muy buen curso";

// Transformación de textos

var dato1 = numero.toString();
var dato2 = texto1.toUpperCase();
var dato3 = texto2.toLowerCase();

console.log(dato1);
console.log("dato1 444 ha sido transformado a " + typeof dato1);
console.log(`"${texto1}" ha sido transformado a "${dato2}"`);
console.log(`"${texto2}" ha sido transformado a "${dato3}"`);


// Calcular longitud


var nombre1 = "Javier Curto Brull";
var nombre = ["hola", "hola"]; 

// longitudes empiezan en 0
console.log(nombre1.length); // numero de letras
console.log(nombre.length); // Cuenta número de elementos del array
console.log(nombre[0]);

// Concatenar

// var texto_total = texto1 + " " + texto2;

// metodo .CONCAT
var texto_total = texto1.concat(". " + texto2);

console.log(texto_total);

// Buscar

var busqueda1 = texto1.indexOf("curso"); // 1ª coincidencia, de no existir da -1
var busqueda2 = texto1.search("curso"); // Igual que el anterior
var busqueda3 = texto1.lastIndexOf("curso"); // Última coincidencia

var busqueda4 = texto1.match("curso"); // Crea un array con los resultados

// Creando expresión regular con / y la /g de global
var busqueda5 = texto1.match(/curso/g); // Busqueda global

// Substraer (desde, hasta n adelante)
var busqueda6 = texto1.substr(4,6); // Saca desde el caracter X (4 en este caso) hasta Y puestos hacia delante (6 en este caso)

// chartAt Saca la letra que indiquemos
var busqueda7 = texto1.charAt(33); 

// startsWith Da true o false segun empiece el string con el valor indicado
var busqueda8 = texto1.startsWith("Bienvenido");
// endsWith Da true o false segun termine el string con el valor indicado
var busqueda9 = texto1.endsWith("Bienvenido");
// includes Da true o false segun encuentre en el string el valor indicado
var busqueda10 = texto1.includes("JS"); 

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