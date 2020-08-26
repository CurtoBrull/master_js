'use strict'

// Eventos de ratón

// onclick - ondblclick

// selecciona el id boton
var boton = document.querySelector('#boton')

// cambiamos el estilo de fondo si es verde a rojo y viceversa
function cambiarColor() {
  var bg = boton.style.background
  if (bg == 'green') {
    boton.style.background = 'red'
    boton.style.padding = '10px'
    boton.style.border = '5px solid green'
    boton.style.color = 'white'
  } else {
    boton.style.background = 'green'
    boton.style.padding = '10px'
    boton.style.border = '5px solid red'
    boton.style.color = 'yellow'
  }
  return true
}