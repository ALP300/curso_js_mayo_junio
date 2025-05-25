/*
Determina el rango de un número: 
Declara una variable número con un valor numérico y utiliza condicionales para 
determinar en qué rango se encuentra. 

*/
let a = prompt("Ingrese el número: "); //10

a= parseFloat(a);

/*
let resta= a - b;
let dividir= a / b;
let multiplicar= a * b;
let modulo= a % b;
let suma= a + b + c;
*/
if(isNaN(a)){
    console.log("Error: Ingresa un número válido.");
}else{
    if (a<0){
        console.log(`EL número: ${a} está en rango negativo`);
    } else if(a>=0 && a<=100){
        console.log(`EL número ${a} está en rango de 0 a 100`);
    } else if(a>100 && a<=200){
        console.log(`EL número ${a} está en rango de 100 a 200`);
    } else{
        console.log(`EL número ${a} es mayor que 200`);
    }
    
}
