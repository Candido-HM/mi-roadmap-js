//Ejercicios para repasar IF / ELSE
// El Cajero Automático (Validación de Fondos)
let saldoCuenta = 100;
let montoRetiro = 10;
let messageCajero;

if (montoRetiro <= 0) {
    messageCajero = "Monto no válido";
}
else if (montoRetiro > saldoCuenta) {
    messageCajero = "Fondos insuficientes";
} 
else {
    saldoCuenta = saldoCuenta - montoRetiro;
    messageCajero = `Retiro exitoso.Tu nuevo saldo es:${saldoCuenta}`;
} 
console.log(messageCajero);

// Sistema de Acceso con Membresía (Operadores Lógicos)
let tieneBoleto = false;
let esVIP = true;
let estaBaneado = false;
let messageAcceso;

if ((tieneBoleto || esVIP ) && !estaBaneado) {
    messageAcceso = "Acceso concedido";
} else {
    messageAcceso = "Acceso denegado";
}
console.log(messageAcceso);