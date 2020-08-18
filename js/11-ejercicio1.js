"use strict";

// PEDIR AL USUARIO 2 NUMEROS Y QUE NOS DIGA CUAL ES EL MAYOR, EL MENOR Y SI SON IGUALES.
// SI NO SON NUMEROS O SON MENORES O IGUALES A CERO NOS LO VUELVE A PEDIR

var numero1 = parseInt(prompt("Introduce primer número", 0));
var numero2 = parseInt(prompt("Introduce segundo número", 0));

console.log(numero1, numero2);
// mientras el numero 1 y 2 sean 0 o menor O numero 1 y 2 no sean numeros (isNaN)
while (numero1 <= 0 || numero2 <= 0  || isNaN(numero1) || isNaN(numero2)) {
	numero1 = parseInt(prompt("Introduce primer número", 0));
	numero2 = parseInt(prompt("Introduce segundo número", 0));
}

if (numero1 < numero2) {
	alert(numero1 + " es menor que " + numero2);
} else if (numero1 == numero2) {
	alert("Los números son iguales");
} else if (numero1 > numero2) {
	alert(numero1 + " es mayor que " + numero2);
} else {
	alert("Introduce números, so payaso");
}
