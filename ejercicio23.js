//Crea un programa que genere la secuencia de Fibonacci hasta el décimo término usando un bucle.

let n = 10;

let num1 = 0;
let num2 = 1;

console.log("Secuencia de Fibonacci hasta el décimo");

console.log(num1);  
console.log(num2);  

for (let i = 2; i < n; i++) {
  let siguienteNumero = num1 + num2;  
  console.log(siguienteNumero);  
  
  num1 = num2;  
  num2 = siguienteNumero;  
}
