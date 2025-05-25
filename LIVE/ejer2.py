'''







Para ser elegible para un subsidio, debes 
tener al menos 18 años y tus ingresos mensuales
deben estar entre 500 y 2000. Escribe un 
programa que pregunte al usuario su edad y 
sus ingresos mensuales y muestre por pantalla 
si el usuario es elegible para el subsidio o no. 

'''
edad= int(input("Ingresa tu edad: "))
ingresos= input("Por favor ingrese su ingresos mensuales: ")
if edad>=18 and 500<= ingresos<=2000:
     print("Usted es elegible para el subsidio")
else:
    print("Usted no es elegible")