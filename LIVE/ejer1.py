'''







Cálculo de Índice de Masa Corporal (IMC):
Escribe un programa que pregunte al usuario 
su peso en kilogramos y su altura en metros. 
Calcula el Índice de Masa Corporal (IMC) 
usando la fórmula IMC = peso / (altura * altura) 
y muestra la categoría correspondiente 
según el IMC (bajo peso, normal, sobrepeso, obesidad). (10 p)

'''
peso= float(input("Por favor ingresa el preso en kilogramos: "))
altura= float(input("Por favor ingresa la altura en metros: "))
imc= peso/ (altura*altura)

if imc<18.5:
    categoria= "Bajo peso"
elif 18.5<=imc<25:
    categoria="Normal"
elif 25<=imc<30:
    categoria="Sobrepeso"
else:
    categoria="Obesidad"

print(f"Su IMC es {imc}")
print(f"Categoría: {categoria}")