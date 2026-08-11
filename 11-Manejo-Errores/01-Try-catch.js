'use strict';

try{
    let y = 20;//No genera un ningun error
    // x = 10;
    // miFunction();
    // throw 'Mi error';
} catch(error) {
    console.log(error);
}
finally {
    console.log('Termina la revisión de errores');
}

console.log('Continuamos.......');

// Cláusula throws
//Para lanzar una excepción. Cuando lanza una excepción, expresion especifica el valor de la excepción. 

let resultado = 'Hola';

try {
    if (isNaN(resultado)) throw new Error('No es un número');
    else if (resultado === '') throw 'Es una cadena vacía'
    else if (resultado >= 0) throw 'Valor positivo';
    else if (resultado < 0) throw 'Valor negativo';
} 
catch(error) {
    console.log(error);
    console.log(error.name);
    console.log(error.message);
}
finally {
    console.log('Termina revisión de errores');
}
