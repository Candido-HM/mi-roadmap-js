
class Persona {
    static contadorPersonas = 0;

    constructor( nombre, apellido, edad) {
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get idPersona() {
        return this._idPersona;
    }
    
    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        return this._nombre = nombre;
    }

    get apellido() {
        return this._apellido;
    }
    
    set apellido(apellido) {
        return this._apellido = apellido;
    }

    get edad() {
        return this._edad;
    }

    set edad(edad) {
        return this._edad = edad;
    }

    toString() {
        return `${this._idPersona}: ${this._nombre} ${this._apellido} Edad:${this._edad}`;
    }
}

class Empleado extends Persona {
    static contadorEmpleados = 0;

    constructor( nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad);
        this._sueldo = sueldo;
        this._idEmpleado = ++Empleado.contadorEmpleados;
    }
    
    get idEmpleado() {
        return this._idEmpleado;
    }

    get sueldo() {
        return this._sueldo;
    }

    set sueldo(sueldo) {
        return this._sueldo = sueldo;
    }

    toString() {
        return `${super.toString()} Empleado:${this._idEmpleado} Sueldo:${this._sueldo}`
    }
}

class Cliente extends Persona {
    static contadorClientes = 0;

    constructor(nombre, apellido, edad, fechaRegistro) {
        super(nombre, apellido, edad);
        this._fechaRegistro = new Date(fechaRegistro);
        this._idCliente = ++Cliente.contadorClientes;
    }

    get idCliente() {
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro) {
        return this._fechaRegistro = new Date(fechaRegistro);
    }

    toString() {
        return `${super.toString()} N.Cliente:${this._idCliente} Fecha Registro:${this._fechaRegistro}`
    }
}

let persona1 = new Persona('Carlos', 'Ramirez', 25);
let persona2 = new Persona('Karla', 'Gomez', 20);
let empleado1 = new Empleado('Juan', 'Perez', 18, 2500);
let cliente1 = new Cliente('Rafael', 'Lara', 35, '2020-06-17T00:00:00');
let cliente2 = new Cliente('Miguel', 'Cervantes', 48, new Date());
console.log(Persona.contadorPersonas);
console.log(persona1.toString());
console.log(persona2.toString());
console.log(empleado1.toString());
console.log(cliente1.toString());
console.log(cliente2.toString());