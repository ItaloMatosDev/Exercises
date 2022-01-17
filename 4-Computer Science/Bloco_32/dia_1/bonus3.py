# Exercício 3: Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N . Por exemplo, para N = 5 , o valor esperado será 15 .

# lista = [1,2,3]

n = 5
total = 0
for i in range(1, n+1):
  total = total + i

print(total)