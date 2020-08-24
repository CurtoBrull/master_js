'use strict'

/*
1- Pida 6 numeros por pantalla y los meta en un array
2- Mostrar el array entero / todos los elementos en el cuerpo de página y consola
3- Ordenar el array y mostrarlo
4- Invertir el orden y mostrarlo
5- Mostrar cuantos elementos tiene el array
6- Búsqueda de un valor introducido por el usuario y que nos diga si está en el array y su posición en el índice
*/

// var usuario = prompt('Introduce 6 numeros')
// var numeros = new Array(6)

var numeros = []

// do {
//   numeros.push(usuario)
//   var usuario = prompt('Introduce 6 numeros')
// } while (numeros.length < 6){
//   console.log(numeros)
//   document.write(numeros.join(', '))
// }

for (let i = 0; i <= 5; i++) {
  // numeros[i] = parseInt(prompt('Introduce el numero', 0))
  numeros.push(parseInt(prompt('Introduce el numero', 0)))  
}
console.log(numeros)

document.write('<h1>Array de numeros</h1>')

document.write(numeros.join(', '))

for (let numero in numeros) {
  document.write("<li>" + numeros[numero] + "</li>")
}

var ordenados = numeros.sort((a, b) => a - b)
console.log(ordenados.join(', '));

var orden_reversa = numeros.reverse()
console.log(orden_reversa.join(', '))

console.log('El array tiene '+ numeros.length + ' elementos');

var busqueda = prompt('Introduce número a buscar')

var resultado = numeros.some(numero => numero == busqueda)
var resultado1 = numeros.findIndex(numero => numero == busqueda)

console.log(resultado);
console.log(resultado1);