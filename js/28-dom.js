"use strict";

// DOM - Document Object Model

function cambiaColor(color) {
	caja.style.background = color;
}

// var caja = document.getElementById("micaja")
var caja = document.querySelector("#micaja");

// innerHTML selecciona el HTML y permite asignar un nuevo contenido
caja.innerHTML = "¡TEXTO EN CAJA DESDE JS!";
caja.style.background = "red";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola hola2";

console.log(caja);

// Conseguir elementos por su etiqueta
// getElementsByTagName los añade a un NodeList
var todosLosDivs = document.getElementsByTagName('div')

// textContent muestra el contenido
var contenidoEnTexto = todosLosDivs[2].textContent

var contenidoEnTexto2 = todosLosDivs[2];
contenidoEnTexto2.innerHTML = 'Otro Texto para el segundo div'

console.log(todosLosDivs);
console.log(contenidoEnTexto);
console.log(contenidoEnTexto2);

// Funcion con createElements
var seccion =  document.querySelector('#miseccion')

// se crea un hr 
var hr = document.createElement('hr')


var valor;
for (valor in todosLosDivs){
    if(typeof todosLosDivs[valor].textContent == 'string'){
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}
// y se añade antes de seccion en el html
seccion.append(hr)

// Seleccionar por clase getElementsByClassName y se añaden a un HTML collection

var divsRojos = document.getElementsByClassName('rojo')
var divsAmarillos = document.getElementsByClassName('amarillo')

/*
modificar solo esos elementos cambiando estilos
for in donde creamos una variable en divsRojos para poder seleccionarlos todos
if donde comprobamos que la clase sea exactamente "rojo"
*/
var div
for (div in divsRojos) {
	if (divsRojos[div].className == "rojo") {
		divsRojos[div].style.background = 'red'
	}
}
divsAmarillos[0].style.background = 'yellow'

console.log(divsRojos);
console.log(divsAmarillos);


// querySelector

var id = document.querySelector('#encabezado')
console.log(id);

// querySelectorAll

var claseRojo = document.querySelectorAll('.rojo')
console.log(claseRojo);