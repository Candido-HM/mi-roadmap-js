
class ProductoXochi{
    constructor(nombre, costo) {
        this._nombre = nombre;
        this._costo = costo;
    }

    obtenerDetalles() {
        return "Producto: " + this._nombre + ", Costo: " + this._costo;
    }
}

class CirioMayordomia extends ProductoXochi {
    constructor(nombre, costo, pesoGramos) {
        super(nombre, costo);
        this._pesoGramos = pesoGramos;
    }

    obtenerDetalles () {
        return super.obtenerDetalles() + ", Peso: " + this._pesoGramos
    }
}

let pedido1 = new CirioMayordomia('Cirio Altar Grande', 300, 1200);
console.log(pedido1.obtenerDetalles());