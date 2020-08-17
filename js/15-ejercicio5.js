"use strict";

// Todos los números divisores (resto 0) de un número introducido

var numero = parseInt(prompt("Introduce número:", 1));

for (let i = 1; i < numero; i++) {
	if (numero % i == 0) {
		console.log("Divisor: " + i);
	}
}
