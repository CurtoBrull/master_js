/* Muestre numeros entre 2 numeros introducidos por el usuario */

var num1 = parseInt(prompt('Introduce numero 1'))
var num2 = parseInt(prompt('Introduce numero 2'))

//20 < 40, i = 20 + 1, mientras i sea menor a 40 imprime i y suma 1 a la var i
if (num1 < num2) {
  for (let i = num1 + 1; i < num2; i++) {
    document.write(i + "</br>");  
  }
// 40 > 20, i = 40 - 1, mientras i sea mayor a 40 imprime i y resta 1 a la var i
}else {
  for (let i = num1 - 1; i > num2; i--) {
    document.write(i + "</br>");   
  }  
}

// Mostrar los impares entre 2 numeros introducidos

var num1 = parseInt(prompt('Introduce numero 1'))
var num2 = parseInt(prompt('Introduce numero 2'))

if (num1 < num2) {
  for (let i = num1 + 1; i < num2; i++) {
    if (i % 2 != 0) {
    document.write(i + "</br>");  }
  }
} else {
  for (let i = num1 - 1; i > num2; i--) {
    if (i % 2 != 0) {
    document.write(i + "</br>");
    }
  }
}

// Mostrar todos los numeros divisores de un numero introducido
// Un numero es divisor cuando al dividirlo por si mismo es = 0

var num = parseInt(prompt('Introduce numero'))

for (let i = 0; i <= num; i++) {
  if (num % i == 0) {
    console.log(`Divisor: ${i}`);
  }
}

// Numero par o impar
/*
ventana promt que pida numero
si no es valido volver a pedir
mostrar par o impar
*/

var num = parseInt(prompt('Introduce numero'))

while (isNaN(num)) {
  num = parseInt(prompt('Introduce numero'))
}

if (num % 2 == 0) {
  console.log(`El numero ${num} es par`);
} else {
  console.log(`El numero ${num} es impar`);
}

// Tabla de multiplicar de un numero introducido

var num = parseInt(prompt('Introduce numero de la tabla'))
while (isNaN(num)) {
  num = parseInt(prompt('Introduce numero'))
}
document.write(`Tabla del ${num}` + `</br>`);
for (let i = 0; i <= 10 ; i++) {
  document.write(`${num} x ${i} = ${num * i}` + `</br>` );
}

// Calculadora
// Pida 2 numeros correctos
// En el cuerpo de la pagina en una alerta y consola el resultado de sumar restar multiplicar y dividir

var num = parseInt(prompt('Introduce primer numero'))
var num2 = parseInt(prompt('Introduce segundo numero'))

while (isNaN(num) || isNaN(num2)) {
  num = parseInt(prompt('Introduce primer numero'))
  num2 = parseInt(prompt('Introduce segundo numero'))
}
var suma = num + num2
var resta = num - num2
var multi = num * num2
var division = num / num2

alert(`${num} + ${num2} = `+ suma + '\n' + `${num} - ${num2} = ` + resta + '\n' + `${num} x ${num2} = ` + multi + '\n' +  `${num} / ${num2} = ` + division)

console.log(`${num} + ${num2} = `+ suma + '\n' + `${num} - ${num2} = ` + resta + '\n' + `${num} x ${num2} = ` + multi + '\n' +  `${num} / ${num2} = ` + division)



