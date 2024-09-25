//Solicita al usuario una cadena de texto y cuenta cuántas vocales tiene. Imprime el resultado en la consola.

let scanner = require('readline-sync');
let cadena = scanner.question('¿Dime una cadena de texto?');

let vocales = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'];
let resultado = 0;

for (let i = 0; i < cadena.length; i++) {
    if (vocales.includes(cadena[i])) {
        resultado++;    
    }
}
console.log(`La cadena ${ cadena } tiene ${ resultado } vocales `);