'''








Crea una clase base Vehiculo con atributos marca y modelo, 
y un método descripcion que devuelva una cadena con esta
información. Luego, crea una clase derivada Coche que 
añada un atributo puertas y sobrescriba el método descripcion.
'''
class Vehiculo:
    def __init__(self, marca, modelo):
        self.marca= marca
        self.modelo= modelo
    def descripcion(self):
        return f"Vehículo: {self.marca} {self.modelo}"

class Coche(Vehiculo):
    def __init__(self, marca, modelo, puertas):
        super().__init__(marca, modelo)
        self.puertas= puertas
        
    def descripcion(self):
        return f"Coche: {self.marca} {self.modelo} , {self.puertas} puertas"

vehiculo= Vehiculo("Ferrari", "Mosquito")
coche= Coche("Ferrari", "Mosquito",2)
print(vehiculo.descripcion())
print(coche.descripcion())
    