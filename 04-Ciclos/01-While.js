// Ciclo While
// Nos permite repetir un camino una y otra vez mientras una condición sea verdadera.
// 1. La Inicialización: Una variable que sirva como punto de partida (un contador).
// 2. La Condición: La pregunta que decide si el ciclo continúa o se detiene.
// 3. El Incremento/Actualización: El paso donde modificamos la variable para que, eventualmente, la condición deje de cumplirse.
let contador = 0;

while (contador <= 5) {
    console.log('Vuelta número '+contador);

    contador ++;
}
console.log('¡Ciclo terminado');

// Contador regresivo
let lanzamiento = 10;

while ( lanzamiento >= 0) {
    console.log('Cuenta regresiva '+lanzamiento)
    lanzamiento --;
}
console.log('"¡Despegue¡🚀"');