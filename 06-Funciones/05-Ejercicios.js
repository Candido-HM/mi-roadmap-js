// Más ejercicios sobre el uso de funciones
// El acumulador de Insumos
let presupuesto = calcularManoObra(45, 12, 12, 12, 25, 25);

function calcularManoObra() {
    let total = 0;
    for(let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}
console.log(`El costo del pedido de cera es la cantidad: ${presupuesto} pesos`);

//Ajuste de Precios Seguro (Paso por Valor)
let precioBaseCirio = 180;

function agregarDorado(precioBaseCirio) {
    
    costoDecorado = 60 + precioBaseCirio;
    return costoDecorado;
}
let costo = agregarDorado(precioBaseCirio);
console.log(precioBaseCirio);

//Actualización del Estatus de Entrega (Paso por Referencia)
const pedidoMayordomia = {
    parroquia: 'San Francisco',
    cantidad: 30,
    entregado: false
}

function registrarEntrega(pedido) {
    pedido.entregado = true
}
let statusPedido = registrarEntrega(pedidoMayordomia)
console.log(pedidoMayordomia);

// Filtro Rápido de Inventario (Función de Flecha =>)  EXTRA
const alturaCirios = [20, 50, 15, 60, 40, 25];

const esPremium = alturaCirios.filter(medida => medida > 30);
console.log(esPremium);