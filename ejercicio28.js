//Pide al usuario ingresar varias notas y calcula el notaMedia. Muestra si aprobó o reprobó basándose en el notaMedia calculado.

let scanner = require('readline-sync');

let notas = [];
let total = 0;
let nota;


console.log("Introduce tus notas. Escribe 0 cuando hayas terminado.");

while (true) {
  nota = scanner.questionFloat("Introduce una calificación: ");
  
  if (nota === 0) {
    break; 
  }

  notas.push(nota);  
}


for (let i = 0; i < notas.length; i++) {
  total += notas[i];
}


let notaMedia = total / notas.length;


console.log(`Tu nota media es: ${notaMedia.toFixed(2)}`);

if (notaMedia >= 60) {
  console.log("Has aprobado.");
} else {
  console.log("Has suspendido.");
}
