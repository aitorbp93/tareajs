//Escribe un programa que tome una cadena ingresada por el usuario e imprima la cadena invertida.

let scanner = require('readline-sync');

let frase = scanner.question("¿Dime una frase?");

for (let i = frase.length - 1; i >= 0; i--) {
    console.log(frase[i]);
}

