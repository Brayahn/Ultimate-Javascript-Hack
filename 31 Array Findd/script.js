//Arrray Find

//The find method returns the first value that satisfies thhe condition

const numbers = [-2, 4, 4, 7, 88, 9, 1];

const values = numbers.find((number) => number >= 5);
console.log(values);

/**
 * Second Example
 */
const cities = ["Nairobi", "Kisumu", "Mombasa"];

const cityfind = cities.find((city) => city.startsWith("K"));

console.log(cityfind);
