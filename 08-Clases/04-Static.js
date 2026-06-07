class Persona {

    //Atributo estatico
    static contadorPersona = 0; //Atributo de nuestra clase.
    email = 'Valor default email'; // Atributo de nuestros objetos.

    static get MAX_OBJ() {
        return 5;
    }


    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        if(Persona.contadorPersona < Persona.MAX_OBJ) {
            this.idPersona = ++Persona.contadorPersona;
        } else {
            console.log('Se han superado el maximo de objetos permitidos');
        }
        
    }
    // Método estático
    static saludar() {
        return "¡Saludos desde el metodo static!";
    }
    static saludar2(persona){
        console.log(persona._nombre + ' ' + persona._apellido);
    }
    nombreCompleto() {
        return this.idPersona + ' ' + this._nombre + ' ' + this._apellido
    }
    //Sobreescribiendo el método de la clase padre
    toString() {
        //Se aplica polimorfismo (multiples formas en tiempo de ejecución)
        return this.nombreCompleto();
    }
}

let persona1 = new Persona('Pedro', 'Fernandez')

// ¡MIRA ESTO! No usamos 'new'. Llamamos directo a la Clase:
console.log( Persona.saludar() );
Persona.saludar2(persona1)


class Empleado extends Persona {
    constructor(nombre, apellido, departamento) {
        super(nombre, apellido);//LLamar al constructor de la clase padre
        this._departamento = departamento;
    }
}

//Tambien se hereda al hijo
let empleado1 = new Empleado('Maria', 'Jimenez', 'Sistemas');
console.log(Empleado.saludar());

Empleado.saludar2(empleado1);

//No podemos acceder a los atributos statico mendiante objetos
console.log(persona1.contadorObjetosPersona);

console.log(Persona.contadorObjetosPersona);
console.log(Empleado.contadorObjetosPersona);

console.log(persona1.email);
console.log(empleado1.email);

console.log(persona1.toString());
console.log(empleado1.toString());


console.log(Persona.MAX_OBJ);
Persona.MAX_OBJ = 10;
console.log(Persona.MAX_OBJ);