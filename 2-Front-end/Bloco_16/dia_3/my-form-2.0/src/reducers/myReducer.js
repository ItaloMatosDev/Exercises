const INITIAL_STATE = {
  name: '',
  cpf: '',
};

function myReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LOGIN':
      return { name: action.name, cpf: action.cpf };
    default:
      return state;
  }
}

export default myReducer;