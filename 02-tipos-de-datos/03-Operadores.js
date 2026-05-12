//  SECCIÓN 03: Operadores en JavaScript

let a = 3, b = 2;
let z = a + b;

//Incremento
//Pre-incremetno (el operador ++ antes de la variable)
z = ++a;
console.log(a);
console.log(z);

//Post-incremento (el operador ++ despues de la variable)
z = b++;
console.log(b);
console.log(z);


//Decremento
//Pre-decremento
z = --a;
console.log(z)
console.log(a);

//Post-decremento
z = b--;
console.log(z);
console.log(b);

//********************  Precedencia de operadores ************************
let s = 3, d = 2, f = 1, g = 4;

//En este caso la mutiplicación toma prioridad antes de relizar la suma (el resultado es el mismo para ambos ejemplos)
let x = s * d + f / g;
console.log(x)
x = f + s * d / g;
console.log(x);
//Se puede modificar el orden las operaciones usando ()
z = (f + s) * d / f;
console.log(z);