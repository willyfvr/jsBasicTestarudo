function getAverage(numberOne, numberTwo) {

  const divisor = 2;
  let average = (numberOne + numberTwo) / divisor;

  return average;
}

// the best way to make that function

/**
 * Function to get the average of two numbers
 * @param {Number} numberOne  // First number
 * @param {Number} numberTwo  // Second number
 * @returns {} The average of the two numbers
 */
function getAverageImproved(numberOne, numberTwo) {
  const divisor = 2;
  return (numberOne + numberTwo) / 2;
}

let firstAverage = getAverage(4, 6);
let secondAverage = getAverageImproved(8, 12);

console.log('First average:', firstAverage);
console.log('Second average:', secondAverage);


//---------------------------------------------
//-- FUNCIONES DECLARATIVVAS --
function addNumbers(num1, num2) {
  let results = num1 + num2;

  return results;
}

/**
 * 
 * @param {*} operation  Es una función que recibe 2 números.
 * @param {*} num1 Número 1
 * @param {*} num2 Número 2
 * @returns 
 */
function calculte(operation, num1, num2) {
  return operation(num1, num2);
}

const substractNumbers = (num1, num2) => num1 - num2;


//-- FUNCIONES COMO EXPRESIONES --
const addNumbersTwo = function (num1, num2) {
  const results = num1 + num2;
  return results;
};

// FUNCIONES FLECHA (ARROW FUNCTIONS)
const addNumbersThree = (num1, num2) => {
  return num1 + num2;
};

// esta función se puede refactorizar de esta forma
const addNumbersFour = (num1, num2) => num1 + num2; // return implícito y sin llaves porque es una sola línea



// ejecuciones
let respuestaSuma = addNumbers(4, 5);
let respuestaSuma2 = addNumbersTwo(10, 2);
let respuestaSuma3 = addNumbersThree(7, 3);
let respuestaSuma4 = addNumbersFour(20, 30);

let respuestaDeCalculo = calculte(substractNumbers, 10, 5);
let respuestaDeCalculo2 = calculte(addNumbers, 10, 5);

console.log('El resultado de la resta es:', respuestaDeCalculo);

console.log('El resultado de la suma 1 es:', respuestaSuma);
console.log('El resultado de la suma 2 es:', respuestaSuma2);
console.log('El resultado de la suma 3 es:', respuestaSuma3);
console.log('El resultado de la suma 3 es:', respuestaSuma3);
console.log('El resultado de la calculo :', respuestaDeCalculo);
console.log('El resultado de la calculo2 :', respuestaDeCalculo2);


