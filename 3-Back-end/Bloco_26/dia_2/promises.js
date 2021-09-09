const numeros = (num1, num2, num3) => {
  const promise = new Promise((resolve, reject) => {
    if(typeof(num1) != 'number' || typeof(num2) != 'number' || typeof(num3) != 'number'){
      reject(Error("Informe apenas números"));
    }

    const resultado = (num1 + num2) * num3;

    if(resultado < 50) {
      return reject('Valor muito baixo');
    }
    resolve(resultado);
  });

  return promise;
}

const random = () => {
  return Math.floor(Math.random() * 10 + 1)
}

// numeros(random(), random(), random())
//   .then(result => console.log(`resultado: ${result}`))
//   .catch(err => console.log(`erro: ${err}`));

// numeros('10', 2, 3)
//   .then(result => console.log(`resultado: ${result}`))
//   .catch(err => console.log(`erro: ${err}`));

const callNumber = async () => {
  try{
    const result = await numeros(random(), random(), random());
    console.log(result)
  } catch (err) {
    console.log(err);
  }
}

callNumber();