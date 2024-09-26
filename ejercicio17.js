//Pide al usuario un número y determina si es primo. Imprime un mensaje indicando si es primo o no.

let scanner = require('readline-sync');

let num = scanner.question("¿Dime un numero?");

if (num % 2 == 0 || num == 3) {
    console.log("Es primo");
} else {    
    console.log("No es primo");
}