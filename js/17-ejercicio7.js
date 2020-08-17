"use strict";

// Tabla de multiplicar de un número introducido

var numero = parseInt(prompt("Tabla de multiplicar del numero:", 0));

while (isNaN(numero)) {
	numero = parseInt(prompt("Introduce número", 0));
}
document.write(`<h2>Tabla del ${numero}</h2><br/>`);

for (var i = 1; i <= 10; i++) {
	// document.write(numero + " x " + i + " = " + i * numero + "</br>");
	document.write(`${numero} x ${i} = ${i * numero}</br>`);
}

// Todas las tablas de multiplicar del 1 al 10

for (var c = 1; c <= 10; c++) {
	document.write(`<h2>Tabla del ${c}</h2><br/>`);
	for (var i = 1; i <= 10; i++) {
		document.write(`${numero} x ${c} = ${c * i}</br>`);
	}
}
