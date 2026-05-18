// Arreglos en JavaScript
// es una estructura de datos que te permite guardar múltiples valores en una sola variable
let autosLegacy = new Array('Nissan', 'Volkswagen', 'Toyota'); // Es una sintaxis legacy.

// Actualmente se realiza
const autos = ['Nissan', 'Volkswagen', 'Toyota'];
console.log(autos);

// Acceder a los elementos:
console.log(autos[0]);
console.log(autos[2]);

// Recorrer los elementos del arreglo
for(let i = 0; i < autos.length; i++) {
    console.log(i + ' : ' + autos[i]);
}

//Modificar elemento del arreglo
autos[1] = 'Mercedes-Benz';
console.log(autos[1]);

// Añadir más elementos a un arreglo
autos.push('Porsche');
console.log(autos);

// Otra manera de agregar elementos a un arreglo
console.log(autos.length);
autos[autos.length] = 'Audi';
console.log(autos);

// Saber si es un arreglo
console.log( Array.isArray(autos));
console.log( autos instanceof Array);