// Ejercicios de repaso Switch
let mes = 'FEBRERO';
let dias = 'Valor desconocido'

switch (mes.toLowerCase()) {
    case "enero": case "marzo": case "mayo": case "julio": case "agosto": case "octubre": case "diciembre":
        dias = 'Tiene 31 dias';
        break;
    case "abril": case "junio": case "septiembre":  case "noviembre": 
        dias = 'Tiene 30 días';
        break;
    case "febrero":
        dias = 'Tiene 28 días (a menos que sea bisiesto)';
        break;
    default:
        dias = 'Mes no válido';
        break;
}
console.log(dias);

// Sistema de calificación 
let grado = 'c';
let mensaje;

switch (grado.toUpperCase()) {
    case 'A':
        mensaje = 'Excelente desempeño';
        break;
    case 'B':
        mensaje = 'Buen trabajo';
        break;
    case 'C':
        mensaje = 'Puedes mejorar';
        break;
    case 'F':
        mensaje = 'Reprobado';
        break;
    default:
        mensaje = 'Grado no reconocido';
        break;
}
console.log(mensaje);

// Menú de operaciones Matemáticas
let num1 = 50;
let num2 = 25;
let resultado;
let operacion = 'restar';

switch (operacion.toLowerCase()) {
    case 'sumar':
        resultado = num1 + num2;
        break;
    case 'restar':
        resultado = num1 - num2;
        break;
    case 'multiplicar':
        resultado = num1 * num2;
        break;
    case 'dividir':
        resultado = num1 / num2;
        break;
    default:
        resultado = 'Operación en valido';
        break;
}
console.log(resultado);