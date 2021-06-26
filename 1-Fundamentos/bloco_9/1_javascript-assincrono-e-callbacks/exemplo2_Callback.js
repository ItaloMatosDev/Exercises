const assert = require('assert');

const userFullName = ({ firstName, lastName }) => `Hello! My name is ${firstName} ${lastName}`;
const userNationality = ({ firstName, nationality }) => `${firstName} is ${nationality}`;

const getUser = (callback) => {
  const userToReturn = {
    firstName: "Ivan",
    lastName: "Ivanovich",
    nationality: "Russian"
  };
  if (callback === 'nationality') {
    return userNationality(userToReturn);
  }
  return userFullName(userToReturn);
};

assert.strictEqual(getUser('fullname'), "Hello! My name is Ivan Ivanovich"); // complete a chamada da função de getUser
assert.strictEqual(getUser('nationality'), "Ivan is Russian"); // complete a chamada da função de getUser