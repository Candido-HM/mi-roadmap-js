
class DispositivoEntrada {
    static contadorDispositosEntrada = 0;

    constructor(tipoEntrada, marca) {
        this._idDispEntrada = ++DispositivoEntrada.contadorDispositosEntrada;
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get idDispEntrada() {
        return this._idDispEntrada;
    }

    get tipoEntrada() {
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada) {
        this._tipoEntrada = tipoEntrada;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    toString(){
        return `IdDisp:${this._idDispEntrada} Entrada:${this._tipoEntrada} Marca:${this._marca}`;
    }
}

class Mouse extends DispositivoEntrada {
    static contadorMouses = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idMouse = ++Mouse.contadorMouses;
    }
    
    get idMouse() {
        return this._idMouse;
    }

    toString () {
        return `${super.toString()} IDmouse:${this._idMouse}`;
    }
}

class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;

    constructor(tipoEntrada, marca) {
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado() {
        return this._idTeclado;
    }

    toString() {
        return `${super.toString()} IDteclado:${this._idTeclado}`;
    }
}

class Monitor {
    static contadorMonitores = 0;

    constructor(marca,tamano) {
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamano = tamano;
    }

    get idMonitor() {
        return this._idMonitor;
    }

    get marca() {
        return this._marca;
    }

    set marca(marca) {
        this._marca = marca;
    }

    get tamano() {
        return this._tamano;
    }

    set tamano(tamano) {
        this._tamano = tamano;
    }

    toString() {
        return `IdMonitor:${this._idMonitor} Marca:${this._marca} Tamaño:${this._tamano}`;
    }
}

class Computadora {
    static contadorComputadoras = 0;

    constructor(nombre, monitor, teclado, mouse) {
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._mouse = mouse;
    }

    get idComputadora() {
        return this._idComputadora;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get monitor() {
        return this._monitor;
    }

    set monitor(monitor) {
        this._monitor = monitor;
    }

    get teclado() {
        return this._teclado;
    }

    set teclado(teclado) {
        this._teclado = teclado;
    }

    get mouse() {
        return this._mouse;
    }

    set mouse(mouse) {
        this._mouse = mouse;
    }

    toString() {
        return `Id:${this._idComputadora} Nombre:${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._mouse}`;
    }
}

class Orden {
    static contadorOrdenes = 0;

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get idOrden() {
        return this._idOrden;
    }

    agregarComputadora(computadora) {
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        let computadorasOrden = '';
        
        for(let computadora of this._computadoras){
            computadorasOrden += `\n ${computadora}`
        }

        console.log(`Orden:${this._idOrden}, Computadoras:${computadorasOrden}`);
    }
}

let mouse1 = new Mouse('USB', 'HP');
let mouse2 = new Mouse('Bluetooth', 'Razer');
let teclado1 = new Teclado('Mecanico', 'Dell');
let teclado2 = new Teclado('Teclado', 'HyperX');
let monitor1 = new Monitor('Samsung', 14);
let monitor2 = new Monitor('MSI', 20)
let computadora1 = new Computadora('Gamer', monitor1, teclado2, mouse1);
let computadora2 = new Computadora('Ofimatica', monitor2, teclado1, mouse2);
let computadora3 = new Computadora('Oficina', monitor1, teclado2, mouse2);
let orden1 = new Orden();
let orden2 = new Orden();

orden1.agregarComputadora(computadora2);
orden1.agregarComputadora(computadora3);
orden2.agregarComputadora(computadora1);
// console.log(mouse1.toString());
// console.log(teclado1.toString());
// console.log(monitor1.toString());
// console.log(computadora2.toString());

orden1.mostrarOrden();
// orden2.mostrarOrden();

