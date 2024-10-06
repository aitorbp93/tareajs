//Crea una clase Libro con atributos título, autor y año. Añade métodos para mostrar la información del libro y gestionar una biblioteca añadiendo, eliminando y mostrando libros.


let scanner = require('readline-sync');

class Libro {
  constructor(titulo, autor, año) {
    this.titulo = titulo;
    this.autor = autor;
    this.año = año;
  }

  ro
  mostrarInformacion() {
    return `${this.titulo} escrito por ${this.autor} en el año ${this.año}`;
  }
}


let biblioteca = [];


function aniadirLibro() {
  let titulo = scanner.question("Introduce el título del libro: ");
  let autor = scanner.question("Introduce el autor del libro: ");
  let año = scanner.questionInt("Introduce el año de publicación del libro: ");
  
  
  let nuevoLibro = new Libro(titulo, autor, año);
  
  
  biblioteca.push(nuevoLibro);
  console.log(`El libro "${titulo}" ha sido añadido a la biblioteca.\n`);
}

function eliminarLibro() {
  let titulo = scanner.question("Introduce el título del libro que deseas eliminar: ");
  
 
  let indice = biblioteca.findIndex(libro => libro.titulo === titulo);
  
  if (indice !== -1) {
    biblioteca.splice(indice, 1);  
    console.log(`El libro "${titulo}" ha sido eliminado de la biblioteca.\n`);
  } else {
    console.log(`El libro "${titulo}" no se encuentra en la biblioteca.\n`);
  }
}

function mostrarBiblioteca() {
  if (biblioteca.length === 0) {
    console.log("La biblioteca está vacía.\n");
  } else {
    console.log("Libros en la biblioteca:");
    biblioteca.forEach((libro, index) => {
      console.log(`${index + 1}. ${libro.mostrarInformacion()}`);
    });
    console.log("");  
  }
}


function mostrarMenu() {
  console.log("1. Añadir un libro");
  console.log("2. Eliminar un libro");
  console.log("3. Mostrar la biblioteca");
  console.log("4. Salir");
  let opcion = scanner.questionInt("Elige una opción: ");
  return opcion;
}


function programa() {
  let salir = false;
  
  while (!salir) {
    let opcion = mostrarMenu();
    
    switch (opcion) {
      case 1:
        aniadirLibro();
        break;
      case 2:
        eliminarLibro();
        break;
      case 3:
        mostrarBiblioteca();
        break;
      case 4:
        salir = true;
        console.log("Agur.");
        break;
      default:
        console.log("Opción incorrecta.");
    }
  }
}


programa();
