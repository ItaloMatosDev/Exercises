const product = {
  nameP: 'Smart TV Crystal UHD',
  price: '2399.90',
  seller: 'Bemol',
};

const { nameP, seller } = product;

// console.log(nameP);
// console.log(seller);

/* ---------------------------------------------------- */

const student = {
  a: 'Italo',
  b: 'Turma B',
  c: 'Matematica',
};

const { a: name, b: classAssigned, c: subject } = student;

// console.log(name);
// console.log(classAssigned);
// console.log(subject);

/* ------------------------------------------------------ */

const printProductDetails = ( {nameP, price,  seller }) => {
  console.log(`Promoção! ${nameP} por apenas ${price} é só aqui: ${seller}`);
}

printProductDetails(product);