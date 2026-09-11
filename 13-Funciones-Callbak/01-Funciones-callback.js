
function miFuncion1() {
    console.log('Función 1');
}

function miFuncion2() {
    console.log('Función 2');
}

miFuncion1();
miFuncion2();

//  Función de tipo callback
function imprimir(mensaje) {
    console.log(mensaje);
}

function sumar(op1, op2, funcionCallback) {
    let res = op1 + op2;
    funcionCallback(`Resultado: ${res}`);
}

sumar(5, 3, imprimir);

// LLamadas asincronas con uso setTimeout - retrasar el tiempo a que se ejecuta una función

function miFuncionCallback() {
    console.log('saludo asincrono despues de 3 segundos');
}

setTimeout(miFuncionCallback, 3000);

setTimeout(function () {console.log('Saludo asincrono 2')}, 4500);

setTimeout( () => console.log('saludo asincrono 3'), 5500); 

// setInterval sirve para mandar a llamar un funcion cada determinado tiempo - lo contrario a setTimeot

let reloj = () => {
    let fecha = new Date();
    console.log(`${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`);
}

setInterval(reloj, 1000);//Cada segundo