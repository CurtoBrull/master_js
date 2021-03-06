'use strict'

// Arrays - Arreglos - Matrices

// Colección de tipos de valores

var nombre = 'Javier' // 1 valor
var nombres = ['Javier', 'Loly', 'Izhan', 'Iris'] // Array

// En forma de objetos

var lenguajes = new Array('PHP', 'JS', 'Go', 'Java', 'C#', 'Pascal')

console.log(nombres);
console.log(lenguajes);

// Acceder a un elemento segun su posicion

console.log(nombres[2]);

// Ver la longitud de un array

console.log(nombres.length);


// If else para que no se pueda introducir un valor mas alla de la longitud del array

/*
var elemento = parseInt(prompt('Qué elemento del array quieres', 0))

if (elemento >= nombres.length) {
  alert('Introduce un numero menor a '+ nombres.length)
  elemento = parseInt(prompt('Qué elemento del array quieres', 0))
} else {
  // indicar la posicion con una variable
  alert(nombres[elemento])  
}
*/

document.write('<h1>Lenguajes de programación del 2020</h1>')

// Recorrer todos los valores del array e imprimirlos en pantalla
// Los colocamos dentro de un UL y dentro de una LI

document.write("<ul>")
for (let i = 0; i < lenguajes.length; i++) {
    document.write("<li>" + lenguajes[i] + "</li>")
}
document.write("</ul>")

console.log("--------for each--------")
document.write("-------for each-------")

// Lo mismo con un for each
// for each nos pide un elemento, el índice (opcional) y un array (opcional) que nos mostrara el array utilizado
// elemento = nombre del array en este caso

lenguajes.forEach((elemento, index, arr) => {
  document.write("<li>"+ index + " - " + elemento + "</li>")
  console.log(arr);
});



// for in requiere declarar una variable y un objeto a ser iterado
// recorre las propiedades de un objeto o array y lista los nombres de las propiedades y sus valores

document.write("-------for in--------")

for(let lenguaje in lenguajes){
  // Necesita el nombre del objeto y entre [] la variable
  document.write("<li>" + lenguajes[lenguaje] + "</li>")
}

console.log("-------find--------")

// Busquedas

// .find necesita una funcion de callback

// var busqueda = lenguajes.find(function(lenguaje){
//   return lenguaje == "Java"
// })

var busqueda = lenguajes.find(lenguaje => lenguaje == "Java")
var busqueda2 = lenguajes.findIndex(lenguaje => lenguaje == "Java")

console.log(busqueda)
console.log(busqueda2)

console.log("--------some---------")


var precios = [10, 20, 30, 50, 80, 12]

// some para buscar elementos con una condicion concreta

var busqueda3 = precios.some(precio => precio >= "90")

console.log(busqueda3)