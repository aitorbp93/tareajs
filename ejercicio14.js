//Solicita una frase al usuario y cuenta cuántas palabras tiene. Usa split() para separar las palabras y cuenta la longitud del array resultante.

let scanner = require('readline-sync');
let frase = scanner.question('¿Dime una frase?');
let palabras = frase.split(' ');
console.log(`La frase ${ frase } tiene ${ palabras.length } palabras `);