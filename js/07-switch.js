"use strict";

var edad = 7;
var imprime = "";

switch (edad) {
	case 18:
		imprime = "Acabas de cumplir la mayoría de edad";
		break;
	case 25:
		imprime = "Ya eres un adulto";
		break;
	case 40:
		imprime = "Cuarentón";
		break;
	case 75:
		imprime = "Ya eres un anciano";
		break;

	default:
		imprime = "Tu edad no me importa";
		break;
}

console.log(imprime);

