// Método Call

let persona1 = {
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto: function(titulo, tel) {
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre: 'Carlos',
    apellido: 'Lara'
}

//Uso de Apply para usar
//el método persona1.nombreCompleto con los datos del persona2
console.log(persona1.nombreCompleto('Lic', '6543210987'));

let arreglo = ['Ing', '7894561230'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));
//apply(persona2, ['Ing', '7894561230'])
