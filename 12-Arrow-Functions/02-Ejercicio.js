// Ejercicios Arrow Functions

const crearVela = (nombre, precio) => ({producto: nombre, costo: precio});

const minutosASegundos = minutos => minutos * 60;

console.log(crearVela('Cirio Pascual', 250));
console.log(`Duración:${minutosASegundos(4)} segundos`);