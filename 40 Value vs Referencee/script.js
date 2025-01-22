/**
 * 
 
JavaScript differentiates Data Types on:

    Primitive values (Number, String, Boolean, Null, Undefined...)
    Complex values (Objects, Arrays)
 */

/*
    When copying primitive values, JavaScript is going to behave as we expect it to. You just need to see what was the value of the variable at the time of the assignment. Let me give you a few real examples
     */
let x = 1;
let y = x;

x = 2;

console.log(x); // 2
console.log(y); // 1

//For Strings
let firstPerson = "Mark";
let secondPerson = firstPerson;

firstPerson = "Austin";

console.log(firstPerson); // Austin
console.log(secondPerson); // Mark

/*
Copying Complex Values:

When copying complex values, JavaScript engine is not going to behave as you would initially think it would.

Let me give you an example:

*/
const animals = ["dogs", "cats"];
const otherAnimals = animals;

animals.push("llamas");

console.log(animals); // [ 'dogs', 'cats', 'llamas' ]
console.log(otherAnimals); // [ 'dogs', 'cats', 'llamas' ]

//Copying objects
const person = {
  firstName: "Jon",
  lastName: "Snow",
};

const otherPerson = person;

person.firstName("JOHNNY");

console.log(person); // { firstName: 'JOHNNY', lastName: 'Snow' }
console.log(otherPerson); // { firstName: 'JOHNNY', lastName: 'Snow' }
