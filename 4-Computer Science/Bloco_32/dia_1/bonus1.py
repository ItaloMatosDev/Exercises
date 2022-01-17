# Exercício 1: Dada uma lista, descubra o menor elemento. Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2 .

lista = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]

menor = lista[0]

for i in lista:
  if i < menor:
    menor = i

print('menor: ', menor)