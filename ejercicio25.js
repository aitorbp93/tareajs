//Crea un juego donde la máquina elija un número aleatorio entre 1 y 100. El usuario debe adivinarlo con pistas como “mayor” o “menor” hasta acertar.
let scanner = require('readline-sync');

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

let jugador;

console.log("Intenta adivinar el número del 1 al 100.");

do {
  jugador = scanner.questionInt("Di un número: ");

  if (jugador < numeroAleatorio) {
    console.log("El número es mayor.");
  } else if (jugador > numeroAleatorio) {
    console.log("El número es menor.");
  } else {
    console.log(`Correcto el númer es ${numeroAleatorio}.`);
  }
} while (jugador !== numeroAleatorio);  
