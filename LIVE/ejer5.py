'''



Escribir un programa que cree un 
diccionario simulando una cesta 
de la compra. El programa debe 
preguntar el artículo y su precio
y añadir el par al diccionario, 
hasta que el usuario decida terminar. 
Después se debe mostrar por pantalla la
lista de la compra y el coste total, 
con el siguiente formato

Lista de la compra	
Artículo 1	Precio
Artículo 2	Precio
Artículo 3	Precio
…	…
Total	Coste
'''
canasta={}
continuar=True
while continuar:
    print("Holaaaa, bienvenido a La Casa Informática shop")
    articulo= input("Ingresa el artículo: ")
    precio= float(input("Ingresa el precio del artículo: "))
    canasta[articulo]=precio
    continuar= input("¿Quieres añadir artículos a la lista (Si/No) ")=="Si"
    coste=0
    print("Lista de la compra: ")
    for articulo, precio  in canasta.items(): 
        print(articulo, '\t' , precio)
        coste+=precio
    print('Coste total: ', coste)
        