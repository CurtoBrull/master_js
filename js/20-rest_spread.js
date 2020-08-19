"use strict";

// REST y SPREAD
// "...nombre" tipo REST pone el resto de parámetros dentro de un array
function listadoFrutas(fruta1, fruta2, ...resto_de_frutas) {
	
	console.log(`Fruta 1: `, fruta1);
	console.log(`Fruta 2: `, fruta2);
	console.log(resto_de_frutas);
}

listadoFrutas("Naranja", "Manzana", "Coco", "Melón", "Sandía");

// Tipo SPREAD
var frutas = ["Naranja", "Manzana"];
listadoFrutas(...frutas, "Coco", "Melón", "Sandía"); 
