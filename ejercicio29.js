//Escribe un programa que genere 5 números aleatorios entre 1 y 20 sin que se repitan y los muestre en pantalla.


function generarNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  let numeros = [];
  
  while (numeros.length < 5) {
    let numero = generarNumeroAleatorio(1, 20);
    
    if (!numeros.includes(numero)) {
      numeros.push(numero);  
    }
  }
  
  console.log("Los números ", numeros);
  