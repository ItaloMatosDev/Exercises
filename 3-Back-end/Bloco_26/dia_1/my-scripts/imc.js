const readline = require('readline-sync');

const classificao = (imc) => {
  if (imc < 18.5) {
    console.log('Situação: Abaixo do peso (magreza)');
    return;
  }
  if (imc >= 18.5 && imc < 25) {
    console.log('Situação: Peso normal');
    return;
  }
  if (imc >= 25 && imc < 30) {
    console.log('Situação: Acima do peso (sobrepeso)');
    return;
  }
  if (imc >= 30 && imc < 35) {
    console.log('Situação: Obesidade grau I');
    return;
  }
  if (imc >= 35 && imc < 40) {
    console.log('Situação: Obesidade grau II');
    return;
  }
  console.log('Situação: Obesidade graus III e IV');
}


const peso = readline.questionFloat('Qual seu peso (em kg)? ');
const altura = readline.questionFloat('Qual sua altura (em metros)? ');

const calculaIMC = () => {
  const imc = peso / ( altura * altura );
  console.log(`IMC: ${imc.toFixed(2)}`);
  classificao(imc);
}


calculaIMC();

module.exports = { calculaIMC }