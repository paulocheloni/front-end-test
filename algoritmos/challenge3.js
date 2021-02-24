function getRandomNumber () {
  return Math.round(Math.random() * 9)
}

function randomAlphaNumeric() {
  const randomCharString =  Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 4);

  const randomAlph = randomCharString.split('').map(char => {
    const number1 = getRandomNumber()
    const number2 = getRandomNumber()
    const number3 = getRandomNumber()
    if (number1 < number2) {
      return number3
    }
    return char
  })

  return randomAlph.join('')
}

function generateId() {
  return [1,2,3,4].map(randomAlphaNumeric).join('-')
}

const id = generateId();

