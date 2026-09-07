// Las Arrow Functions (o funciones flecha) son simplemente una forma moderna, 
// más corta y limpia de escribir funciones en JavaScript. Llegaron en la versión ES6 (2015).

//Funcion normal
function miFuncion(){
    console.log('Saludos desde mi función');
}

miFuncion();


// Función de flecha
// const miFuncionFlecha = () => {
//     console.log('Saludos desde mi función flecha');
// }

// miFuncionFlecha();

// const miFuncionFlecha = () => console.log('SAludos desde una linea en función de flecha');
// miFuncionFlecha();

// const saludar = () => {
//     return 'Saludos desde función flecha';
// }

// console.log(saludar());

const saludar = () => 'saludar.. ya con una sola linea de codigo';
console.log(saludar());

const regresarObjeto = () => ({nombre:'Juan', apellido: 'Lara'});
console.log(regresarObjeto());

//Recibir parametros
// const funcionConParametros = (mensaje) => console.log(mensaje);
const funcionConParametros = mensaje => console.log(mensaje);//COn un solo parametro
funcionConParametros('Saludos con parametros');

const funcionConVariosParametros = (op1, op2) => op1 + op2;
console.log(funcionConVariosParametros(3,5));