//Pide al usuario un número y muestra su tabla de multiplicar del 1 al 10 usando un bucle for

let scanner = require('readline-sync');
let num = scanner.question('¿Dime un numero?');
for (var i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + num * i);
}
