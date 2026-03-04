//  SECCIÓN 02: Tipo de datos

// Tipo string:
var nombre = "Candido";
console.log(nombre);
//Usar typeof nos indica el tipo de dato que contiene la variable
console.log(typeof nombre);

// Tipo number
var numero = 30;
console.log("El número es: "+numero)

// Tipo boolean (true, false)
var estado = false;
console.log(estado);

//Tipo undefined
var roadmap;
console.log(roadmap);

//Tipo null -> Ausencia de valor
var c = null;
console.log(c);

// Tipo empty - cadena vacía
var cadena = '';
console.log(cadena)

// Tipo objeto
var objeto = {
    nombre: "Candido",
    apellido: "Goméz",
    telefono: "9876543210"
}
console.log(objeto);

// Tipo array -> arreglo
var autos =  ['Audi', 'Volkswagen', 'Ferrari', 'Lamborghini'];
console.log(autos);

// Tipo de dato function -> más adelante se desarrollará el tema 
function miFuncion(){}
console.log(miFuncion);

//Tipo clase es igual function -> más adelante se desarrollará el tema 
class Persona {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona)

//Tipo de dato Symbol
var simbolo = Symbol("mi simbolo");
console.log(simbolo)
