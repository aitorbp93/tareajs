/*Pide al usuario un número y verifica si es mayor o menor que 10. Muestra un mensaje indicando el resultado.*/

var scanner = require('readline-sync');
let num = scanner.question('¿Dime un numero?');

if (num > 10) {
    console.log("Es mayor que 10");
} else {
    console.log("Es menor que 10"); 
}

