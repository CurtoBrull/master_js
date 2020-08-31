'use strict'

// Local Storage: Guardar información y que persista durante la navegación

window.addEventListener('load', () => {
  // comprobamos si local storage esta soportado en el navegador
  if (typeof(Storage) !== 'undefined') {
    console.log('LocalStorage compatible');
  } else {
    console.log('LocalStorage NO compatible');    
  }

  // Guardar datos en Local Storage
  // Nombre + data
  localStorage.setItem('titulo', 'Curso de symfony')

  // Recuperar elementos

  console.log(localStorage.getItem('titulo'))

  document.querySelector('#peliculas').innerHTML = localStorage.getItem('titulo')

  // Guardar objetas. Se debe convertir el objeto en string o numero
  // stringify

  var usuario = {
    nombre: 'Javier Curto',
    email: 'curto.brull.javier@gmail.com',
    web: 'https://curtobrull.github.io/'
  }

  localStorage.setItem('usuario', JSON.stringify(usuario))

  // Recuperar objeto

  var userjs = JSON.parse(localStorage.getItem('usuario'))
  console.log(userjs);

  document.querySelector('#datos').append(`${userjs.web} - ${userjs.nombre}`)

  // Borrar memoria
  // Un elemento con removeItem
  localStorage.removeItem('usuario')

  // Borrar toda la memoria con clear

  localStorage.clear()


});