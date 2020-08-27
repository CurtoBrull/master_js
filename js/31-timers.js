"use strict";

window.addEventListener("load", () => {
	// Timers
	// SetInterval se ejecuta cada intervalo indicado

	function intervalo() {
		var tiempo = setInterval(function () {
			console.log("SetInterval ejecutado");
			var encabezado = document.querySelector("h1");
			if (encabezado.style.fontSize == "50px") {
				encabezado.style.fontSize = "20px";
			} else {
				encabezado.style.fontSize = "50px";
			}
		}, 1000);
		return tiempo;
	}
	var tiempo = intervalo();

	// SetTimeout se ejecuta al finalizar la cuenta atrás
	var tiempo2 = setTimeout(function () {
		console.log("SetTimeout ejecutado");
		var encabezado2 = document.querySelector("h2");
		if (encabezado2.style.fontSize == "50px") {
			encabezado2.style.fontSize = "20px";
		} else {
			encabezado2.style.fontSize = "50px";
		}
	}, 1000);

	var stop = document.querySelector("#stop");

	stop.addEventListener("click", () => {
		// ClearInterval elimina el setinterval de la variable indicada
		clearInterval(tiempo);
		alert("ClearInterval ejecutado");
	});

	var start = document.querySelector("#start");

	start.addEventListener("click", () => {
		alert("SetInterval ejecutado");
		tiempo = intervalo();
	});
});
