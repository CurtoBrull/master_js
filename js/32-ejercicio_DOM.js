'use strict'

window.addEventListener('load', () => {
  console.log('DOM cargado');

  var formulario = document.querySelector('#formulario')

  var box_dashed = document.querySelector('.dashed')

  box_dashed.style.display = 'none'

  formulario.addEventListener('submit', () => {
    console.log('Evento submit capturado');

    // variables donde cogemos el value de cada id
    var nombre = document.querySelector('#nombre').value
    var apellidos = document.querySelector('#apellidos').value
    var edad = document.querySelector('#edad').value

    // Validación formulario
    // trim() para que no haya valores vacios delante o detrás
    if (nombre.trim() == null || nombre.trim().length == 0 || !isNaN(nombre)) {
      alert('El nombre no es válido')
      document.querySelector('.error_nombre').innerHTML = 'Error en el nombre' // Inserta en el span el mensaje indicado si entra el error
      return false
    }else {
      document.querySelector('.error_nombre').style.display = 'none' // Oculta el span si no hay error
    }
    if (apellidos.trim() == null || apellidos.trim().length == 0 || !isNaN(apellidos) ) {
      alert('Los apellidos no son válidos')
      return false
    }
    if (edad.trim() == null || edad <= 0 || edad >= 130 || isNaN(edad)) {
      alert('La edad no es válida')
      return false
    }

    // cuando se haga submit aparecera la caja
    box_dashed.style.display = 'block'

    // Seleccionamos la id correspondiente y la etiqueta span
    var p_nombre = document.querySelector('#p_nombre span')
    var p_apellidos = document.querySelector('#p_apellidos span')
    var p_edad = document.querySelector('#p_edad span')

    // innerHTML devuelve o cambia contenido HTML
    p_nombre.innerHTML = nombre 
    p_apellidos.innerHTML = apellidos
    p_edad.innerHTML = edad

    /*
    // creamos array de los inputs
    var datos_usuario = [nombre, apellidos, edad]
    // creamos un elemento p y le hacemos un append del valor indice que corresponda tantas veces como valores tenga el array
    for (const indice in datos_usuario) { 
      var parrafo = document.createElement('p') // crea un elemento HTML p
      parrafo.append(datos_usuario[indice]) // luego le añade el valor que corresponda de la variable datos_usuario
      box_dashed.append(parrafo) // dentro de box_dashed crea la variable parrafo
    }
    */

  })



}) // Fin load