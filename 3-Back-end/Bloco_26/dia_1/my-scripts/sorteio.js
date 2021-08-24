const readline = require('readline-sync');

const random = () => {
  return Math.floor(Math.random() * 11)
}

const sorteio = () => {
  const number = readline.questionInt("Digite um numero: ");
  const randomNumber = random();

  number === randomNumber ? console.log("Parabéns, número correto!"):
  console.log(`Opa, não foi dessa vez. O número era ${randomNumber}`);

}

const again = () => {
  const question = readline.question('Deseja jogar novamente? (Sim - Não) ')
  // question === 'Sim' ? sorteio(): console.log('Até mais');
  
  if(question === 'Sim') {
    sorteio();
    again();
  }
  return;
}

sorteio();
again();

module.exports = { sorteio, again }