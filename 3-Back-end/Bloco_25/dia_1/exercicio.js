// Exercício 1: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "MASCULINO" .

use('erp');
db.clientes.aggregate(
  [
    {
      $match:
      {
        sexo: "MASCULINO"
      }
    }
  ]
)

// Exercício 2: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 .

use('erp');
db.clientes.aggregate(
  [
    {
      $match:
      {
        sexo: "FEMININO",
        dataNascimento: {
          $gte: ISODate('1995-01-01'),
          $lte: ISODate('2005-12-30')
        }
      }
    }
  ]
)

// Exercício 3: Utilizando o estágio $match , escreva uma agregação para retornar somente os clientes do sexo "FEMININO" e com data de nascimento entre os anos de 1995 e 2005 , limitando a quantidade de documentos retornados em 5 .

use('erp');
db.clientes.aggregate([
  {
    $match:
    {
      sexo: "FEMININO",
      dataNascimento: {
          $gte: ISODate('1995-01-01'),
          $lte: ISODate('2005-12-30')
        }
    }
  },
  {
    $limit: 5
  }
]
)

// Exercício 4: Conte quantos clientes do estado SC existem na coleção. Retorne um documento em que o campo _id contenha a UF e outro campo com o total.

use('erp')
db.clientes.aggregate([
  {
    $match:
    {
      "endereco.uf": "SC"
    }
  },
  {
    $group:
    {
      _id: "SC",
      count: { $sum: 1 }
    }
  }
])

// Exercício 5: Agrupe os clientes por sexo . Retorne o total de clientes de cada sexo no campo total
use('erp')
db.clientes.aggregate([
  {
    $group:
    {
      _id: "$sexo",
      total: { $sum: 1 }
    }
  }
])

// Exercício 6: Agrupe os clientes por sexo e uf . Retorne o total de clientes de cada sexo no campo total .

use('erp');
db.clientes.aggregate(
  [
    {
      $group:
      {
        _id: {
          sexo: "$sexo",
          uf: "$endereco.uf"
        },
        total: { $sum: 1 }
      }
    }
  ]
)

// Exercício 7 : Utilizando a mesma agregação do exercício anterior, adicione um estágio de projeção para modificar os documentos de saída, de forma que se pareçam com o documento a seguir (não se importe com a ordem dos campos):
use('erp');
db.clientes.aggregate(
  [
    {
      $group:
      {
        _id: {
          sexo: "$sexo",
          uf: "$endereco.uf"
        },
        total: { $sum: 1 }
      }
    },
    {
      $project:
      {
        _id: 0,
        "estado": "$_id.uf",
        "sexo": "$_id.sexo",
        "total": 1
      }
    }
  ]
)

// Exercício 8 : Descubra quais são os 5 clientes que gastaram o maior valor.
use('erp');
db.vendas.aggregate(
  [
    {
      $match: 
      {
        status: { $in: ["ENTREGUE", "EM SEPARACAO"] }
      }
    },
    {
      $group:
      {
        _id: "$clienteId",
        valorTotal: {
          $sum: "$valorTotal"
        }
      }
    },
    {
      $sort: {
        valorTotal: -1
      }
    },
    {
      $limit: 5
    }
  ]
)
