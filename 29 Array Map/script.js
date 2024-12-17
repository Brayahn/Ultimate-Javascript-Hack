/**
 * 
 Difference between Array.map() and Array.forEach() is that the map() method allocates memory in order to store and return values. While the forEach() method does not allocate memory so it doesn't store any returned values. In the last lecture, we saw that the array.forEach() method has a return value of undefined.

The for each method also allows for a callback function that will allow you to change the original array, while the map method will instead return a new array while leaving the original one in its original state.


 */
const inventory = [
  { price: 5, name: "eggs" },
  { price: 4, name: "ham" },
  { price: 3, name: "mayo" },
  { price: 5, name: "bread" },
];


const price = inventory.map((item)=>(item.price));
const names = inventory.map((item)=>(item.name));


console.log (price);
console.log(names);
