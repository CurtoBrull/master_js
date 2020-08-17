"use strict";

// Mostrar todos los impares entre 2 numeros introducidos

var numero1 = parseInt(prompt("Primer número", 0));
var numero2 = parseInt(prompt("Segundo número", 0));

while (numero1 < numero2) {
	numero1++;

	if (numero1 % 2 != 0) {
		/* operación para conseguir impar */ console.log(
			"El " + numero1 + " es impar"
		);
	}
}
