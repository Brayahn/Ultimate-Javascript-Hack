/**
 * 
 Objects are quite different from JavaScript’s primitive data-types (numbers, strings, booleans...) in the sense that while these primitive data-types all store a single value, objects can store multiple.
 */

const placeofbirth = "Nairobi";
const person = {
  age: 50,
  firstName: "Roy",
  LastName: "Keeane",
  Surname: "Reaves",
  Car: { brand: "Toyota", model: "Auris", color: "Red", Year: 2014 },
  //... one thing that we can notice is that the key and value have the same name. If that is the case, JavaScript allows us to write it like this:
  placeofbirth,
};

console.log(person);
