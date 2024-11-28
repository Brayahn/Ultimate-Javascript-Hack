/**
 Parameters vs Arguments 
 */

//Parameters - Used when definiing a fucntion

//Argumnets - Passed when making a function call

const square = (number) => {
  return number * number;
};

let result = square(50);
console.log(result);

/**
 *
 
from the abbove funciton 
(number)   >>> parameter
(50)   >>> argument

x
Parameters are used when defining a function, they are the names created in the function definition. Parameter is like a variable that is only meaningful inside of this function. It won't be accessible outside of the function.

Arguments are real values passed to the function when making a function call.
 */
