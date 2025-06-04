/*








Evaluación de estudiantes:
Dado un array de estudiantes (nombre, notas[]), 
calcula el promedio individual y
muestra los que aprobaron (promedio ≥ 11) y 
su mención (suficiente, bueno, excelente).
*/

const estudiantes=[
    { nombre: "Leo", notas:[15,16,19] },
    { nombre: "Rosé", notas:[20,10,16]  },
    { nombre: "Marx", notas:[10,9,5]  },
    { nombre: "Dimon", notas:[10,10,2]  },
]
function evaluarEstudiantes(est){
    est.forEach(e => {
        const promedio= e.notas.reduce((suma,nota) => suma+nota,0)/e.notas.length;
        if (promedio>=11) {
            const mencion= promedio>=15?"Excelente" : promedio>=13 ? "Bueno": "Suficiente";
            console.log(`${e.nombre}: Promedio: ${promedio.toFixed(2)} - ${mencion}`)
        }
    });

}
evaluarEstudiantes(estudiantes)


/*
const numeros = [4, 2, 10, 1];
numeros.sort((a, b) => a - b); // ascendente
console.log(numeros); // [1, 2, 4, 10]
*/