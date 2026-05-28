// Función constructor de tipo Persona
function Persona(nombre, apellido, email) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function() {
        return this.nombre + ' ' + this.apellido
    }
}

//Agregar propiedad a todos los objetos
Persona.prototype.tel = '9876543210';

let padre = new Persona('Juan', 'Perez', 'jperez@mail.com');
//Modificamos el valor original de  tel
padre.tel = '6549873210';
console.log(padre);
console.log(padre.nombreCompleto());

let madre = new Persona('Laura', 'Quintero', 'lquintero@gmail.com');
console.log(madre);
console.log(madre.nombreCompleto());

padre.nombre = 'carlos';
// console.log(padre, madre);

// Maneras de crear objetos
let miObjeto = new Object(); //No es requerido
let miObjeto2 = {} // Es mas recomendable

let miCadena1 = new String('Hola');
let miCadena2 = 'Hola'; // Es la más recomendable

let miNumero = new Number(1);
let miNumero2 = 1; // Es la más recomendable

let miBoolean = new Boolean(false);
let miBoolean2 = false; //Es la más recomendable

let miArreglo1 = new Array();
let miArreglo2 = []; // Es la más recomendable

let miFuncion = new Function();
let miFuncion2 = function(){ }; //Es la más recomendable

