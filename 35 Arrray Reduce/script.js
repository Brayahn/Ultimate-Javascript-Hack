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
