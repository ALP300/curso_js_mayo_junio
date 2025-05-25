/*
Suma condicional de múltiplos:
   Pide un número N y suma solo los múltiplos de 3 o 5 hasta N. Muestra la suma y los múltiplos encontrados.
*/

//Pedir un número N al usuario
function sumaMultiplos(N){
   if (isNaN(N) || N < 1) {
      return "Error: Ingresa un número positivo válido";
   }
   let suma = 0;
   let multiplos  = []

   for (let i = 1; i <= N; i++){
      if (i % 3 === 0 || i % 5 === 0) {
         suma+= i;
         multiplos.push(i);
      }
   }
   return {suma, multiplos};
let input = prompt("Ingresa un número positivo:")
let N = parseInt(input);

let resultado = sumaMultiplos(N);
if (typeof resultado === "String") {
   console.log('La suma de los multiplos es : ${resultado.suma}');
   console.log('La suma de los multiplos es : ${resultado.multiplos.join(", ")}');
}
}