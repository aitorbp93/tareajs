//Pide al usuario su fecha de nacimiento y calcula su edad actual. Usa la clase Date para realizar los cálculos.


let scanner = require('readline-sync');


function calcularEdad(fechaNacimiento) {
  const fechaActual = new Date();
  const nacimiento = new Date(fechaNacimiento);  
  
  let edad = fechaActual.getFullYear() - nacimiento.getFullYear();  
  const mes = fechaActual.getMonth() - nacimiento.getMonth();  
  
 
  if (mes < 0 || (mes === 0 && fechaActual.getDate() < nacimiento.getDate())) {
    edad--;
  }
  
  return edad;
}


let fechaNacimiento = scanner.question('Introduce tu fecha de nacimiento Año/Mes/Dia: ');


let edad = calcularEdad(fechaNacimiento);


console.log(`Tu edad actual es: ${edad} años.`);
