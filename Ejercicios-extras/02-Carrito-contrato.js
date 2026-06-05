
const pedidoCliente = {
    nombreCliente: 'Mayordomia San Juan',
    productos: [
        {
            nombre: 'Cirios grandes',
            precio: 500,
            cantidad: 2
        },
        {
            nombre: 'Velas medianas',
            precio: 150,
            cantidad: 5
        },
        {
            nombre: 'Velas chicas',
            precio: 40,
            cantidad: 10
        }
    ]
}

let detalleProducto = pedidoCliente.productos;

function calcularTotalCarrito(clientePedido) {
    let granTotal = 0;
    
    for (let i = 0; i < clientePedido.length; i++){
        let abreviado = clientePedido[i];
        let calculoProducto = 0;
        calculoProducto = abreviado.precio * abreviado.cantidad;
        granTotal = calculoProducto + granTotal;
    }
    return granTotal;
}

let total = calcularTotalCarrito(detalleProducto);
let costoEnvio = 150;
if ( total >= 1500){
    console.log(`"¡Felicidades ${pedidoCliente.nombreCliente}! Tu pedido califica para envío gratis a la comunidad. Total a pagar: ${total}"`);
} else {
    console.log(`"Pedido procesado para ${pedidoCliente.nombreCliente}. Envío: $${costoEnvio}. Total a pagar: $${total + costoEnvio}"`)
}

// const calcularTotalCarritoFlechaPro = (clientePedido) => 
//    clientePedido.reduce((acumulado, producto) => acumulado + (producto.precio * producto.cantidad), 0);