// Nos permite comparar valores

let a = 3, b = 2, c = "3";

let z = a == b; //se revisa el valor sin importar el tipo
console.log(z);

// Revisa los valores pero tambien el tipo
z = a === c;
console.log(z);

// Si A es distinto a C
z = a != c;
console.log(z);

z = a !== c;
console.log(z);

// En JavaScript moderno, la buena práctica es usar siempre === y !== para evitar errores de tipo inesperados.  

let a2 = 3, b2 = 3, c2 = "3";

let z2 = a2 < b2;
console.log(z2);

z2 = a2 <= b2;
console.log(z2);

z2 = a > b2;
console.log(z2);

z2 = a2 >= b2;
console.log(z2);


let a3 = 10;

if(a3 % 2 == 0){
    console.log("Es un número par");
} else {
    console.log("Es un número impar");
}

let edad = 20, adulto = 18;

if( edad >= adulto) {
    console.log("Felicidades ya eres mayor de edad.");
} else {
    console.log("Aún no eres un ciudadano.")
}
