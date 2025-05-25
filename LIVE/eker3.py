'''






Los tramos del IVA en un país son los siguientes:

Básico: 10%
Reducido: 5%
Superreducido: 2%
Escribe un programa que pregunte al
usuario el importe de una compra y 
el tipo de IVA aplicado (básico, reducido, superreducido) 
y muestre por pantalla el total con IVA incluido. (10p)

'''
importe= input("Ingresa el importa de la compra: ")
tipo_iva= input("Ingresa el tipo de IVA (básico, reducido, superreducido): ").lower()
if tipo_iva=="básico":
    iva= 0.1
elif tipo_iva=="reducido":
    iva= 0.05
elif tipo_iva=="superreducido":
    iva= 0.02

total= importe*(1+iva)
print(f"El total con iva de: ({tipo_iva}) es: {total}")