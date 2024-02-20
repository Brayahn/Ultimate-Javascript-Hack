/**
 *
 * ARITHMETIC OPERATORS
 *
 */
const a = 5;
const b = 10;

let result = 0;

//Addition
result = a + b;

//Subtraction
result = a - b;

//Multiplication
result = a * b;

//Division
result = a / b;

//Exponent
result = b ** a;

//modulo  --remainder after division
result = a % b;

//Increment or Decrement operators
result++;
result--;

console.log(result);

/**
 *
 * COMPARISON OPERATORS  >>> true/false
 *
 */

const c = 10;
const d = 20;

//less than or equal
console.log(c <= d);

//greater than
console.log(d > c);

//Loose Equality operator  >> only compares values
console.log(d == c);

//Not Equal
console.log(d != c);

//Strict Equality  >> compares values and data types >> recommended
console.log(a === b);

//Strict Inequality
console.log(a !== b);

/****
 *
 * Logical OPerators
 *
 *
 */
//AND (&&)  >> All operands need to be true >> True
console.log(true && false);

//OR (||) >> at least one operand is true
console.log(false | true);

//NOT (!)
//console.log(!false);

/**
 *
 * Assignment Operators  (the equals sign)
 *
 */
let mynumber = 5;

//mynumber +=5; // mynumber = mynumbber + 5;
//mynumber -=5; // mynumber = mynumbber - 5
//mynumber *=5; // mynumber = mynumbber * 5;
mynumber /= 5; // mynumber = mynumbber / 5;

console.log(mynumber);
