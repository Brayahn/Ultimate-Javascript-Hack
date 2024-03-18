hoisted(); // 'This function has been hoisted.'

function hoisted() {
  console.log("This function has been hoisted.");
}

/*

What is hoisting?

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

Basically, when Javascript compiles all of your code, all variable declarations using var are hoisted/lifted to the top of their functional (if declared inside a function) or to the top of their global scope (if declared outside of a function) regardless of where the actual declaration has been made. This is what we mean by “hoisting”.

*/

console.log(myString); // undefined
var myString = "test";
var myString;
console.log(myString); // undefined
myString = "test";

//To avoid this pitfall, we would make sure to declare and initialise the variable before we use it:

//Another great thing, is that constants and function expressions save us from doing that. Function expressions (the more modern way of writing functions, with const keyword), are not hoisted.
