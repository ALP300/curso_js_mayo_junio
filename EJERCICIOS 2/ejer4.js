/*








Crea un arreglo de palabras. Muestra el original, 
uno invertido y otro con palabras
 en mayúsculas si tienen más de 5 letras.
*/
const palabras=["sol","luna","estrella", "cielo","fe"];
function analizarPalabras(array){
    const invertido= [...array].reverse();
    const mayusculas= array.map(p => p.length>5 ? p.toUpperCase() : p)
    console.log("Original: ", array)
    console.log("Invertido: ", invertido)
    console.log("Mayúscula: ", mayusculas)
}
analizarPalabras(palabras)


