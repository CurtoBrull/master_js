var nombre = prompt('Introduce tu nombre')
var apellidos = prompt('Introduce tus apellidos')

// Con las `` podemos crear accesos directos a las variables con ${} y usar etiquetas HTML

var texto = `
		<h1>Mi nombre es ${nombre}.</h1>
		<h2>Mis apellidos son ${apellidos}</h2>
    <p>Hola que tal</p>
`
document.write(texto);
