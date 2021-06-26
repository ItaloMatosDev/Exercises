const spring = ['OUT', 'NOV', 'DEZ'];
const summer = ['JAN', 'FEV', 'MAR'];
const fall = ['ABR', 'MAI', 'JUN'];
const winter = ['JUL', 'AGO', 'SET'];

const months = [...spring, ...summer, ...fall, ...winter];
// console.log(months);

/* ---------------------------------------------------------- */

const imc = (peso, altura) => (peso / (altura*altura)).toFixed(2);
const patientInfo = [57, 1.70];

// console.log(imc(...patientInfo));

/* ---------------------------------------------------------- */

const people = {
  id: 101,
  name: 'Italo',
  age: 21,
};

const about = {
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer',
};

const customer = { ...people, ...about };
/*console.log(customer); {
  id: 101,
  name: 'Italo',
  age: 21,
  address: 'Av. Getúlio Vargas, 1000',
  occupation: 'Developer'
} */

/* ---------------------------------------------------------- */

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Morango', 'Maçã', 'Uva'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Calda de morango', 'Leite condensado', 'Chocolate'];

const fruitSalad = (fruit, additional) => {
  // Esreva sua função aqui
  return [...fruit, ...additional];
};

console.log(fruitSalad(specialFruit, additionalItens));