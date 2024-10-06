//Pide al usuario su calificación y usa condicionales para determinar si aprobó o reprobó. Usa las siguientes reglas: ≥ 60 aprobado, < 60 reprobado.

let scanner = require('readline-sync');
let calif = scanner.question('¿Cual es tu calificación?');
if (calif >= 60) {  
    console.log("Aprobado");
} else {
    console.log("Suspenso");
}   