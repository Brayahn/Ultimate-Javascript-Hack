//The .sort method sorts an array of strings alphabetically. Take for example this array of names:The .sort method sorts an array of strings alphabetically. Take for example this array of names:

// Mutates Original Array

//

const names = ["Anne", "Carl", "Bob", "Dean"];

names.sort();
console.log(names);

const numbers = [2, 22, 23, 24, 6, 7, 8, 99, 566];

//sort numbers in ascending orderr
// to sort in descending order >>>> b - a
numbers.sort((a, b) => a - b);
console.log(numbers);

