//Pide tres números al usuario y determina cuál es el mayor utilizando condicionales.

let scanner = require('readline-sync');

let num1 = scanner.question("¿Dime un numero?");
let num2 = scanner.question("¿Dime un numero?");
let num3 = scanner.question("¿Dime un numero?");

if(num1 > num2 && num2 > num3){
    console.log(`el numero ${num1} es mayor`);
}else if(num2 > num1 && num2 > num3){
    console.log(`el numero ${num2} es mayor`);
}else if(num3 > num1 && num3 > num2){
    console.log(`el numero ${num3} es mayor`);
}else{
    console.log(`los numeros ${num1}, ${num2} y ${num3} son iguales`);
}