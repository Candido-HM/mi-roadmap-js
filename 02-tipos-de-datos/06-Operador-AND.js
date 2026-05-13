// Operador AND -> && regresa TRUE solo si ambos operandos son true.
let a = 5;
let valMin = 0, valMax = 10;

if (a >= valMin && a <= valMax) {
    console.log("Esta dentro del rango");
} else {
    console.log("Error, esta fuera del rango");
}

// Operador OR -> || regresa TRUE si cualquier operando es verdadero.
let vacaciones = false;
let diaDescanso = false;

if ( vacaciones || diaDescanso) {
    console.log("Puede asistir al juego del hijo");
} else {
    console.log("El padre esta ocupado");
}

// Operador ternario
let resultado = (1 > 2) ? "verdadero" : "falso";
console.log(resultado);

let numero = 9;
resultado = numero % 2 == 0 ? "Número par" : "Número inpar";
console.log(resultado);

// Clase extra - Convertir de string a Number
//console.log( typeof miNumero) typeof nos indica el tipo dato.
let miNumero = "10";
let edad = Number(miNumero);

if(isNaN(edad)) {
    console.log("No es un número")
} else {
    if(edad >= 18) {
    console.log("Puedes votar");
    } else {
        console.log("Aun no puedes votar")
    }
}
console.log( typeof edad)
///Resolver con operador ternario
let elecciones = (edad >= 18) ? "Ya puedes votar" : "No puedes votar";
console.log(elecciones)

//Precedencia de operadores
let x = 5;
let y = 10;
let r = ++x + y--;
console.log(x);
console.log(y);
console.log(r);

let result = 4 + 5 * 6 / 3; // 4 + ((5 * 6) / 3)
console.log(result);

result = (4 + 5) * 6 / 3;
console.log(result)