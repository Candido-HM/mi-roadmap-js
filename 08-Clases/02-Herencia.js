//Se puede reutilizar codigo y heredar caracteristicas desde una clase padre a un hijo

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

    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        return this._apellido = apellido;
    }

    nombreCompleto() {
        return this._nombre + ' ' + this._apellido
    }
    //Sobreescribiendo el método de la clase padre
    toString() {
        //Se aplica polimorfismo (multiples formas en tiempo de ejecución)
        return this.nombreCompleto();
    }

}

class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);//LLamar al constructor de la clase padre
        this._departamento = departamento;
    }
    
    get departamento() {
        return this._departamento;
    }

    set departamento(departamento) {
        return this._departamento = departamento;
    }

    // Sobreescritura
    nombreCompleto() {
        return super.nombreCompleto() + ', ' + this._departamento;
    }
}

let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());

let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto()); //Accedemos al método heredado desde la clase padre

console.log(empleado1.toString())