"use strict";

// 1. Una función simple que devuelve una promesa que tarda 2 segundos
const obtenerCostoCera = () => {
    return new Promise((resolver) => {
        setTimeout(() => {
            resolver(150); // Devuelve el número 150 tras 2 segundos
        }, 2000);
    });
};

// 2. Función principal usando async/await
async function calcularPresupuesto() {
    console.log("⏳ Consultando precio de la cera...");

    // Usa 'await' para esperar el número:
    let precio = await obtenerCostoCera();

    console.log(`✨ El precio recibido fue: $${precio}`);
    console.log(`💡 El total por 2 kilos es: $${precio * 2}`);
}
    
// calcularPresupuesto(); 

// Ejercicio
const obtenerTiempoSecado = () => {
    return new Promise ((resolver) => {
        setTimeout(() => {
            resolver("3 horas")
        }, 3000);
    });
};

async function monitorearTaller() {
    console.log('Calculando tiempo de secado del lote.....');
    let tiempo = await obtenerTiempoSecado();
    console.log(`El tiempo es de ${tiempo}`);
}

monitorearTaller(); 

