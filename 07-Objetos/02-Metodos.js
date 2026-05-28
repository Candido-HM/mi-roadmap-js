// Método Get y Set en Objetos

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang() {
        return this.idioma.toUpperCase();
    },
    set lang( lang ) {
        return this.idioma = lang.toUpperCase();
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido
    }
}

console.log(persona.nombreCompleto);

//Uso del método Set se usa para modificar los valores de los atributos del objeto
console.log(persona.lang);
persona.lang = 'en';
console.log(persona.idioma);