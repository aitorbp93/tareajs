//Crea un programa que pida dos números y un operador (+, -, *, /) al usuario. Realiza la operación y muestra el resultado en la consola.

let scanner = require('readline-sync');
let num1 = scanner.question('¿Dime un numero?');
let num2 = scanner.question('¿Dime otro numero?');
let operador = scanner.question('¿Dime que operacion quieres hacer?');

let resultado = 0;
switch (operador) {
    case "+":   
        resultado = num1 + num2;
        break;  
    case "-":   
        resultado = num1 - num2;
        break;  
    case "*":   
        resultado = num1 * num2;
        break;  
    case "/":   
        resultado = num1 / num2;
        break;  
    default:
        console.log("Error");
        break;
}
console.log(`El resultado es ${ resultado }`);


