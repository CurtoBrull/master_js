"use strict";

// Eventos de ratón

// Evento load permite cargar lo que contiene después de que se cargue la página.
// permite cargar scripts en el HEAD en lugar del final del BODY

window.addEventListener("load", () => {
	// onclick - ondblclick

	// selecciona el id boton
	var boton = document.querySelector("#boton");

	// cambiamos el estilo de fondo si es verde a rojo y viceversa
	function cambiarColor() {
		var bg = boton.style.background;
		if (bg == "green") {
			boton.style.background = "red";
			boton.style.padding = "10px";
			boton.style.border = "5px solid green";
			boton.style.color = "white";
		} else {
			boton.style.background = "green";
			boton.style.padding = "10px";
			boton.style.border = "5px solid red";
			boton.style.color = "yellow";
		}
		return true;
	}

	// addEventListener

	// Click con callback

	boton.addEventListener("click", function () {
		cambiarColor();
	});

	// MouseOver

	boton.addEventListener("mouseover", function () {
		boton.style.background = "#ccc";
	});

	// MouseOut
	boton.addEventListener("mouseout", function () {
		boton.style.background = "transparent";
	});

	// Focus

	var input = document.querySelector("#campo_nombre");
	input.addEventListener("focus", function () {
		console.log("Focus dentro del input");
	});

	// Blur

	input.addEventListener("blur", function () {
		console.log("Blur al salir del input");
	});

	// KeyDown
	/*
input.addEventListener('keydown', function () {
  console.log('Estas pulsando teclas');
})
*/
	input.addEventListener("keydown", (event) => {
		input = event.key;
		console.log("Estás presionando la tecla : " + input);
	});

	// KeyPress deprecated usar KeyDown o beforeinput

	input.addEventListener("keypress", (event) => {
		input = event.key;
		console.log("[keypress] Estás presionando la tecla : " + input);
	});

	// KeyUp

	input.addEventListener("keyup", (event) => {
		input = event.key;
		console.log("Has soltando la tecla : " + input);
	});
}); // FIN DEL EVENTO LOAD
