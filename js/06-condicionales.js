'use strict'

// CONDICIONAL IF
// Si a = b haz algo (=, <, >, <=...)
// Operadores Relacionales
// >
// <
// <=
// >=
// ==
// !=

var edad1 = 11;
var edad2 = 12;

if (edad1 > edad2) {
    console.log(edad1 + " es mayor que " + edad2);    
}else{
    console.log(edad1 + " es inferior a " + edad2);    
}

var edad = 21;
var nombre = "Javier Curto";

if (edad >= 18) {
    console.log(nombre+" tiene "+edad+" años, es mayor de edad.");

    if (edad > 29 && edad < 40) {
        console.log(nombre+" es treintañero");        
    }else if(edad == 20){
        console.log(nombre+ " tienes justo "+ edad+" años.");
        
    }
    else{
        console.log(nombre+" no eres treintañero");        
    }
    
} else {
    console.log(nombre+" tiene "+edad+" años, es menor.");
    
}

// OPERADORES LOGICOS
// Y--- && : AND
// O--- || : OR
// NO-- ! : NOT

// NEGACIÓN

var year = 2007;
if (year != 2016) {
    console.log("El año no es 2016, el año es "+ year);
    
}
if (year >= 2000 && year <= 2020) {
    console.log("Estamos en la era actual");
    
}else{
    console.log("Estamos en la era post moderna");
    
}

// AND

if (year >= 2000 && year <= 2020 && year != 2020) {
    console.log("Estamos en la era actual");
    
} else {
    console.log("Estamos en la era post moderna");
    
}

// OR

if (year == 2020 || (year >= 2010 && year ==  2100)) {
    console.log("El año acaba en 0");    
}else{
    console.log("Año no registrado");
    
}