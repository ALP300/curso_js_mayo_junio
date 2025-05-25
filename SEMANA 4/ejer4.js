 
/* 4. Comparación de dos números:
Declara dos variables a y b con valores numéricos y utiliza condicionales para
comparar si a es mayor, menor o igual a b */ 

a = parseInt(prompt("Ingrese el primer número"));
b = parseInt(prompt("Ingrese el segundo número"));

if (a > b) {
    alert(`${a} es mayor que ${b}`);
} else if (a < b ) {
    alert(`${a} es menor que ${b}`);
} else {
    alert(`${a} = ${b}`);
}