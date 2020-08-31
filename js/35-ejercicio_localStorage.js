'use strict'

window.addEventListener('load', () => {

  var formulario = document.querySelector("#formPeliculas")

  formulario.addEventListener('submit', () =>{
    var titulo = document.querySelector('#addPelicula').value
    // si el titulo no está vacio guardar en localStorage
    if (titulo.length >= 1) {
      localStorage.setItem(titulo, titulo)      
    }
  })
  
  var ul = document.querySelector('#peliculas-list')
  
  for (const i in localStorage) {
    console.log(localStorage[i]);
    // si el contenido de localstorage es un string se hace el append
    if (typeof localStorage[i] == 'string') {
      var li = document.createElement('li')
      li.append(localStorage[i])
      ul.append(li)
    }
  }
  
  
  var formBorrar = document.querySelector("#formBorrarPeliculas")

  formBorrar.addEventListener('submit', () =>{
    var titulo = document.querySelector('#removePelicula').value
    // si el titulo no está vacio borrar en localStorage
    if (titulo.length >= 1) {
      localStorage.removeItem(titulo, titulo)      
    }
  })


});