"use strict";

// Que diga si es par o impar
// 1. Ventana prompt
// 2. Si ponemos número no valido que lo pida de nuevo

var number = parseInt(prompt("Introduce número", 0));


while (isNaN(number)) {
    number = parseInt(prompt("Introduce número", 0));
}

if (number % 2 == 0) {
    alert(number+" es par.");
    
}else{
    alert(number+" es impar.")
}