//cloning arrays

// 1st Method Spread operator

const numbers = [0, 1, 2, 3, 4, 5];

//console.log(...numbers);

const numbers2 = [...numbers];

numbers.push(9);
console.log(numbers);
console.log(numbers2);

/* 
2nd Method: Slice
*/

//Slice with no parameters picks the whole array as is
numbers3 = numbers.slice();

numbers3.push(129);

console.log(numbers3);

/*

Cloning Objects

1st otion: spread operator

*/

const person = {
  name: "Brian",
  otherName: "Maina",
  age: 50,
  residence: "Nairobi",
};

const otherPerson = { ...person };

person.age = 25;
otherPerson.age = 30;

console.log(person, otherPerson);

/*

Cloning Objects

2nd otion: Assign methhod

*/

person3 = Object.assign({}, person);

person3.age = 40;

console.log(person3);
