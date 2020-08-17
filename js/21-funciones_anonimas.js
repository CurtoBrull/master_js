'use strict'

// FUNCIONES ANÓNIMAS
// Función sin nombre

var pelicula = function (nombre){
    return `La película es: ${nombre}`;
}

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;

    sumaYmuestra(sumar);
    sumaPorDos(sumar)
    return sumar;
}

// En lugar de poner function se puede poner el nombre y flecha =>
sumame(5, 5, dato => {
    console.log('LA suma es:', dato);
},
dato => {
    console.log('La suma por 2 es:', (dato*2));
});
