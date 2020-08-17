"use strict";

// FUNCIONES
// Es una agrupación reutilizable de un conjunto de instrucciones

// Defino función:
function hola() {
	// Instrucciones de la función
	return `Hola soy yo\n`;
}
// Llamar a la función
console.log(hola(), hola(), hola());

function porConsola(numero1, numero2) {
	console.log(`Suma: ${numero1 + numero2}`);
	console.log(`Resta: ${numero1 - numero2}`);
	console.log(`Multiplicación: ${numero1 * numero2}`);
	console.log(`División: ${numero1 / numero2}`);
	console.log(mostrar);
	console.log(`**************************`);
}
function porPantalla(numero1, numero2) {
	document.write(`Suma: ${numero1 + numero2}</br>`);
	document.write(`Resta: ${numero1 - numero2}</br>`);
	document.write(`Multiplicación: ${numero1 * numero2}</br>`);
	document.write(`División: ${numero1 / numero2}</br>`);
	document.write(`${mostrar}</br>`);
	document.write(`**************************` + "</br>");
}

function calculadora(numero1, numero2, mostrar = false) {
	if (mostrar == false) {
		porConsola(numero1, numero2);
	} else {
		porPantalla(numero1, numero2);
	}
	return true;
}

calculadora(12, 8);
calculadora(24, 2, true);
calculadora(59, 48, true);

for (var i = 1; i <= 10; i++) {
	console.log(i);

	calculadora(i, 8);
}
