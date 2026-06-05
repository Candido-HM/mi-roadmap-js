
// No es posible crear objetos antes de declarar la clase, no se aplica el concepto de Hoisting
// let persona2 = new Persona('karla', 'Juarez');

class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }
}

// Una vez definida la clase ya se pueden crear objetos
let persona1 = new Persona('Juan', 'Perez');
// console.log(persona1);
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);

