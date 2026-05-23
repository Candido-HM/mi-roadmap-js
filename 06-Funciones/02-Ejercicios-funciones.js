//Ejercicios funciones
// La Máquina Etiquetadora
function generarEtiqueta(producto, cantidad) {
    return `Pedido: ${cantidad} unidades de ${producto}. Listo para envío.`;
}

let etiqueta =  generarEtiqueta('Cirio grande', 5);
console.log(etiqueta);

// El Calculador de Cera
const calcularCeraNecesaria = function(velasAFabricar) {
    let gramosCera = 35;
    return gramosCera * velasAFabricar;
}
const resultado = calcularCeraNecesaria(12);
console.log(`Para este lote necesitas: ${resultado} gramos de cera.`);