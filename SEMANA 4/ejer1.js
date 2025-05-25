/*
    Declara tres variables a, b y c con valores numéricos y utiliza condicionales  para determinar cuál de ellos es el mayor. 
*/


let a = parseFloat(prompt("Ingresa el valor de 1:"));
let b = parseFloat(prompt("Ingresa el valor de 2:"));
let e = parseFloat(prompt("Ingresa el valor de 3:"));
let resultado;


if (a >= b && a >= c) {
    resultado = a;
} else if (b >= a && b >= c) {
    resultado = c;
} else {
    resultado = c;
}


alert("El mayor es: " + resultado);
