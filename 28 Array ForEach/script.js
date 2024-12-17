const names = ["Jon", "Rose", "Brian", "Praise"];

for (let i = 0; i < names.length; i++) {
  console.log(i, names[i]);
}

//Syntax

/***
 * 
 
array.forEach((value, index) => {
	// ...
});

 * 
 * /*
 */

names.forEach((name, i) => {
  console.log(i, name);
});

/**
 * 
 * 
 * For each doees not allocate memory and returns undefined
 USE WHEN
    -You want to do something with each element of the array.

DON'T USE WHEN
    -You want to stop or break the loop when some condition is true
    -You're working with async code
 */

let sum = 0;

numbers = [90, 50, 50, 32, 53, 100];

numbers.forEach((number) => {
  sum += number;
});

console.log(sum);
