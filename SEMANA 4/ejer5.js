/*
5. Número máximo entre cuatro números:
Declara cuatro variables a, b, c y d con valores numéricos. Utiliza condicionales
para determinar cuál de los cuatro números es el mayor y muéstralo.

&& = y
||= o
*/
let a=25, b=20, c=30, d=10;
let mayor;
if (a>b && a>c && a>d){
    mayor=a
} else if (b>a && b>c && b>d){
    mayor=b
} else if(c> a && c> b && c>d){
    mayor= c
} else {
    mayor=d
}
console.log("El número mayor es: ", mayor)
