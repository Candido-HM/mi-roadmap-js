
let resultado = sumarTodo(5, 4, 13, 10, 9, 10, 11);
console.log(resultado);

function sumarTodo() {
    let suma = 0;

    for(let i = 0; i < arguments.length; i++){
        suma += arguments[i] // suma = suma + arguments[i]
    }
    return suma;
}

// Paso por valor 
// Tipos primitivos
let x = 10;

function cambiarValor(a) {
    a = 20;
    // Está variable se destruye al finalizar la ejecución
}
cambiarValor(x);
// El valor 
console.log(x);
// console.log(a);// No esta definido

// Paso por Referencia
const persona = {
    nombre: 'Juan',
    apellido: 'Perez'
}

function cambiarValorObjeto(p1) {
    // Sobreescribimos
    p1.nombre = 'Carlos';
    p1.apellido = 'Lara';
}
// paso por referencia
cambiarValorObjeto( persona );
console.log(persona);
