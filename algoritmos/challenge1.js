// import data from './data';

const data = ["a", 10, "b", "hola", 122, 15];


function getLetters(array) {
  return array.filter(element => typeof element === 'string' ).map(el => el.split('').join(''))
}

function getNumbers(array) {
  return array.filter(element => typeof element === 'number')
}


function getBigger(array) {
  return getNumbers(array).sort((a, b) => a - b)[-1]
  
}

const onlyLetters = getLetters(data);
const onlyNumbers = getNumbers(data);
const bigger = getBigger(data);


console.log(onlyLetters, 'letters', onlyNumbers, 'numbers', bigger, 'bigger');