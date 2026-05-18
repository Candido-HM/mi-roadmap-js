// Ejercicios Arreglos
const materiales = [ 'Cera', 'Pabilos', 'moldes'];
//Modificamos el segundo elemento
materiales[1] = 'Pabilo de Algodón';

//Agregamos otro elemento al arreglo
materiales.push('Esencias Aromáticas');

/* Escribe un ciclo que recorra el arreglo e imprima en consola un mensaje personalizado 
por cada material*/
for (let i = 0; i < materiales.length; i++) {
    console.log(`Material necesario: ${materiales[i]}`);
}