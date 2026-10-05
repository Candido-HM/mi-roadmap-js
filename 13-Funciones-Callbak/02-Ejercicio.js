"use strict";

const enfriarCirio = (tipoVela, callBack) => {
    console.log(`Enfriando....... ${tipoVela}`);

    setTimeout(() => {
        callBack(`¡El ${tipoVela} esta listo para empacar!`);
    }, 3000);
 }

 enfriarCirio('Cirio pascual', (mensaje) => console.log(mensaje));

 //

 function mostrarPrecio(precio) {
    console.log(`El precio total es: $${precio}`);
 }

 function calcularCostoVela(precioBase, cantidad, callback2) {
    callback2 ( precioBase * cantidad);//Ejecutamos la funcion mostrarPrecio.
 }

 calcularCostoVela(50, 4, mostrarPrecio);

 function calcularCostoVela2(precioBase, cantidad, callback3) {
    callback3 ( precioBase * cantidad);//Ejecutamos la funcion mostrarPrecio.
 }

 calcularCostoVela2(50, 5, (precio) => {
    console.log(`El precio es de: $${precio}`);
 })
 
function aplicarDescuento( precio, porcentaje, callbackDes) {
   let precioFinal = precio - (precio * (porcentaje / 100));
   console.log('Calculando descuento desde el sistema');
   setTimeout( () => {
      callbackDes(precioFinal);
   }, 1500);
}

aplicarDescuento(200, 10, (precioFina) => {
   console.log(`El precio con descuento es de:${precioFina}`);
}); 