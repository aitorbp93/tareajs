/*Escribe un programa que pida un número al usuario y determine si es par o impar usando un condicional if-else.*/

var scanner = require('readline-sync');
let num = scanner.question('¿Dime un numero?');
if (num % 2 == 0) {
    console.log("Es par"); 
} else {
    console.log("Es impar"); 
}
