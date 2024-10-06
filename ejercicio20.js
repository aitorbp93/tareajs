//Crea una clase Tarea con atributos nombre y completada. Crea un array de tareas y añade métodos para agregar, completar y mostrar tareas pendientes o completadas.
let scanner = require('readline-sync');


class Tarea {
  constructor(nombre) {
    this.nombre = nombre;
    this.completada = false;  
  }

 
  completar() {
    this.completada = true;
  }
}


let listaTareas = [];

function agregarTarea() {
  let nombreTarea = scanner.question('Introduce que tarea tienes que hacer: ');
  const nuevaTarea = new Tarea(nombreTarea);
  listaTareas.push(nuevaTarea);
  console.log(`Tarea "${nombreTarea}" ha sido agregada.\n`);
}


function completarTarea() {
  mostrarTareas("pendientes");
  let i = scanner.questionInt('Introduce el número de la tarea que has completado: ');
  if (i >= 0 && i < listaTareas.length) {
    listaTareas[i].completar();
    console.log(`Tarea "${listaTareas[i].nombre}" ha sido completada.\n`);
  } else {
    console.log("Número de tarea no válido.\n");
  }
}


function mostrarTareas(pendientes) {
  if (pendientes === "pendientes") {
    console.log("Tareas pendientes:");
    listaTareas.forEach((tarea, i) => {
      if (!tarea.completada) {
        console.log(`${i}: ${tarea.nombre}`);
      }
    });
    console.log("");
  } else if (pendientes === "completadas") {
    console.log("Tareas completadas:");
    listaTareas.forEach((tarea, i) => {
      if (tarea.completada) {
        console.log(`${i}: ${tarea.nombre}`);
      }
    });
    console.log("");
  }
}


function mostrarMenu() {
  console.log("1. Agregar una tarea");
  console.log("2. Completar una tarea");
  console.log("3. Ver tareas pendientes");
  console.log("4. Ver tareas completadas");
  console.log("5. Salir");
  let opcion = scanner.questionInt("Elige una opcion: ");
  return opcion;
}


function ejecutar() {
  let salir = false;
  while (!salir) {
    let opcion = mostrarMenu();
    switch (opcion) {
      case 1:
        agregarTarea();
        break;
      case 2:
        completarTarea();
        break;
      case 3:
        mostrarTareas("pendientes");
        break;
      case 4:
        mostrarTareas("completadas");
        break;
      case 5:
        salir = true;
        console.log("Agur");
        break;
      default:
        console.log("Opción incorrecta");
    }
  }
}


ejecutar();
