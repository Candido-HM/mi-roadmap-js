
function VelaArtesanal(tipo, pesoGramos, costoMaterial, tiempoHoras){
    this.tipo = tipo;
    this.pesoGramos = pesoGramos;
    this.costoMaterial = costoMaterial;
    this.tiempoHoras = tiempoHoras;

    this.precioSugerido = function() {
        return this.costoMaterial * 2.5
    }
}

VelaArtesanal.prototype.origen = 'Taller Xochicera';

const inventario = [
    new VelaArtesanal('Cirio de Mayordomía Grande',1500,1000,8),
    new VelaArtesanal('Vela Chica para Altar.',500,700,6),
    new VelaArtesanal('Cirio Mediano',250,30, 4)
]
console.log(inventario[0].precioSugerido())
//Obtenemos las velas que pesan mayor a 500 gr
const velasPremiun = inventario.filter(peso => peso.pesoGramos >= 500);
console.log(velasPremiun);

function generarReporte(inventarioArreglo){
    for(let i = 0; i < inventarioArreglo.length; i++){
        let precio = inventarioArreglo[i].precioSugerido();
        //debemos obtener el precio sugerido
        console.log(precio);
        if (precio <= 200) {
            console.log(`La vela ${inventarioArreglo[i].tipo} es Estándar. Precio:${precio}`);
        } else {
            console.log(`La vela ${inventarioArreglo[i].tipo} es de Alta Gama. Precio ${precio}`)
        }
    }
}

generarReporte(inventario);