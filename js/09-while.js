'use strict'

// Bucle WHILE

var year = 2020;

while (year <= 2051) {
    console.log("Estamos en el año " + year);

    if (year == 2040) {
        break;
    }
    year++;    
}

while (year != 1989) {
    console.log("Vamos por el año "+ year);
    
    year--;
}

// DO WHILE

var years = 20;

do {
    alert("SOLO CUANDO SEA DIFERENTE A 20, vamos por el "+ years)
    years++;
    
} while (years != 25);

alert(years);