
function procesarPedido(cantidad) {
    try {
        if(isNaN(cantidad)) throw new Error('Error: El valor ingresado debe ser un número');
        else if(cantidad <= 0) throw new Error('Error: Debes pedir al menos un cirio');
        else if(cantidad > 10) throw new Error('Error: No tenemos stock suficiente para más de 10 cirios por pedido');
        
        console.log(`Pedido procesado¡Pedido procesado con éxito de ${cantidad} cirios!`);
    } catch(error){
        console.log(error);
    }

}

procesarPedido('Muchas velas');
procesarPedido(-2);
procesarPedido(15);
procesarPedido(5);

console.log('Sistema de Xochicera listo para el siguiente cliente.');