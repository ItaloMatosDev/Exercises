const assert = require('assert');

const pushNumber = (list, number) => {
  list.push(number);
  console.log(list);
};

let numbers = [];

setTimeout(() => pushNumber(numbers, 1), 3000);
pushNumber(numbers, 2);
pushNumber(numbers, 3);
setTimeout(() => pushNumber(numbers, 5), 1500);
// setTimeout(() => assert.deepStrictEqual(numbers, [2, 3, 5, 1]), 3000);