'use strict'

// FUNCIONES ANÓNIMAS
// Función sin nombre

var pelicula = function (nombre){
    return `La película es: ${nombre}`;
}

function sumame(numero1, numero2, sumaYmuestra, sumaPorDos) {
    var sumar = numero1 + numero2;
    // coje la variable sumar que suma 5 + 5 y lo pasa por consola
    sumaYmuestra(sumar);
    // coje la variable sumar y la multiplica * 2
    sumaPorDos(sumar)
    return sumar;
}

// CALLBACK funcion que se pasa como parámetro a otra funcion.

// En lugar de poner function se puede poner el nombre y flecha =>

sumame(5, 5, dato => {
    console.log('LA suma es:', dato);
},
dato => {
    console.log('La suma por 2 es:', (dato * 2));
});