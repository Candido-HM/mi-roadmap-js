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

// Ejercicio -> El Filtro de Alertas
const medidasCirios = [10, 7.5, 9, 6.8, 11];

for (let cirios = 0; cirios < medidasCirios.length; cirios++) {
    let medida = medidasCirios[cirios];
    // console.log(`medias cirios: ${medida}`);
    //aqui va ir un if else para validar medidas
    if ( medida < 8) {
        console.log(`Alerta: Cirio de ${medida}cm no pasa el control de calidad.`)
    } else {
        console.log(`Cirio de ${medida}cm aprobado`);
    }
}

// Ejercicio el contador de capital
const costos = [150, 45, 80, 210];
let totalGastado = 0;

for (let c = 0; c < costos.length; c++) {
    // totalGastado = totalGastado + costos[c];
    totalGastado += costos[c];
}
console.log(`El gasto total de la semana fue de: ${totalGastado}`);