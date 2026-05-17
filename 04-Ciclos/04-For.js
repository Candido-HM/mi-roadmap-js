// Ciclo For
/* Está diseñado específicamente para cuando sabes de antemano 
cuántas veces quieres que se repita un bloque de código.
for ( inicialización ; condición ; incremento ) {
    El código que se va a repetir
}
*/

for (let contador = 0; contador < 3; contador++) {
    console.log(contador);
}
console.log("Fin del ciclo for");


// Break -> nos permite finalizar el ciclo
for (let cont = 0; cont <= 10; cont++){
    if(cont % 2 == 0) {
        console.log(cont);
        // break;
    }
}
console.log("Valor encontrado");

// continue ->
for (let count = 0; count <= 10; count++){
    if(count % 2 !== 0) {
        console.log(count)
        continue;//Ir a la siguiente iteración
    } 
    console.log(count);
}