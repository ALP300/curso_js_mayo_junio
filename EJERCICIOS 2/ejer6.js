/*
Filtrado y estadística de temperaturas:
Dado un array de temperaturas de un mes,
 filtra los días con temperaturas mayores al
promedio y muestra estadísticas 
como el mínimo, máximo y promedio general.
*/
let temperatura=[13,14,16,20,22,3,40,25,2]
let promedio= temperatura.reduce((suma, temp)=>suma+temp, 0)/temperatura.length;
let mayoresPromedios= temperatura.filter(temp=>temp>promedio)
console.log(`Promedio: ${promedio.toFixed(2)}`)
console.log(`Los mayores al promedio son: ${mayoresPromedios}`)






