'use strict'

// LET Y VAR

// PRUEBA CON VAR
// VAR es una variable global
var numero = 40;
console.log(numero); // Aqui 40

if (true) {
    var numero = 50;
    console.log(numero); // Aqui 50
}

console.log(numero); // Aqui 50

// PRUEBA CON LET

// LET es una variable local
// VAR es una variable global

var texto = "Curso JS";
console.log(texto);

if (true) {
    let texto = "Curso Laravel 5";
    console.log(texto);
}

console.log(texto);