"use strict";

class Producto {
    static contadorProductos = 0;
    constructor(nombre, precio) {
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    toString(){
        return `ID: ${this._idProducto} | Nombre: ${this._nombre} | Precio: ${this._precio}`
    }
}

class VelaArtesanal extends Producto {
    static idVelaArtesanal = 0;
    constructor(nombre, precio, tipo){
        super( nombre, precio);
        this._idVelaArtesanal = ++VelaArtesanal.idVelaArtesanal;
        this._tipo = tipo;
    }

    get idVelaArtesanal(){
        return this._idVelaArtesanal;
    }

    toString() {
        return `${super.toString()} | Tipo: ${this._tipo}`;
    }
}

class Inventario {
    static idInventario = 0;
    constructor(){
        this._idInventario = ++Inventario.idInventario;
        this._productos = [];
    }

    get idInventario(){
        return this._idInventario;
    }

    agregarProducto(producto){
        try { 
            if(producto instanceof Producto){
                this._productos.push(producto);
            } else {
                throw new Error('El objeto no es un producto válido.');
            }
        } 
        catch(error) {
            console.log(error.message);
        }
    }

    mostrarInventario() {
        let productoOrden = ' ';

        for(let inventario of this._productos){
            productoOrden += `\n ${inventario}`
        }

        console.log(`Inventario #${this._idInventario}, Productos:${productoOrden}`);
    }
}

let producto1 = new Producto('Cirio Pascual', 250);
let producto2 = new Producto('Vela decorativa', 120)
let producto3 = new Producto('Vela aromatica Big', 500);
let velaArtesanal1 = new VelaArtesanal('Mayordomia', 8500, 'Chica');
let velaArtesanal2 = new VelaArtesanal('Bautizo', 4200, 'Mediano');
let velaArtesanal3 = new VelaArtesanal('Tematica Bob Esponja', 2300, 'Chica');


let inventario1 = new Inventario();
let inventario2 = new Inventario();

inventario1.agregarProducto(producto2);
inventario1.agregarProducto(producto3);
// inventario1.mostrarInventario();
inventario2.agregarProducto(velaArtesanal1);
inventario2.agregarProducto(velaArtesanal3);
inventario2.agregarProducto('Otro producto')
inventario2.mostrarInventario()
console.log(producto1.toString());
console.log(velaArtesanal1.toString());