// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

function valorFrequente(array){
  let frequente = array.count(array[0]);
  let moda = array[0];
  for(let i=0; i<array.length; i++){
    if(array.count(array[i]) > frequente){
      let moda = array[i];
      frequente = array.count(array[i]);
    }
  }

  return moda;
}

console.log(valorFrequente([2, 3, 2, 5, 8, 2, 3]));