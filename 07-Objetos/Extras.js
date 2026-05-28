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