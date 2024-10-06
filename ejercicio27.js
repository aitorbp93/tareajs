//Crea un programa donde el usuario ingrese el precio de varios productos y calcule el total a pagar con un 10% de descuento si la compra supera los 100 euros.

let scanner = require('readline-sync');

let total = 0;
let precio;

console.log("Introduce los precios de los productos pon 0 para salir:");

while (true) {
  precio = scanner.questionFloat("Precio del producto: ");
  
  if (precio === 0) {
    break;  
  }
  total += precio
}
console.log(`El total es: ${total.toFixed(2)} euros.`);

if (total > 100) {
  total *= 0.90; 
  console.log(`Se ha aplicado un 10% de descuento. El total es: ${total.toFixed(2)} euros.`);
} else {
  console.log(`No se aplica descuento. El total es: ${total.toFixed(2)} euros.`);
}
