//Crea una función que genere contraseñas aleatorias de longitud n usando caracteres alfanuméricos. Pide al usuario la longitud de la contraseña y genera una.


let scanner = require('readline-sync');


function generarContrasena(longitud) {
  const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let contrasena = '';
  
  for (let i = 0; i < longitud; i++) {
    const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
    contrasena += caracteres.charAt(indiceAleatorio);
  }
  
  return contrasena;
}


let longitud = scanner.questionInt('¿De qué longitud quieres la contraseña?: ');


let contrasenaGenerada = generarContrasena(longitud);
console.log(`Tu contraseña generada es: ${contrasenaGenerada}`);
