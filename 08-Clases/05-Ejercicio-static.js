class ProductoXochi{

    static contadorProductos = 0;

    static get MAX_PRODUCTOS() {
        return 3;
    }

    constructor(nombre, costo) {
        this._nombre = nombre;
        this._costo = costo;

        if (ProductoXochi.contadorProductos < ProductoXochi.MAX_PRODUCTOS){
            this.codigoUnico = ++ProductoXochi.contadorProductos;
        } else {
            console.log(`Ha superado el limite de productos. Error en el producto: ${this._nombre}`);
        }
        
    }

    obtenerDetalles() {
        return "Producto: " + this._nombre + ", Costo: " + this._costo;
    }

}

let produto1 = new ProductoXochi('Cirio pascual', 4500);
let produto2 = new ProductoXochi('Cirio mediano', 3500);
let produto3 = new ProductoXochi('Cirio chico', 1500);
let produto4 = new ProductoXochi('Vela decorativa', 500);
console.log(ProductoXochi.MAX_PRODUCTOS);