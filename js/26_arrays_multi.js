'use strict'

var categorias = ['Acción', 'Terror', 'Comedia']
var peliculas = ['La verdad duele', 'Terminator', 'Sobrenatural', 'Dexter']

var cine = [categorias, peliculas]


// Acceder a multinivel. 
// Primero el numero del array. Seguido del elemento de ese array que queramos

console.log(cine);
console.log(cine[0][1]); // array categorias, elemento Terror
console.log(cine[1][3]); //  Dexter

// añadir elementos

peliculas.push('Batman')
console.log(`Se ha añadido Batman a ${peliculas.join(', ')}`);

// La variable esta vacia, el promt se crea dentro del do
var elemento = prompt('Introduce tu película.')

do {
  peliculas.push(elemento);  
  var elemento = prompt('Introduce otra película. Escribe ACABAR para salir')
} while (elemento != 'ACABAR') {

  document.write("<ul>")
  for (let i = 0; i < peliculas.length; i++) {
      document.write("<li>" + peliculas[i] + "</li>")
  }
  document.write("</ul>")
  
  console.log(peliculas);

}

// Eliminar ultimo elemento de un array

peliculas.pop()
console.log(`Despues de pop quedan las peliculas: ${peliculas.join(', ')}`);

// Buscar y borrar un elemento concreto

var eliminar = prompt(`Introduce película a eliminar`)
var indice = peliculas.indexOf(eliminar)
// -1 significa que no se ha encontrado
if (indice > -1) {
  // Uso de splice = borra lo indicado, numero en adelante a borrar (1 es solo lo introducido)
  peliculas.splice(indice, 1)
}
console.log(peliculas);

// Convertir a string con join

// Entre los () podemos indicar como se van a separar los elementos

var peliculas_string = peliculas.join(', ')
console.log(peliculas_string);