const states = document.getElementById('state');
function criarOptions() {
  const stateList = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let index = 0; index < stateList.length; index +=1) {
    const createOptions = document.createElement('option');
    states.appendChild(createOptions).innerText = stateList[index];
    states.appendChild(createOptions).value = stateList[index];
  }
}

function validateData(data) {
  if (data.indexOf('/') === 2 || data.indexOf('/') === 5 ) {
    const day = data.substr(0,2);
    const month = data.substr(3,2);
    const year = data.substr(6,4);
    if ((day > 0 && day <= 31) && (month > 0 && month <=12) && (year >=0 && year < year.length === 4 )) {
      return true;
    }
  }
  return false;
}

function checkData () {
  const inputData = document.querySelector('.input-data');
  let data = inputData.value;
  const userData = validateData(data);
  if(!userData && data.length) {
    inputData.value = '';
    alert('data invalida');
    return false;
  }
  return userData;
}

const clearButton = document.querySelector('.clear-button');
function clearFields() {
  const formElements = document.querySelectorAll('input');
  const textArea = document.querySelector('textarea');
  const div = document.querySelectorAll('.div-curriculum');

  for(let index = 0; index < formElements.length && index < div.length; index += 1 ){
    const userInput = formElements[index];
    userInput.value = '';
    textArea.value = '';
    div[index].innerText = '';
  }
}

clearButton.addEventListener('click', clearFields());
document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems, options);
});
window.onload = function () {
  criarOptions();
}