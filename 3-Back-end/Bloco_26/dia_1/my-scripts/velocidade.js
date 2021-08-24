const readline = require('readline-sync');

const avgSpeed = () => {
  const distance = readline.questionInt('Qual a distancia (em metros)? ');
  const time = readline.questionInt('Qual o tempo em segundos? ');

  const avg = distance / time;

  console.log(`Velocidade media: ${avg} m/s`)
  
}

avgSpeed();

module.exports = { avgSpeed }
