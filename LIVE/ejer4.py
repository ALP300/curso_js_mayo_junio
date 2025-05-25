'''






Escribe un programa que pregunte al 
usuario el total de su compra y si 
tiene un código de descuento. Si el
código es "DESCUENTO10", se aplicará 
un 10% de descuento. Si el código es 
"
se aplicará un 20% de descuento. 
Muestra el total después de aplicar el descuento, 
si corresponde, y un mensaje si el código no es válido. 
'''
total_compra= float(input("Por favor ingresa el total de la compra: "))
codigo= input("Ingrese el código de descuento (Presione ENTER si no tienes): ")
if codigo=="DESCUENTO10":
    descuento=0.10
    total_final= total_compra*(1-descuento)
    print("Descuento aplicado del 10% ")
    print(f"Total después del descuento {total_final}")
elif codigo=="DESCUENTO20":
    descuento=0.2
    total_final= total_compra*(1-descuento)
    print("Descuento aplicado del 20% ")
    print(f"Total después del descuento {total_final}")
elif codigo=="":
    print(f"No se aplicó descuento {total_compra}" )
else:
    print(f"Código de descuento no válido, total {total_compra}")
    