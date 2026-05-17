// Ciclo do-while
/* Primero se ejecuta el código que está dentro del bloque do, 
y al final se revisa la condición en el while. Esto garantiza que tu código 
se va a ejecutar al menos una vez, sin importar si la condición es verdadera o falsa.*/

let contador = 0;

do {
    console.log(contador);
    contador++;
} while (contador < 3);

console.log("Fin ciclo while");