const groceryList = [29, 12, 45, 35, 87, 110];

let sum = 0;
groceryList.forEach((item) => {
  sum += item;
});
console.log(sum);

/***
 *
 * Using the reduce method
 */

const total = groceryList.reduce(
  (accumulator, current_value) => accumulator + current_value,
  0
);
console.log(total);

/***
 *
 *
 */
const randomnumbers = [3, 3, 5, 6, 7, 8, 5, 2];

const totalsum = randomnumbers.reduce((acc, val) => {
  return acc + val;
}, 0);

console.log(totalsum);

/***
 * 
 * 
 The reduce method takes 2 parameters: accumulator and currentValue.

Accumulator is something that we initialise, then the callback function is executed many times, in each time the currentValue will be set to one element of the array, so in each call the current value is added to the accumulator.

The reduce method takes two arguments, the first one is the callback function that runs for the each element in the array and the second one is the initial value of the accumulator.

The result of the reducer method is always going to be a single value. In this example, that value is the total all item prices.
 */
