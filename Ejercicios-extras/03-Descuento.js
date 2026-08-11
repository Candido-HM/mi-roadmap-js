function calcularDescuento(precio, porcentaje){

    try{
        if (precio <= 0) throw new Error("El precio debe ser mayor a 0");
        let total = precio - (precio *(porcentaje /100));
        console.log(`Precio final:$${total}`);
    } catch(error) {
        console.log(`Error atrapado:${error.message}`);
    }

}

calcularDescuento(500,10);
calcularDescuento(-100, 10);