// 02: Declaración de variables

// Forma antigua(no es recomendable)
var nombre = "Candido"; 

//  Forma actual de declarar variables
let name = "Juan";
console.log(name); 

// Forma de declarar valores fijos
const pais = "México";
// pais = "España";  No se puede reasignar

//Mejores practicas para declarar variable
let nombreCompleto = "Guillermo Torres";

let x, y;
x = 12; 
y = 25;
let z = x + y;
console.log(z);

// Las variables no pueden comenzar con un número
// let 1nombre = "candido";

// 3 opciones de como podria comenzar el nombre de una variable
let a1nombre;
let _nombre;
let $nombre;

// Ademas de usar palabras reservadas del propio lenguaje
// Aqui dejo el listado de algunos: break, return, function, new, this, continue, finally, etc.
// let finally = false; //-> Ejemplo al querer usar alguna palabra reservada.