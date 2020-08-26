'use strict'

// BOM - Browser Object Model

// Ver tamaño ventana alto
function getBom() {
  console.log(window.innerHeight);
  console.log(window.innerWidth);  
}

getBom()

// ScreenWidth

function getScreen() {
  console.log(screen.height);
  console.log(screen.width);
}

getScreen()

// Sacar URL, protocolos, etc...

function getUrl() {
  console.log(window.location);
}
getUrl()

// funcion para redirigir a otra url

function redirect(url) {
  window.location.href =  url
}
// redirect('https://www.google.com')

// Abrir nueva pestaña de navegador

function abrirVentana(url2) {
  window.open(url2,"","width=400,height=400")
}
