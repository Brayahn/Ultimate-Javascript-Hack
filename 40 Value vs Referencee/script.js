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

/*

When a variable is assigned a primitive value, it just copies that value. We saw that with number and strings examples.

On the other hand, when a variable is assigned a non-primitive value (such as an object, an array or a function), it is given a reference to that object’s location in memory. What does that mean?

In this example above, the variable otherPerson doesn’t actually contain the value { firstName: 'Jon', lastName: 'Snow' }, instead it points to a location in memory where that value is stored.


When a reference type value is copied to another variable, like otherPerson in the example above, the object is copied by reference instead of value. In simple terms, person & otherPerson don’t have their own copy of the value. They point to the same location in memory.When a reference type value is copied to another variable, like otherPerson in the example above, the object is copied by reference instead of value. In simple terms, person & otherPerson don’t have their own copy of the value. They point to the same location in memory.

When a new item is pushed to person, the array in memory is modified, and as a result the variable otherPerson also reflects that change.

We're never actually making a copy of a person object. We're just make a variable that points to the same location in the memory.
*/

/**
 * 
 Equality

We can prove that with a simply equality check.
 */

const person2 = { firstName: "Jon" };

const otherPerson2 = { firstName: "Jon" };

console.log(person2 === otherPerson2);
/**
 * 
You might expect person === otherPerson to resolve to true but that isn’t the case. The reason behind that is that although person & otherPerson contain identical objects, they still point to two distinct objects stored in different locations in memory.
 */
