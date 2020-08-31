"use strict";

// JSON JavaScript Object Notation

var pelicula = {
	titulo: "Batman vs Superman",
	year: 2017,
	pais: "EEUU",
};

console.log(pelicula);

// Cambiar valores

pelicula.titulo = "Superman Begins";

var peliculas = [{ titulo: "La verdad duele", year: 2016, pais: "Francia" },
pelicula // se añade el objeto declarado anteriormente dentro del array peliculas
];

console.log(peliculas);
window.addEventListener('load', () => {

  // Seleccionamos el div con id peliculas    
  // se recorre el array peliculas tantas veces como index tenga algun valor
  // Se crea un elemento HTML "p"
  // se añade despues del "p" creado titulo y year del array
  // A la variable caja peliculas se añade la variable p
  
  var caja_peliculas = document.querySelector('#peliculas')
  for (const index in peliculas) {
    var p = document.createElement('p') 
    p.append(peliculas[index].titulo + ' - ' + peliculas[index].year)
    caja_peliculas.append(p)
}
});
