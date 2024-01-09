// Valid Data Types

// Strings Numbers Booleans Null Undefined Object Symbol

/*

This is a multiline Comment 

can use cmd + / as a shortcut for multiline comments 

*/

// simple strings
const singleQuote = "Hello";
const doubleQuotes = "Hello";

//complex strings
const persona = "Brian";
const backticks = `Hello, ${persona}`;

console.log(backticks);

//type of datatype
console.log(typeof backticks);

/*
NUMBERS
*/
const num1 = 2;
let num3 = 2;

const result = num1 + num3;
console.log(result);

/*

Booleans

*/
const isCool = true;

if (isCool) {
  console.log("You are cool");
} else {
  console.log("You are uncool...");
}

//true  - yes, correct, 1
//false - no, incorrect, 0

/*
Null

*/
let age = null;
console.log(typeof age);
console.log(age);

/*
undefined
*/
let x;
console.log(x);



//objects 

/*
used to group variables
*/

const person ={
    persona: 'James',
    age: 56
}

console.log(person.persona + ' is ' + person.age + ' years old' );


//Array

const arr = [4,4,5,5,3];

console.log(typeof arr)


//date 
const date = new Date();

console.log(date)