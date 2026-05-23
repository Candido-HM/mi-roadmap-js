// Funciones
// Bloques de código reutilizables diseñados para realizar una tarea especifica
// y se puede utilizar la veces que sea necesario

function miFuncion (a, b) {
    // console.log(`Suma: ${a + b}`);
    console.log(arguments.length); // Nos regresa el valor de los argumentos
    return a + b;
}
// Se manda a llamar la función para que se ejecute
let resultado = miFuncion(2,3);

console.log(`Suma: ${resultado}`);

//Funciones de tipo expresion
let sumar = function (a, b) {return a + b;};
resultado = sumar(1, 2);
console.log(`Suma: ${resultado}`);

// Funciones Self Invoking -> Funciones que se llaman por si mismo
(function (a, b) {
    console.log("Ejecutando la función: " + (a + b));
})(3, 4);

var miFuncionTexto = miFuncion.toString();
console.log(miFuncionTexto);