// If Else
let condicion = true;

if(condicion) {
    console.log("Condicion verdadera");
} else {
    console.log("Condición falsa");
}

// Otro ejemplo else if
let numero = 3;

if(numero == 1 ) {
    console.log("Número uno");
} else if(numero == 2) {
    console.log("Número dos");
} else if (numero == 3) {
    console.log("Número tres");
} else if ( numero == 4) {
    console.log("Número cuatro");
} else {
    console.log("Número desconocido");
}

// Ejercicio con if / else para calcular la estación del año
let mes = 2;
let estacion;

if(mes == 1 || mes == 2 || mes == 12) {
    estacion = "Invierno";
}
else if (mes == 3 || mes == 4 || mes == 5) {
    estacion = "Primavera";
}
else if (mes == 6 || mes == 7 || mes == 8) {
    estacion = "Verano";
}
else if (mes == 9 || mes == 10 || mes == 11){
    estacion = "Otoño";
} 
else {
    estacion = "Valor incorrecto";
}
console.log(estacion);

// Ejercicio Calcular la hora del día
let hora = 23;
let mensaje;

if (hora == 0 && hora < 6) {
    mensaje = "Durmiendo";
} 
else if (hora >= 6 && hora <= 11) {
    mensaje = "Buenos días" ;
}
else if (hora >= 12 && hora <= 18) {
    mensaje = "Buenas tardes";
}
else if (hora >= 19 && hora <= 24) {
    mensaje = "Buenas noches";
}
else {
    mensaje = "Valor incorrecto";
}
console.log(mensaje);