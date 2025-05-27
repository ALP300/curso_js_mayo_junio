'''










Crea una clase Rectangulo con atributos largo y ancho.
Implementa métodos para calcular el área y el perímetro.
Crea un objeto e imprime los resultados.

'''
class Rectangulo:
    def __init__(self, largo, ancho):
        self.largo= largo
        self.ancho= ancho
    def area(self):
       return self.largo*self.ancho
   
    def perimetro(self):
       return 2*(self.largo+self.ancho)

rect= Rectangulo(10,20)
print(f"Área: {rect.area()}")
print(f"Perímetro: {rect.perimetro()}")