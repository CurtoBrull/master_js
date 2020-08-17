"use strict";

// Calculadora de 2 numeros
// Vuelve a pedir numeros si no se introducen bien
// En el cuerpo de la pagina, alerta y consola sale el resultado de +, -, * y /

var numero1 = parseInt(prompt("Primer número", 0));
var numero2 = parseInt(prompt("Segundo número", 0));

while (numero1 < 0 || numero2 < 0 || isNaN(numero1) || isNaN(numero2)) {
	numero1 = parseInt(prompt("Primer número", 0));
	numero2 = parseInt(prompt("Segundo número", 0));
}

var resultado =
	`La suma es ${numero1 + numero2}</br>` +
	`La resta es ${numero1 - numero2}</br>` +
	`La multiplicación es ${numero1 * numero2}</br>` +
    `La división es ${numero1 / numero2}<br/>`;

var resultadoCMD =
	`La suma es ${numero1 + numero2}\n`+
	`La resta es ${numero1 - numero2}\n` +
	`La multiplicación es ${numero1 * numero2}\n` +
	`La división es ${numero1 / numero2}\n`;

document.write(resultado);
alert(resultadoCMD);
console.log(resultadoCMD);

