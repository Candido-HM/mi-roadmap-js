'use strict';

// 1. SWITCH: Clasificador de Pedidos
function procesarTipoVela(opcion) {
 let tipo = "";

 switch(opcion) {
    case 1:
        tipo = "Cirio Pascual";
        break;
    case 2:
        tipo = "Vela Bautizo";
        break;
    case 3:
        tipo = "Mini Cirio";
        break;
    default:
        tipo = "Vela Genérica";
        break;
 }

 return tipo;
}

let tipoVela1 = procesarTipoVela(3);
console.log(tipoVela1);

// 2. WHILE: Calentando la cera
function derretirCera(kilos) {
    console.log(`Iniciando fundición de ${kilos} kilos de cera...............`);
    while (kilos > 0){
        console.log(`Derritiendo quedan ${kilos} kilos de cera.........`);
        kilos --;
    }
    console.log('Toda la cera ha sido derretida');
}


let fundiendoCera1 = derretirCera(2);

// 3. DO...WHILE: Empaquetado obligatorio
function empaquetarVelas(cantidad) {
    console.log('Iniciando empaquetado de pedidos');
    let empacadas = 0;

    do {
        empacadas++;
        console.log(`Empaquetando velas.....${empacadas}`);
    } while (empacadas < cantidad);
    
    console.log(`Total de velas empacadas ${empacadas}`);
}

let empacarVelas1 = empaquetarVelas(2);