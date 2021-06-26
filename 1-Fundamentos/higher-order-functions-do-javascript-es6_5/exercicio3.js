const assert = require('assert');

const italo = {
  name: 'Italo',
  age: 21,
  likes: ['fly fishing'],
  nationality: 'Brazilian',
};

const gunnar = {
  name: 'Gunnar',
  age: 30,
  likes: ['hiking', 'scuba diving', 'taking pictures'],
  nationality: 'Icelandic',
};

// complete a assinatura da função abaixo
const personLikes = ({ name, age, likes} ) => `${name} is ${age} years old and likes ${likes.join(', ')}.`;

assert.strictEqual(personLikes(italo), 'Italo is 21 years old and likes fly fishing.');
assert.strictEqual(personLikes(gunnar), 'Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.');