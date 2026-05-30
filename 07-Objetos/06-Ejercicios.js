// Ejemplo de Objeto con metodo

let cirio = {
    tipo: 'Mayordomía',
    pesoGramos: 500,
    costoCera: 90,
    costoDecorado: 40,
    precioPublico: function(){
        return this.costoCera + this.costoDecorado
    }
}

console.log(cirio.precioPublico());

//Función constructor y uso de prototype
function Artesania(nombre, material, precio) {
    this.nombre = nombre;
    this.material = material;
    this.precio = precio;
}

Artesania.prototype.origen = 'Taller Xochicera';
let velaRosa = new Artesania('Vela rosa','Parafina china', 100);
let cirioGrande = new Artesania('Cirio', 'Cera de abeja', 500);
console.log(velaRosa.origen);
console.log(cirioGrande.origen);

// Ejercicio con call y apply

//Call
let moldeCirio = {
    precioBase: 120,
    calcularPresupuesto: function (cantidad, costoEnvio) {
        return (this.precioBase * cantidad) + costoEnvio;
    }
}

let pedidoFlores = {
    precioBase: 45
}

console.log(moldeCirio.calcularPresupuesto.call(pedidoFlores, 10, 80));

let datosExt = [20, 150];
console.log(moldeCirio.calcularPresupuesto.apply(pedidoFlores, datosExt));