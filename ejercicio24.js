//Crea un array con números desordenados y escribe un programa que los ordene de menor a mayor sin usar el método .sort().

let numeros = [5, 3, 8, 4, 2, 7, 1, 10, 6, 9];

function ordenarArray(arr) {
  let longitud = arr.length;
  
  for (let i = 0; i < longitud; i++) {
    for (let j = 0; j < longitud - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;  
}

console.log("Array original:", numeros);

let arrayOrdenado = ordenarArray(numeros);

console.log("Array ordenado:", arrayOrdenado);
