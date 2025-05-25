/*
Declara una variable número con un valor numérico y utiliza condicionales para
determinar en qué rango se encuentra.
*/
let numero =  parseInt(prompt("Ingresa un número:"));

if (numero >= 0 && numero <= 10) {
  console.log("El numero esta entre 0 y 10");
} else if (numero > 10 && numero <= 20) {
  console.log("El numero esta entre 11 y 20");
} else if (numero > 20 && numero <= 30) {
  console.log("El numero esta entre 21 y 30");
} else if (numero > 30) {
  console.log("El numero es mayor que 30");
} else {
  console.log("Por favor, ingresa un numero positivo.");
}
