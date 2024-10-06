//Crea una matriz que simule un sistema de reservas de asientos en un teatro. Permite al usuario reservar, cancelar y ver el estado de los asientos.

let scanner = require('readline-sync');

let teatro = [
  ['L', 'L', 'L', 'L', 'L'],
  ['L', 'L', 'L', 'L', 'L'],
  ['L', 'L', 'L', 'L', 'L'],
  ['L', 'L', 'L', 'L', 'L'],
  ['L', 'L', 'L', 'L', 'L']
];

function mostrarAsientos() {
  console.log("Estado actual de los asientos (L: Libre, R: Reservado):");
  teatro.forEach((fila, indiceFila) => {
    let filaStr = `Fila ${indiceFila + 1}: `;
    fila.forEach(asiento => {
      filaStr += asiento + ' ';
    });
    console.log(filaStr.trim());
  });
  console.log("");
}

function reservarAsiento() {
  let fila = scanner.questionInt("Introduce el número de fila (1-5): ") - 1;
  let columna = scanner.questionInt("Introduce el número de asiento (1-5): ") - 1;

  if (teatro[fila][columna] === 'L') {
    teatro[fila][columna] = 'R';  
    console.log("¡Reserva exitosa!\n");
  } else {
    console.log("Ese asiento ya está reservado.\n");
  }
}

function cancelarReserva() {
  let fila = scanner.questionInt("Introduce el número de fila (1-5): ") - 1;
  let columna = scanner.questionInt("Introduce el número de asiento (1-5): ") - 1;

  if (teatro[fila][columna] === 'R') {
    teatro[fila][columna] = 'L';  
    console.log("Reserva cancelada.\n");
  } else {
    console.log("Ese asiento no está reservado.\n");
  }
}

function mostrarMenu() {
  console.log("1. Ver asientos");
  console.log("2. Reservar asiento");
  console.log("3. Cancelar reserva");
  console.log("4. Salir");
  let opcion = scanner.questionInt("Elige una opción: ");
  return opcion;
}


function ejecutarPrograma() {
  let salir = false;
  
  while (!salir) {
    let opcion = mostrarMenu();
    
    switch (opcion) {
      case 1:
        mostrarAsientos();
        break;
      case 2:
        reservarAsiento();
        break;
      case 3:
        cancelarReserva();
        break;
      case 4:
        salir = true;
        console.log("Saliendo del programa...");
        break;
      default:
        console.log("Opción no válida. Inténtalo de nuevo.");
    }
  }
}


ejecutarPrograma();
