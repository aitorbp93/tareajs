//Escribe un programa que pida un número al usuario y calcule su factorial utilizando un bucle while

let scanner = require('readline-sync');
let num = scanner.question('¿Dime un numero?');
let i = 1;  
let resultado = 1;

while (i <= num) {
    resultado = resultado * i;
    i++;
}

console.log("El factorial de " + num + " es " + resultado);