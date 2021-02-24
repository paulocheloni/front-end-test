const operations = {
  add(elements) {
    return elements.reduce((acc,el) => el + acc, 0)
  },

  subtract(elements) {
    return  elements.reduce((acc, el) => acc - el )
  },

  mult(elements) {
    return  elements.reduce((acc, el) => el * acc, 1)
  },

  divide(a, b) {
    if(b !== 0) return a / b
    return 'error: parameter b cannot have value 0' 
  }

}

console.log(operations.subtract([5, 10, 15]))