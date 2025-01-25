const person = {
  firstName: "Brian",
  car: {
    color: "blue",
    make: "toyota",
    model: "axio",
  },
  job: "Nutritionist",
};

const person_copy = { ...person };

//thhis changes the color on both ojects - spread operator only covers the outer object (shallow clone)
person_copy.car.color = "red";

console.log(person_copy);
console.log(person);

//coveering thee internal array now
//thhe below only covers one leevel of depthh
const person_copy2 = { ...person, car: { ...person.car } };

person_copy2.car.color = "white";

console.log(person_copy2);
console.log(person);

//deep cloniing removes all referencees to an even deeply nested object
/*

For this we will use stringify and parse methods

*/

const new_person = JSON.stringify(person);
const new_persona = JSON.parse(new_person);

/**
 * 
 The above 2 lines can be done as below 

 const new_persona = JSON.parse(JSON.stringify(person));
 
 */

console.log(new_persona);
