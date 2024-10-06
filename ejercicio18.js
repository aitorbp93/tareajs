//Crea una clase Círculo con un atributo radio. Añade un método para calcular el área del círculo. Instancia la clase y muestra el área en la consola.
class Circulo {
    constructor(radio) {
        this.radio = radio;
    }
    area() {
        return Math.pow(this.radio, 2) * Math.PI;
    }
}
let circulo = new Circulo(5);
console.log(circulo.area());