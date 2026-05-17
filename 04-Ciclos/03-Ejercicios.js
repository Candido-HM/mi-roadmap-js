// Validador de contraseñar (Simulación) 
// Ejemplo con Do-While
const pinCorrecto = '1234';
let intentosUsuario = ['hello', '9999', '1234'];
let pinIntroduccion;
let contadorIntento = 0;

do {
    pinIntroduccion = intentosUsuario[contadorIntento];
    console.log(`Intento ${contadorIntento + 1}: El usuario ingreso: ${pinIntroduccion}`);

    contadorIntento++;

} while ( pinCorrecto !== pinIntroduccion);
console.log('Fin');


// Ejemplo con While mismo ejercicio 
let pinIntroduccionWhile = '';
let intentoWhile =  0;

while (pinCorrecto !== pinIntroduccionWhile) {
    pinIntroduccionWhile = intentosUsuario[intentoWhile];
    console.log(`Intento: ${ intentoWhile}: Contraseña ingresada: ${pinIntroduccionWhile}`);
    intentoWhile ++;
}
console.log("Acceso concedido!")

// Ejemplo el contador de Inventario
// Solución con While
let stockVelas = 3;

while (stockVelas > 0) {
    console.log(`Vela vendida.Stock restante: ${stockVelas}`);
    stockVelas --;
}
console.log("Sin stock en velas");

//Solución con Do-While
let stockVelasWhile = 3;
do {
    console.log(`Vela vendida.Stock restante: ${stockVelasWhile}`);
    stockVelasWhile --;

    if(stockVelasWhile < -2) break;
} while (stockVelasWhile > 0);

console.log("Stock terminado! :)");