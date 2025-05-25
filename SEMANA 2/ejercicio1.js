/*
Determina el mayor de tres números: 
Declara tres variables a, b y c con
valores numéricos y utiliza 
condicionales 
para determinar cuál de ellos 
es el mayor.
*/
let a = prompt("Ingrese el primer número: "); //10
let b = prompt("Ingrese el segundo número: "); //"20"
let c = prompt("Ingrese el tercer número: "); //"30"
a= parseFloat(a);
b= parseFloat(b);
c= parseFloat(c);
/*
let resta= a - b;
let dividir= a / b;
let multiplicar= a * b;
let modulo= a % b;
let suma= a + b + c;
*/
if(isNaN(a) || isNaN(b) || isNaN(c)){
    console.log("Error: uno o más valores no son números.");
}else{
    if (a>=b && a>=c){
        console.log(`EL mayor es: ${a}`);
    } else if(b>=a && b>=c){
        console.log(`EL mayor es: ${b}`);
    } else{
        console.log(`EL mayor es: ${c}`);
    }
    
}
console.log(a);
console.log(b);
console.log(c);
console.log(suma);
