'''






Crea una clase CuentaBancaria con un atributo 
privado saldo. Implementa métodos para depositar,
retirar y consultar el saldo, asegurándote 
de que el saldo no pueda ser negativo.

'''
class CuentaBancaria:
    def __init__(self, saldo_inicial):
        self.saldo= saldo_inicial if saldo_inicial>=0 else 0
    
    def depositar(self, cantidad):
        if cantidad>0:
            self.saldo+=cantidad
            return f"Depósito existoso, tu saldo final es: {self.saldo}"
        return "Cantidad inválida"

    def retirar(self, cantidad):
        if cantidad>0 and cantidad<=self.saldo:
            self.saldo-=cantidad
            return f"Retiro existoso, tu saldo final es: {self.saldo}"
        return "Saldo insuficiente"

    def consultar_saldo(self):
        return f"El saldo final es: {self.saldo}"

cuenta= CuentaBancaria(2000)
print(cuenta.consultar_saldo())
print(cuenta.depositar(500))
print(cuenta.retirar(4000))