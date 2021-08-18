// 1 - Utilizando o operador $all , retorne todos os filmes que contenham action e adventure no array category .

use('test');
db.movies.find(
  {
    category: { $all: ["action", "adventure"]}
  }
)

// 2. Agora retorne os filmes que contenham action no array category e possuem nota do IMDB maior do que 7 .
use('test');
db.movies.find(
  {
    category: "action",
    imdbRating: {$gt: 7}
  }
)


// 3. Adicione um array chamado ratings ao filme Batman com os seguintes valores: [85, 100, 102, 105] . Dica: lembre-se do operador $each visto no dia anterior.
use('test');
db.movies.updateOne(
  {
    title: "Batman"
  },
  {
    $addToSet: {
      ratings: {
        $each: [85, 100, 102, 105],
      }
    }
  }
);


// 4. Adicione um array chamado ratings ao filme Godzilla com os seguintes valores: [78, 52, 95, 102] .
use('test');
db.movies.updateOne(
  {
    title: "Godzilla"
  },
  {
    $addToSet: {
      ratings: {
        $each: [78, 52, 95, 102]
      }
    }
  }
)

// 5. Adicione um array chamado ratings ao filme Home Alone com os seguintes valores: [200, 99, 65] .
use('test');
db.movies.updateOne(
  {
    title: "Home Alone"
  },
  {
    $addToSet: {
      ratings: {
        $each: [200, 99, 65]
      }
    }
  }
);

// 6. Retorne todos os filmes com ratings maior do que 103 , exibindo apenas os campos title e ratings .
use('test');
db.movies.find(
  {
    ratings: {
      $elemMatch: {
        $gt: 103
      }
    }
  },
  {
    _id: false,
    title: true,
    ratings: true
  }
);

// 7. Retorne todos os filmes com ratings entre 100 e 105 , exibindo apenas os campos title e ratings .
use('test');
db.movies.find(
  {
    ratings: {
      $elemMatch: {
        $gte: 100,
        $lte: 105
      }
    }
  },
  {
    _id: false,
    title: true,
    ratings: true
  }
);

// 8. Retorne todos os filmes com ratings entre 64 e 105 e divisíveis por 9 , exibindo apenas os campos title e ratings .
use('test');
db.movies.find(
  {
    ratings: {
      $elemMatch: {
        $gte: 64,
        $lte: 105,
        $mod: [9, 0]
      }
    }
  },
  {
    _id: false,
    title: true,
    ratings: true
  }
);

db.movies.find({})
