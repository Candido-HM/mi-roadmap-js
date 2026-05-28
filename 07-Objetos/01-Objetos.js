// Objetos en js
/* Es una colección de datos relacionados y/o funcionalidades. 
Se estructura mediante pares de clave: valor, donde las claves (o llaves) son nombres únicos 
y los valores pueden ser cualquier tipo de dato (números, strings, arreglos, 
e incluso otros objetos o funciones). */

let persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    email: 'jperez@gmail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    }
}
//Podemos acceder a cada uno de sus propiedades
console.log(persona.nombre);
console.log(persona.edad);
console.log(persona);
//Accdemos a la funcion dentro del objeto
console.log(persona.nombreCompleto());

// Otra manera para acceder a las propiedades
console.log(persona['apellido']);

//for in
//Acceder a los valores de los propiedades del objeto
for(nombrePropiedad in persona ){
    console.log(nombrePropiedad);
    console.log(persona[nombrePropiedad])
};

//Agregar una nueva propiedad
persona.tel = '6549871230';
console.log(persona);

//Eliminar un propiedad
delete persona.tel;
console.log(persona);

//Otra manera de crear objetos y agregar propiedades
let persona2 = new Object();
persona2.nombre = 'Carlos';
persona2.direccion = 'Saturno 15';
persona2.telefono = '9876543210';

console.log(persona2.telefono);

// Maneras de imprimir objetos
//Concatenar cada valor de cada propiedad
console.log(persona.nombre + ', ' + persona.apellido);

//Usar for in
for( propiedad in persona) {
    console.log(persona[propiedad]);
}

let personaArray = Object.values(persona);
console.log(personaArray);


let personaString = JSON.stringify(persona);
console.log(personaString);